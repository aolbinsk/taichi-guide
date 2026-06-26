// ---------------------------------------------------------------------------
// Core data model for Tai Chi FormScrub.
//
// Design principle (from the spec): all languages are equal dictionary keys.
// There is no privileged "real" name — English is only the *fallback* default,
// and the Chinese layer (pinyin + hanzi) is always rendered for context.
// ---------------------------------------------------------------------------

/** Languages the dataset is keyed by. `en` is the fallback default. */
export type LangKey = 'en' | 'sv' | 'zh_pinyin' | 'zh_hans';

/** Languages a user can pick as their *translation layer* in the UI. */
export type UiLang = Extract<LangKey, 'en' | 'sv'>;

export type TranslatableNames = Record<LangKey, string>;

export interface Description {
  en: string;
  sv: string;
}

/**
 * Media asset paths, relative to the bundled `public/` root. `null` means the
 * asset does not exist yet — the UI renders a placeholder so layout is stable
 * during high-speed scrubbing. Video + rig are Phase 3 (see PLAN.md).
 */
export interface Media {
  image: string | null;
  audio: string | null;
  video: string | null;
  rig: string | null;
}

/**
 * One concrete media resource (a video, photo, or reference page) for a posture
 * or whole form, with the provenance needed to attribute it. The catalog in
 * `data/mediaLibrary.ts` + `RESOURCES.md` is the single source of truth; the UI
 * renders these as a small attributed gallery in the expanded card.
 */
export type MediaKind = 'video' | 'image' | 'page';

/** Camera angle / role of a clip, so the UI can label "front view" vs "mirror". */
export type MediaView =
  | 'front'
  | 'back'
  | 'mirror'
  | 'side'
  | 'instruction'
  | 'demo'
  | 'detail';

export interface MediaSource {
  kind: MediaKind;
  /** Canonical resource URL (YouTube watch link, image file, or reference page). */
  url: string;
  /** Human title, usually the original page/video title (kept for attribution). */
  title: string;
  /** Author / channel / photographer, when known. */
  author?: string | null;
  /** Provider or host, e.g. "YouTube", "commons.wikimedia.org", "egreenway.com". */
  source: string;
  /** License or rights note (e.g. "Public domain", "CC BY-SA", "© author"). */
  license?: string | null;
  /** Camera angle / role, for a UI label. */
  view?: MediaView;
  /** Optional start offset (seconds) for chaptered routine videos. */
  start?: number;
  /** Whether this came from the whole-form routine rather than the posture. */
  formLevel?: boolean;
  note?: string;
}

export type Tag =
  | 'stance'
  | 'kick'
  | 'hand-deflection'
  | 'strike'
  | 'repetitive'
  | 'transition'
  | 'opening-closing'
  | 'cloud-hands';

export interface Posture {
  /** 1-based position in the form. Unique and contiguous within a form. */
  seq: number;
  names: TranslatableNames;
  description: Description;
  tags: Tag[];
  media: Media;
  /**
   * Attributed media resources (posture-specific first, then whole-form
   * routine clips) resolved from the shared media library at load time. Empty
   * when nothing has been catalogued for this posture yet.
   */
  sources?: MediaSource[];
  /**
   * If this posture is a repeat of an earlier one, the `seq` of the first
   * occurrence; otherwise `null`. Lets the UI dedupe, cross-link, and badge
   * recurring postures (Single Whip, Cloud Hands, Brush Knee, ...).
   */
  repeatOf: number | null;
}

export interface FormPart {
  /** Short stable id, e.g. "P1". */
  id: string;
  label: TranslatableNames;
  /** Inclusive [start, end] posture seq range covered by this part. */
  range: [number, number];
}

/** A fast-scrub landmark shown on the right-edge ribbon. */
export interface Milestone {
  /** Short label rendered vertically on the rail, e.g. "Cloud Hands". */
  label: string;
  /** The posture seq this milestone jumps to. */
  seq: number;
}

export interface Form {
  /** Stable id, e.g. "yang108". */
  id: string;
  name: TranslatableNames;
  parts: FormPart[];
}

export interface FormData {
  form: Form;
  milestones: Milestone[];
  postures: Posture[];
}

// ---------------------------------------------------------------------------
// Catalog model: families (styles) and the switchable form library.
//
// The catalog is intentionally lightweight and loaded eagerly so the switcher
// can render every form without pulling in any posture data. Each form's full
// FormData is fetched lazily (its own bundle chunk) only when selected.
// ---------------------------------------------------------------------------

/** Tai Chi family lineages. */
export type StyleId = 'yang' | 'chen' | 'wu' | 'wuhao' | 'sun' | 'combined';

export interface StyleMeta {
  id: StyleId;
  /** Family name across languages, e.g. Yang / 杨. */
  name: TranslatableNames;
  /** One-line description of the family, shown in the switcher. */
  blurb: Description;
}

/** A catalog entry for one switchable form. No posture data — that loads lazily. */
export interface FormMeta {
  /** Stable id, matches the loaded FormData.form.id, e.g. "yang24". */
  id: string;
  style: StyleId;
  /** Short label distinguishing forms within a family, e.g. "24 · Simplified". */
  variant: TranslatableNames;
  /** Posture count, for catalog display. */
  count: number;
  /** Lineage / standardization note shown under the form in the switcher. */
  lineage: Description;
  /** False until the dataset's content has been verified by a human. */
  verified: boolean;
  /** Lazy loader for the full dataset (resolves to its own bundle chunk). */
  load: () => Promise<FormData>;
}
