import { create } from 'zustand';
import type { Tag, UiLang } from '../types';

interface AppState {
  /** User's chosen translation layer (Chinese is always shown regardless). */
  lang: UiLang;
  query: string;
  activeTags: Tag[];
  /** seq of the posture currently expanded inline, or null. */
  expandedSeq: number | null;
  /** seq the list was last asked to scroll to (drives scroll effects). */
  scrollTarget: number | null;

  setLang: (lang: UiLang) => void;
  setQuery: (query: string) => void;
  toggleTag: (tag: Tag) => void;
  clearTags: () => void;
  toggleExpanded: (seq: number) => void;
  scrollTo: (seq: number) => void;
  clearScrollTarget: () => void;
}

const STORAGE_KEY = 'formscrub.lang';

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

export const useStore = create<AppState>((set) => ({
  lang: loadLang(),
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
