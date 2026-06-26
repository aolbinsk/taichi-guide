#!/usr/bin/env node
// Download YouTube poster thumbnails for every routine video in the media
// library, for offline use. Run on a machine with open internet:
//
//   node scripts/localize-media.mjs
//
// Thumbnails land in public/media/thumbs/<id>.jpg. To use them offline, point
// MediaGallery's thumbnail src at `/media/thumbs/${id}.jpg`. Re-runs skip files
// that already exist. No third-party dependencies (Node 18+ global fetch).

import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const libPath = join(root, 'src/data/mediaLibrary.ts');
const outDir = join(root, 'public/media/thumbs');

const exists = (p) => access(p).then(() => true, () => false);

const lib = await readFile(libPath, 'utf8');
// Match the id passed to the yt('<id>', …) helper.
const ids = [...new Set([...lib.matchAll(/\byt\(\s*'([\w-]{11})'/g)].map((m) => m[1]))];

if (ids.length === 0) {
  console.error('No YouTube ids found in', libPath);
  process.exit(1);
}

await mkdir(outDir, { recursive: true });
console.log(`Localizing ${ids.length} thumbnails → ${outDir}`);

let ok = 0;
let skipped = 0;
let failed = 0;

for (const id of ids) {
  const dest = join(outDir, `${id}.jpg`);
  if (await exists(dest)) {
    skipped++;
    continue;
  }
  // hqdefault always exists; maxresdefault may 404, so fall back gracefully.
  let saved = false;
  for (const variant of ['maxresdefault', 'hqdefault']) {
    try {
      const res = await fetch(`https://img.youtube.com/vi/${id}/${variant}.jpg`);
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1500) continue; // YouTube's "no image" placeholder is tiny
      await writeFile(dest, buf);
      saved = true;
      break;
    } catch {
      /* try next variant */
    }
  }
  if (saved) {
    ok++;
    console.log(`  ✓ ${id}.jpg`);
  } else {
    failed++;
    console.warn(`  ✗ ${id} (could not fetch)`);
  }
}

console.log(`\nDone: ${ok} downloaded, ${skipped} already present, ${failed} failed.`);
