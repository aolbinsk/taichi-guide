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
    chooseForm: 'Choose form',
    changeForm: 'Change form',
    postures: (n: number) => `${n} postures`,
    loadingForm: 'Loading form…',
    unverified: 'Draft — pending verification',
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
    chooseForm: 'Välj form',
    changeForm: 'Byt form',
    postures: (n: number) => `${n} ställningar`,
    loadingForm: 'Laddar form…',
    unverified: 'Utkast — väntar på granskning',
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

/**
 * Swedish translations for the short scrubber milestone labels. The English
 * label (as authored in each dataset) is the lookup key and the fallback, so
 * an untranslated label degrades gracefully rather than breaking navigation.
 * Part markers (P1–P3) are language-neutral codes and intentionally omitted.
 */
const MILESTONE_SV: Record<string, string> = {
  Start: 'Start',
  Closing: 'Avslutning',
  'Brush Knee': 'Borsta knä',
  Cannon: 'Kanon',
  'Cannon Fists': 'Kanonnävar',
  'Carry Tiger': 'Bär tigern',
  'Cloud Hands': 'Molnhänder',
  'Cover & Strike': 'Täck & slå',
  'Cross Hands': 'Korsade händer',
  'Embrace Tiger': 'Omfamna tigern',
  'Fa-jin Punch': 'Fa-jin-slag',
  'Fair Lady': 'Vacker dam',
  'Fair Lady Shuttles': 'Vacker dam skyttlar',
  'Fall & Split': 'Fall & klyvning',
  'Golden Rooster': 'Gyllene tupp',
  'Heel Kick': 'Hälspark',
  'Heel Kicks': 'Hälsparkar',
  'Jade Lady': 'Jadekvinna',
  'Jade Maiden': 'Jadejungfru',
  'Kick Section': 'Sparksektion',
  Kicks: 'Sparkar',
  'Left Single Whip': 'Vänster enkelt piskslag',
  'Lower Sweep': 'Låg svepning',
  Needle: 'Nål',
  'Open/Close Hands': 'Öppna/stäng händer',
  'Pound Mortar': 'Stöt mortel',
  'Repulse Monkey': 'Driv tillbaka apan',
  'Separate Feet & Kicks': 'Dela fötter & sparkar',
  'Shoot Tiger': 'Skjut tigern',
  Shuttles: 'Skyttlar',
  'Single Whip': 'Enkelt piskslag',
  'Snake & Rooster': 'Orm & tupp',
  'Snake Creeps': 'Ormen kryper',
  'Snake Creeps Down': 'Ormen kryper ned',
  'Snake Down': 'Ormen ned',
  'Step Up Seven Stars': 'Kliv upp sju stjärnor',
};

/** Localize a scrubber milestone label; English is the key and the fallback. */
export function milestoneLabel(label: string, lang: UiLang): string {
  return lang === 'sv' ? MILESTONE_SV[label] ?? label : label;
}
