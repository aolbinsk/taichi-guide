import type { FormData, FormMeta, StyleMeta } from '../types';

// ---------------------------------------------------------------------------
// Form catalog. The STYLES + FORMS arrays are tiny and loaded eagerly so the
// switcher can render the whole library instantly. Each form's posture data is
// fetched lazily through `load()` (a dynamic import → its own bundle chunk), so
// only the active form's ~70 KB of data is ever downloaded.
//
// To add a form: drop a `src/data/<id>.ts` exporting `formData`, then add a
// FormMeta entry below. Nothing else needs to change.
// ---------------------------------------------------------------------------

export const STYLES: StyleMeta[] = [
  {
    id: 'yang',
    name: { en: 'Yang', sv: 'Yang', zh_pinyin: 'Yáng', zh_hans: '杨' },
    blurb: {
      en: 'The most widespread family — large, even, gentle frames.',
      sv: 'Den mest spridda familjen — stora, jämna, mjuka rörelser.',
    },
  },
  {
    id: 'chen',
    name: { en: 'Chen', sv: 'Chen', zh_pinyin: 'Chén', zh_hans: '陈' },
    blurb: {
      en: 'The oldest family — silk-reeling spirals with bursts of power (fa jin).',
      sv: 'Den äldsta familjen — sidenspinnande spiraler med kraftutbrott (fa jin).',
    },
  },
  {
    id: 'wu',
    name: { en: 'Wu', sv: 'Wu', zh_pinyin: 'Wú', zh_hans: '吴' },
    blurb: {
      en: 'Compact, softly inclined frames emphasising small circles.',
      sv: 'Kompakta, mjukt framåtlutade ramar med små cirklar.',
    },
  },
  {
    id: 'wuhao',
    name: { en: 'Wu/Hao', sv: 'Wu/Hao', zh_pinyin: 'Wǔ', zh_hans: '武' },
    blurb: {
      en: 'Small, high frames with precise internal focus.',
      sv: 'Små, höga ramar med exakt inre fokus.',
    },
  },
  {
    id: 'sun',
    name: { en: 'Sun', sv: 'Sun', zh_pinyin: 'Sūn', zh_hans: '孙' },
    blurb: {
      en: 'Agile "open-close" stepping blended with xingyi and bagua.',
      sv: 'Smidigt "öppna-stäng"-fotarbete blandat med xingyi och bagua.',
    },
  },
  {
    id: 'combined',
    name: {
      en: 'Combined / Competition',
      sv: 'Kombinerad / Tävling',
      zh_pinyin: 'Zōnghé',
      zh_hans: '综合',
    },
    blurb: {
      en: 'Modern standardized routines drawing on several families.',
      sv: 'Moderna standardiserade rutiner som hämtar från flera familjer.',
    },
  },
];

export const FORMS: FormMeta[] = [
  {
    id: 'yang24',
    style: 'yang',
    variant: { en: '24 · Simplified', sv: '24 · Förenklad', zh_pinyin: 'Èrshísì Shì', zh_hans: '二十四式' },
    count: 24,
    lineage: {
      en: 'Beijing standard (1956) — the world’s most practiced routine.',
      sv: 'Pekingstandard (1956) — världens mest utövade rutin.',
    },
    verified: false,
    load: () => import('./yang24').then((m) => m.formData),
  },
  {
    id: 'yang108',
    style: 'yang',
    variant: { en: '108 · Traditional Long', sv: '108 · Traditionell lång', zh_pinyin: 'Lǎojià', zh_hans: '老架' },
    count: 108,
    lineage: {
      en: 'Traditional Yang long form, 108-posture enumeration.',
      sv: 'Traditionell Yang lång form, 108-positioners uppräkning.',
    },
    verified: false,
    load: () => import('./yang108').then((m) => m.formData),
  },
];

export const DEFAULT_FORM_ID = 'yang108';

/** Resolve a form id to its catalog entry, falling back to the default. */
export function getFormMeta(id: string): FormMeta {
  return FORMS.find((f) => f.id === id) ?? FORMS.find((f) => f.id === DEFAULT_FORM_ID)!;
}

/** Forms grouped under their style family, in catalog order, skipping empty families. */
export function formsByStyle(): { style: StyleMeta; forms: FormMeta[] }[] {
  return STYLES.map((style) => ({
    style,
    forms: FORMS.filter((f) => f.style === style.id),
  })).filter((g) => g.forms.length > 0);
}

export type { FormData };
