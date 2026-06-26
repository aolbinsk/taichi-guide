# Project Journal — Tai Chi FormScrub

Reverse-chronological status log. Newest entry first. Each entry is a snapshot of
where the project stood and what changed, for anyone (human or agent) picking the
project back up. Detailed per-change history lives in `git log`; this is the map.

---

## 2026-06-26 — Media subsystem complete & merged to main

**State:** PWA MVP (14 forms, 191 unique postures) + the full media subsystem are
now on the default branch. Builds clean; PWA precaches 83 entries (~4.4 MB) for
offline use.

**This session — executed `MEDIA_DOWNLOAD_PLAN.md`** (a handoff plan written for an
internet-capable session; this one had egress):

- **Phase A — verify links:** added `scripts/check-links.mjs` (oembed for videos,
  GET for pages). Replaced 2 dead Yang-40 videos, dropped 1 hard-blocked page.
  All links resolve: 52/52 videos, 61/61 pages.
- **Phase B — offline posters:** localized all 52 YouTube poster thumbnails
  (`public/media/thumbs/`); gallery loads local-first with remote fallback.
- **Phase C + E — real posture images & coverage:** self-hosted **6** free
  (PD/CC) posture stills (`public/media/postures/`); researched the 124 uncovered
  postures and added 52 verified reference pages. Per-posture media coverage rose
  **64 → 125 / 191 (~65%)**. Provenance + licenses in `RESOURCES.md`.
- **Phase D — self-hosted video:** **deferred** (rights-sensitive + bundle bloat);
  videos stay as YouTube embeds (playback needs a connection; posters are offline).

**Licensing discipline:** only public-domain / CC images are inlined and
self-hosted. GFDL-only plates were deliberately skipped (GFDL requires shipping
the full license).

**Outstanding / next:**
- 66 postures still have no dedicated per-posture page — mostly deep-cut Chen/Sun
  moves with no solid free source online (agents returned honest nulls).
- Phase 1 **content pass** (verify/replace seed Swedish translations) still open.
- Phase D self-hosted `.mp4` and the Phase 3 WebGL rig viewer remain future work.

**Branch note:** the media work was developed on `claude/posture-media-resources`
and merged here; `MEDIA_DOWNLOAD_PLAN.md` documents how to resume the download
phases on a connected machine.
