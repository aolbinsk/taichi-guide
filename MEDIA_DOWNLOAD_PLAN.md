# Plan — Localize & self-host posture media (download-capable session)

> **For a future Claude Code session running in an environment with open
> outbound internet** (no egress policy blocking YouTube / Wikimedia / etc.).
> The current session catalogued and wired up media by **reference only** —
> its sandbox blocks all outbound hosts except Anthropic tools, so nothing
> could be downloaded. Your job: actually pull the assets down, self-host them,
> and turn the reference links into real offline-capable media.

## 0. Context — what already exists (read these first)

- `src/data/mediaLibrary.ts` — **single source of truth** for media.
  - `FORM_MEDIA: Record<formId, MediaSource[]>` — 50 whole-form YouTube videos
    across all 14 forms (front / mirror / step-by-step). Built with the
    `yt(id, title, view, author, note)` helper.
  - `POSTURE_MEDIA: Record<hanzi, MediaSource[]>` — per-posture resources keyed
    by hanzi, currently all `kind: 'page'` (HTML reference links) built with the
    `ref(url, title, source, license, note)` helper. Two Wikimedia `File:` pages
    are in here as `page` links because direct image URLs couldn't be resolved.
  - `attachMedia(formId, data)` merges both into each posture's `sources[]` at
    load time, with hanzi normalization (`左右野马分鬃` → `野马分鬃`). **Do not
    edit the 14 posture datasets** — only edit the library.
- `MediaSource` type (`src/types.ts`): `{ kind: 'video'|'image'|'page', url,
  title, author?, source, license?, view?, start?, formLevel?, note? }`.
- `src/components/MediaGallery.tsx` — renders `kind:'image'` as inline `<img>`,
  `kind:'video'` (YouTube) as a thumbnail (`img.youtube.com/vi/<id>/hqdefault.jpg`)
  that swaps to a `youtube-nocookie.com/embed` iframe on tap, `kind:'page'` as
  link chips. `youTubeId()` there is the canonical id-extraction regex.
- `scripts/localize-media.mjs` — already downloads YouTube poster thumbnails to
  `public/media/thumbs/<id>.jpg` (regex-extracts ids from the library, Node 18+
  global fetch, skips existing). **Untested** (no egress this session).
- `RESOURCES.md` — human attribution catalog; keep it in sync with the library.
- PWA precache (see `vite.config.ts` / PLAN.md) already globs
  `js,css,html,svg,png,webp,m4a` — add `jpg,jpeg,mp4` if self-hosting those.

Useful counts: 922 posture instances, 191 unique hanzi, top ~40 postures cover
most instances. `git log` on branch `claude/posture-media-resources-8rn25p` has
the media commit.

## 1. Goals (in priority order)

1. **Verify** every catalogued URL still resolves (videos not dead / private /
   region-locked; pages still up).
2. **Offline posters** — run the thumbnail script; rewire the gallery to prefer
   local thumbnails so video posters work offline.
3. **Real posture images** — resolve & download genuinely free images (esp.
   public-domain Yang Chengfu plates on Wikimedia Commons), self-host them, and
   flip those `POSTURE_MEDIA` entries from `kind:'page'` to `kind:'image'` so
   they render inline.
4. **(Optional, rights-permitting) Self-hosted video** — download full routines
   for true offline; optionally cut per-posture clips using `start` timestamps.
5. **Expand coverage** — add per-posture media for the long tail and the thinner
   styles (Chen / Wu / Wu-Hao / Sun).
6. **Attribution & licensing** — record exact license per asset in `RESOURCES.md`;
   only inline-embed images whose license permits it (note CC-BY attribution).

Each goal is independently shippable — commit per phase.

## 2. Preflight

```bash
node --version            # need 18+ (22 is in CI here)
which yt-dlp ffmpeg convert cwebp || true   # install if missing (see below)
npm install
npm run build             # baseline: must pass before you start
```

Install tooling if absent:
```bash
pip install -U yt-dlp                 # video/thumbnail downloader
# ffmpeg for clipping; imagemagick (convert) or cwebp for image processing
sudo apt-get install -y ffmpeg imagemagick webp   # or brew equivalents
```

## 3. Phase A — Verify links (cheap, do first)

Write `scripts/check-links.mjs` that extracts every URL from `mediaLibrary.ts`
and HEADs it (for YouTube, fetch `https://www.youtube.com/oembed?url=<watch>&format=json`
— a 200 means the video is public and embeddable; 401/404 means private/removed).
Output a table of dead/private URLs. Replace or drop any failures (re-research a
substitute the same way the catalog was built; keep the multi-angle goal).

Acceptance: zero dead/private links, or each failure replaced and noted.

## 4. Phase B — Offline video posters

