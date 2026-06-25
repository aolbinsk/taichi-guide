import type { UiLang, Tag } from '../types';

/** Static UI chrome strings, keyed by the user's chosen translation layer. */
export const UI = {
  en: {
    searchPlaceholder: 'Search postures…',
    settings: 'Settings',
    language: 'Translation layer',
    noResults: 'No postures match your search.',
    playAudio: 'Play pronunciation',
    media: { audio: 'Audio', video: 'Video', rig: '3D', image: 'Image' },
    repeatOf: (seq: number) => `Repeat of #${seq}`,
    clearFilters: 'Clear',
  },
  sv: {
    searchPlaceholder: 'Sök ställningar…',
    settings: 'Inställningar',
    language: 'Översättningslager',
    noResults: 'Inga ställningar matchar din sökning.',
    playAudio: 'Spela uttal',
    media: { audio: 'Ljud', video: 'Video', rig: '3D', image: 'Bild' },
    repeatOf: (seq: number) => `Upprepning av #${seq}`,
    clearFilters: 'Rensa',
  },
} satisfies Record<UiLang, unknown>;

/** Human-readable tag labels per UI language. */
export const TAG_LABELS: Record<UiLang, Record<Tag, string>> = {
  en: {
    stance: 'Stances',
    kick: 'Kicks',
    'hand-deflection': 'Hand Deflections',
    strike: 'Strikes',
    repetitive: 'Repetitive',
    transition: 'Transitions',
    'opening-closing': 'Open / Close',
    'cloud-hands': 'Cloud Hands',
  },
  sv: {
    stance: 'Ställningar',
    kick: 'Sparkar',
    'hand-deflection': 'Handavledningar',
    strike: 'Slag',
    repetitive: 'Upprepningar',
    transition: 'Övergångar',
    'opening-closing': 'Öppna / Stäng',
    'cloud-hands': 'Molnhänder',
  },
};
