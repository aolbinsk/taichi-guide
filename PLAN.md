# Tai Chi FormScrub — Implementation Plan

Refined from Product Specification v1.0.0. This document records the decisions
we locked while iterating on the spec, the data model, and the phased build.

## Decisions (deltas from the original spec)

| Topic | Spec said | Decision | Why |
|---|---|---|---|
| Platform | React Native **or** Flutter | **PWA: React + Vite + TypeScript** | Fresh repo, instant install via URL / "Add to Home Screen", no app-store friction. A text+image dictionary is exactly what the web does well. Wrappable in **Capacitor** later if Phase 3 native audio/3D demands it. |
| Local storage | SQLite / WatermelonDB | **Bundled JSON held in memory** (+ `localStorage` for prefs/bookmarks) | It's 108 static records. In-memory data *is* offline, indexes instantly, and searches in <1 ms. A DB is dead weight until/unless data grows well beyond a few forms. |
| List engine | FlashList / virtualization "or it crashes" | **Plain list now**, virtualize only if profiling shows jank | 108 rows is tiny. The real cost is images — handled by lazy-load + fixed aspect-ratio cards (no layout shift). |
| Scrubber width | 20–25% of viewport | **Thin ~40px rail + drag-time overlay bubble** | Modern fast-scroll pattern (iOS Photos / A–Z rails). 25% permanently steals a quarter of a phone screen. |
| Content | (assumed available) | **Best-effort seed data, human-corrected later** | The content (108 × names/translations/pinyin/hanzi/desc/tags/media) is the real long pole, not the UI. |

## Architecture

```
index.html ─ vite ─ src/
  types.ts            ← the data contract (all languages are equal keys)
  data/
    registry.ts       ← form catalog (families + lazy loaders), loaded eagerly
    <id>.ts           ← one FormData per form, code-split (loaded on demand)
  state/useStore.ts   ← Zustand: lang, formId, query, activeTags, expanded, scroll
  lib/search.ts       ← diacritic-folding fuzzy match (å/ä/ö + pinyin tones)
  i18n/labels.ts      ← UI chrome + tag labels (en/sv)
  components/
    FormSwitcher · SearchBar · LanguageToggle · TagFilter
    PostureList · PostureCard · Scrubber
  styles/app.css
```

### Form library (14 forms across 5 families + combined)
The catalog (`registry.ts`) is tiny and eager so the switcher renders instantly;
each form's posture data is a **separate bundle chunk** fetched only when picked.

| Family | Forms |
|---|---|
| **Yang** | 24 Simplified · 40 Competition · 85 Traditional · 103 Traditional · 108 Traditional |
| **Chen** | 18 Short · Laojia Yilu (Old Frame I) · 56 Competition |
| **Wu** | 108 Traditional Slow (round form) |
| **Wu/Hao** | 46 Competition |
| **Sun** | 73 Competition · 97 Traditional |
| **Combined** | 42 Competition · 48 Combined |

Adding a form = drop `data/<id>.ts` (exporting `formData`) + one `FormMeta` entry.
Every dataset is generated/best-effort and carries `verified: false` (shown as a
"Draft" badge) until a human signs off on its content.

### Data model (the Phase-1 foundation)
- **Languages as equal keys.** `names: { en, sv, zh_pinyin, zh_hans }`. English is
  only the *fallback*; the Chinese layer is always rendered for context.
- **Repeats** are first-class: `repeatOf` points a recurring posture (Single
  Whip, Cloud Hands, Brush Knee…) at its first occurrence, so the UI can badge
  and cross-link them.
- **Milestones** are a small derived list of scrub landmarks (part starts +
  signpost postures) — the single source the right rail renders.
- **Media** paths are nullable; `null` ⇒ placeholder, so layout never shifts
  during fast scrubbing. `video` / `rig` are reserved for Phase 3.

### Offline strategy
`vite-plugin-pwa` (Workbox) precaches the app shell **and** bundled data/media
(`js,css,html,svg,png,webp,m4a`). First load online → fully usable offline after.

## Phased roadmap

### Phase 1 — MVP  *(this scaffold)*
- [x] Multi-form-ready JSON data model + seed Yang 108 dataset.
- [x] Main list grouped by form part; collapsible posture cards.
- [x] Right-edge thin scrubber: tap-to-jump, drag-to-fast-scroll, haptic tick, overlay bubble.
- [x] Tri-layer text (EN/SV + pinyin + hanzi) with EN⇄SV toggle (persisted).
- [x] Media status pills; lazy hero image w/ placeholder; local audio play button.
- [x] Diacritic-insensitive fuzzy search + category tag chips.
- [ ] **Content pass:** verify/replace seed translations, add real images & <100 KB audio.
- [ ] App icons (192/512 PNG) for installability.

### Phase 2 — Structural expansion
- [x] Multiple forms (14, all families) behind a family-grouped form switcher.
- [ ] Bookmarking ("My Focus Postures") via `localStorage`/IndexedDB.
- [ ] Richer fuzzy ranking (consider Fuse.js only if substring match proves insufficient).

### Phase 3 — Interactive media suite
- [ ] Inline loopable `.mp4` (front/side); the card already reserves the slot.
- [ ] WebGL/Three.js skeletal rig viewer with orbit camera.
- [ ] If native polish is needed, wrap the PWA in Capacitor (audio/haptics/3D).

## Open questions for the next iteration
1. **Which Yang 108 enumeration is canonical for you?** Lineages differ on
   counts/order; seed uses a common one — confirm so numbering is "right."
2. ~~Audio source~~ **Decided:** TTS-generated Mandarin audio for now (fast,
   consistent); revisit authentic human recordings later if quality warrants.
3. **Tag taxonomy:** is the current set (stance/kick/hand-deflection/strike/
   transition/opening-closing/cloud-hands/repetitive) the right vocabulary?
4. **Swedish descriptions:** seed has best-effort SV — who reviews/owns them?

## Running it
```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build (PWA)
npm run preview   # serve the built app
```