```bash
node scripts/localize-media.mjs      # → public/media/thumbs/<id>.jpg
```
Then in `MediaGallery.tsx`, make the thumbnail `src` prefer the local file with a
graceful fallback to the remote one:
```tsx
// in VideoTile, when rendering the <img>:
src={`/media/thumbs/${id}.jpg`}
onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }}
```
Add `jpg` to the PWA `globPatterns` so thumbnails precache. Inline iframe
playback still needs a connection (that's expected — note it).

Acceptance: posters render with the network throttled/offline; build passes.

## 5. Phase C — Real posture images (highest user value)

Target free sources first. **Wikimedia Commons** is the cleanest: many
public-domain Yang Chengfu 1931/1934 posture plates exist.

Resolve a Commons `File:` page → direct image URL + license via the API:
```bash
# direct bytes (redirects to upload.wikimedia.org):
curl -L "https://commons.wikimedia.org/wiki/Special:FilePath/Yang_cheng_fu_single_whip_application_2_75.jpg" -o out.jpg

# license + author metadata:
curl "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&titles=File:Yang_cheng_fu_single_whip_application_2_75.jpg"
# read extmetadata.LicenseShortName, Artist, LicenseUrl
```
Browse `https://commons.wikimedia.org/wiki/Category:Tai_Chi_Chuan` and the Yang
Chengfu galleries (`ornasonova.com/TaiChi.php`, `yangstyle.com/movements.html`)
to find one canonical plate per posture. For each kept image:
1. Download → process to a web size: `convert in.jpg -resize 800x800\> -strip out.webp`
   (or `cwebp`). Keep aspect ratio; ~4:3 matches the card.
2. Save to `public/media/postures/<hanzi-or-slug>.webp`.
3. In `POSTURE_MEDIA[hanzi]`, change/add an entry to
   `{ kind: 'image', url: '/media/postures/<file>.webp', title, author, source:
   'commons.wikimedia.org', license: '<exact license, e.g. Public domain / CC BY-SA 4.0>' }`.
   `attachMedia` will then set `media.image` and the gallery renders it inline.
4. Record the exact license + author + original file URL in `RESOURCES.md`.

**Licensing rule:** only inline public-domain or CC images. For CC-BY/BY-SA the
on-card `figcaption` already shows author + license — keep that. Do **not**
self-host copyrighted instructional-site photos; leave those as `page` links.

Add `webp` (already globbed) — confirm `public/media/**` is precached.

Acceptance: top ~40 postures show a real inline image offline; every image has a
verified license in `RESOURCES.md`.

## 6. Phase D — Self-hosted video (optional; confirm rights/intent first)

This repo is for **private use**, so downloading routines for personal offline
study is reasonable — but it bloats the bundle and is rights-sensitive. Ask the
user before doing this at scale.

```bash
# one routine, capped resolution:
yt-dlp -f 'bv*[height<=720]+ba/b[height<=720]' -o 'public/media/video/%(id)s.%(ext)s' <url>
# optional per-posture clip using a MediaSource.start (seconds):
ffmpeg -ss <start> -i public/media/video/<id>.mp4 -t <dur> -c copy public/media/clips/<hanzi>-<id>.mp4
```
Then add `kind:'video'` entries with local `/media/video/<id>.mp4` URLs and teach
`MediaGallery` to use a native `<video controls>` for non-YouTube URLs (currently
it assumes YouTube). Add `mp4` to PWA globs **and** raise the Workbox
`maximumFileSizeToCacheInBytes` or exclude large videos from precache (use a
runtime cache instead — precaching hundreds of MB will break the SW). Strongly
consider keeping videos out of precache and serving them with a
`CacheFirst`/`NetworkFirst` runtime strategy.

Acceptance: at least one form plays a self-hosted clip offline; bundle size sane.

## 7. Phase E — Expand coverage

- Fill `POSTURE_MEDIA` for the long tail (191 unique hanzi). Use the same
  research method (web search → verify the page → record source+license).
- Prioritize the thin styles: Chen (`tcmwindow.com` has illustrated per-movement
  pages), Wu, Wu/Hao, Sun. Find more Wu/Hao angles (Amin Wu's site / Vimeo).
- Remember normalization: keying the **base** hanzi covers all directional
  variants automatically — check `scripts/check.mjs`-style coverage after.

## 8. Verification & wrap-up

```bash
npm run build
npm run preview   # then load in a browser, expand cards, toggle offline (DevTools
                  # → Network → Offline) and confirm posters/images still show
```
- Re-sync `RESOURCES.md` so every self-hosted asset lists source + author +
  license + original URL.
- Update `PLAN.md` Phase 3 checkboxes for whatever you completed.
- Commit per phase with clear messages; push to a branch (ask before opening a PR).

## 9. Pitfalls / notes

- **Don't edit the 14 posture datasets** — only `mediaLibrary.ts`. `attachMedia`
  does the merge.
- **Precache size:** images (webp) are fine; **videos are not** — use a runtime
  cache or you'll exceed the SW precache budget and break installability.
- **YouTube `oembed`** is the reliable public/embeddable check; a plain page 200
  is not (private videos still return a page).
- **License before inlining:** public-domain/CC only for `kind:'image'`; verify
  via `extmetadata`, never assume.
- **Filenames:** ascii-slug the hanzi (or use pinyin) for `public/media/...`
  paths to avoid encoding issues; the `url` in the library is what matters.
- **Idempotency:** make every download script skip existing files (the thumbnail
  script already does) so re-runs are cheap.
