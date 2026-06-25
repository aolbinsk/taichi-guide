import { create } from 'zustand';
import type { Tag, UiLang } from '../types';
import { DEFAULT_FORM_ID, getFormMeta } from '../data/registry';

interface AppState {
  /** User's chosen translation layer (Chinese is always shown regardless). */
  lang: UiLang;
  /** id of the form currently being studied. */
  formId: string;
  query: string;
  activeTags: Tag[];
  /** seq of the posture currently expanded inline, or null. */
  expandedSeq: number | null;
  /** seq the list was last asked to scroll to (drives scroll effects). */
  scrollTarget: number | null;

  setLang: (lang: UiLang) => void;
  setForm: (formId: string) => void;
  setQuery: (query: string) => void;
  toggleTag: (tag: Tag) => void;
  clearTags: () => void;
  toggleExpanded: (seq: number) => void;
  scrollTo: (seq: number) => void;
  clearScrollTarget: () => void;
}

const STORAGE_KEY = 'formscrub.lang';
const FORM_KEY = 'formscrub.form';

function loadLang(): UiLang {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'en' || v === 'sv') return v;
  } catch {
    /* ignore */
  }
  // Default to the device language if Swedish, else English fallback.
  return typeof navigator !== 'undefined' && navigator.language?.startsWith('sv') ? 'sv' : 'en';
}

function loadFormId(): string {
  try {
    const v = localStorage.getItem(FORM_KEY);
    // getFormMeta falls back to the default for unknown/removed ids.
    if (v) return getFormMeta(v).id;
  } catch {
    /* ignore */
  }
  return DEFAULT_FORM_ID;
}

export const useStore = create<AppState>((set) => ({
  lang: loadLang(),
  formId: loadFormId(),
  query: '',
  activeTags: [],
  expandedSeq: null,
  scrollTarget: null,

  setLang: (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    set({ lang });
  },

  setForm: (formId) => {
    const id = getFormMeta(formId).id;
    try {
      localStorage.setItem(FORM_KEY, id);
    } catch {
      /* ignore */
    }
    // Switching forms resets the browsing context — stale seqs don't carry over.
    set({ formId: id, query: '', activeTags: [], expandedSeq: null, scrollTarget: null });
  },
  setQuery: (query) => set({ query }),
  toggleTag: (tag) =>
    set((s) => ({
      activeTags: s.activeTags.includes(tag)
        ? s.activeTags.filter((t) => t !== tag)
        : [...s.activeTags, tag],
    })),
  clearTags: () => set({ activeTags: [] }),
  toggleExpanded: (seq) => set((s) => ({ expandedSeq: s.expandedSeq === seq ? null : seq })),
  scrollTo: (seq) => set({ scrollTarget: seq, query: '', activeTags: [] }),
  clearScrollTarget: () => set({ scrollTarget: null }),
}));
