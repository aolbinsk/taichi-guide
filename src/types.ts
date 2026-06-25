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
