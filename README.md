# Tai Chi FormScrub

An offline-first, mobile-first visual reference for Tai Chi long forms. Jump
across all 108 postures in a fraction of a second with a right-edge timeline
scrubber — built for use *during* practice, not for reading a wall of text.

> **Status:** Phase 1 scaffold. Seed content is best-effort and awaiting a
> human content pass. See [`PLAN.md`](./PLAN.md) for the spec, decisions, and roadmap.

## Features (MVP scaffold)
- **Edge scrubber** — thin right-hand rail; tap a milestone to jump, drag to
  fast-scroll with a haptic tick and an overlay bubble.
- **Tri-layer text** — English / Swedish + pinyin (with tones) + hanzi, always
  shown together. Toggle the translation layer (EN ⇄ SV), choice persisted.
- **Fuzzy search** — diacritic-insensitive across English, Swedish, and pinyin
  ("krok" matches "krök", "lou xi" matches "Lóu Xī").
- **Tag filters** — category chips (kicks, stances, hand deflections, …).
- **Expandable cards** — an attributed media gallery (whole-form demonstration
  videos in front / mirror / step-by-step angles that play inline, plus
  per-posture reference links), description, and a Mandarin pronunciation button.
  Media is catalogued in [`RESOURCES.md`](./RESOURCES.md) and sourced from a
  shared, hanzi-keyed library so one asset is reused across every form.
- **Offline-first PWA** — installable, works with no network after first load.

## Stack
React + TypeScript + Vite · Zustand · vite-plugin-pwa (Workbox). No backend; the
form is a bundled JSON dataset (`src/data/yang108.ts`) typed by `src/types.ts`.

## Develop
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production PWA build
npm run preview    # serve the build
```

## Project layout
See [`PLAN.md`](./PLAN.md) for the full architecture and data-model rationale.
