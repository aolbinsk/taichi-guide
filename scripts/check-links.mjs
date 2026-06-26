#!/usr/bin/env node
// Verify every media URL in src/data/mediaLibrary.ts still resolves.
//
//   node scripts/check-links.mjs
//
// YouTube ids are checked via the oembed endpoint: a 200 means the video is
// public AND embeddable; 401/404 means private/removed/embedding-disabled — the
// only states that actually break the in-app gallery. Reference/image pages are
// checked with a GET (some hosts reject HEAD). Node 18+ global fetch, no deps.
// Exits non-zero if anything is dead so it can gate CI.

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const libPath = join(root, 'src/data/mediaLibrary.ts');
const lib = await readFile(libPath, 'utf8');

// YouTube ids passed to yt('<id>', …).
const ytIds = [...new Set([...lib.matchAll(/\byt\(\s*'([\w-]{11})'/g)].map((m) => m[1]))];
// Every other URL string literal (ref pages, wikimedia File: links, images).
const urls = [...new Set([...lib.matchAll(/'(https?:\/\/[^']+)'/g)].map((m) => m[1]))]
  .filter((u) => !u.includes('youtube.com/watch') && !u.includes('youtu.be/'));

const UA = 'Mozilla/5.0 (compatible; FormScrubLinkCheck/1.0)';
const timeout = (ms) => {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  return { signal: c.signal, done: () => clearTimeout(t) };
};

async function checkYouTube(id) {
  const watch = `https://www.youtube.com/watch?v=${id}`;
  const oembed = `https://www.youtube.com/oembed?url=${encodeURIComponent(watch)}&format=json`;
  const t = timeout(20000);
  try {
    const res = await fetch(oembed, { headers: { 'User-Agent': UA }, signal: t.signal });
    if (res.ok) {
      const j = await res.json().catch(() => ({}));
      return { id, ok: true, status: res.status, title: j.title, author: j.author_name };
    }
    return { id, ok: false, status: res.status, reason: res.status === 401 ? 'private/embedding-disabled' : 'removed' };
  } catch (e) {
    return { id, ok: false, status: 0, reason: e.name === 'AbortError' ? 'timeout' : String(e) };
  } finally {
    t.done();
  }
}

async function checkPage(url) {
  const t = timeout(25000);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow', signal: t.signal });
    // Drain a little so the socket frees; we only care about status.
    res.body?.cancel?.();
    return { url, ok: res.ok, status: res.status };
  } catch (e) {
    return { url, ok: false, status: 0, reason: e.name === 'AbortError' ? 'timeout' : (e.cause?.code || String(e)) };
  } finally {
    t.done();
  }
}

// Bounded concurrency so we don't open 90 sockets at once.
async function pool(items, n, fn) {
  const out = [];
  let i = 0;
  const workers = Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx]);
    }
  });
  await Promise.all(workers);
  return out;
}

console.log(`Checking ${ytIds.length} YouTube videos + ${urls.length} pages…\n`);

const yt = await pool(ytIds, 8, checkYouTube);
const pages = await pool(urls, 8, checkPage);

const ytBad = yt.filter((r) => !r.ok);
const pageBad = pages.filter((r) => !r.ok);

console.log('YouTube:');
for (const r of yt) {
  console.log(`  ${r.ok ? '✓' : '✗'} ${r.id}  ${r.ok ? `(${r.author ?? '?'})` : `[${r.status} ${r.reason}]`}`);
}
console.log('\nPages:');
for (const r of pages) {
  console.log(`  ${r.ok ? '✓' : '✗'} [${r.status || '---'}] ${r.url}${r.ok ? '' : `  (${r.reason ?? ''})`}`);
}

console.log(`\nSummary: ${yt.length - ytBad.length}/${yt.length} videos ok, ${pages.length - pageBad.length}/${pages.length} pages ok.`);
if (ytBad.length || pageBad.length) {
  console.log(`\nDEAD/PRIVATE (${ytBad.length + pageBad.length}):`);
  for (const r of ytBad) console.log(`  video ${r.id}  ${r.status} ${r.reason}`);
  for (const r of pageBad) console.log(`  page  ${r.url}  ${r.status} ${r.reason ?? ''}`);
  process.exitCode = 1;
}
