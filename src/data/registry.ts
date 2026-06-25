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
  // ---- Yang family ----
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
    id: 'yang40',
    style: 'yang',
    variant: { en: '40 · Competition', sv: '40 · Tävling', zh_pinyin: 'Sìshí Shì', zh_hans: '四十式' },
    count: 40,
    lineage: {
      en: 'Standardized 1988 Wushu competition routine.',
      sv: 'Standardiserad tävlingsrutin från 1988.',
    },
    verified: false,
    load: () => import('./yang40').then((m) => m.formData),
  },
  {
    id: 'yang85',
    style: 'yang',
    variant: { en: '85 · Traditional', sv: '85 · Traditionell', zh_pinyin: 'Bāshíwǔ Shì', zh_hans: '八十五式' },
    count: 85,
    lineage: {
      en: 'Yang Chengfu long form, Fu Zhongwen enumeration.',
      sv: 'Yang Chengfus långa form, Fu Zhongwens uppräkning.',
    },
    verified: false,
    load: () => import('./yang85').then((m) => m.formData),
  },
  {
    id: 'yang103',
    style: 'yang',
    variant: { en: '103 · Traditional Long', sv: '103 · Traditionell lång', zh_pinyin: 'Yībǎilíngsān Shì', zh_hans: '一百零三式' },
    count: 103,
    lineage: {
      en: 'Yang Chengfu lineage, Tung Ying-chieh enumeration.',
      sv: 'Yang Chengfu-linjen, Tung Ying-chiehs uppräkning.',
    },
    verified: false,
    load: () => import('./yang103').then((m) => m.formData),
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
  // ---- Chen family ----
  {
    id: 'chen18',
    style: 'chen',
    variant: { en: '18 · Short Form', sv: '18 · Kort form', zh_pinyin: 'Shíbā Shì', zh_hans: '十八式' },
    count: 18,
    lineage: {
      en: 'Chen Zhenglei’s beginner short form, distilled from Laojia Yilu.',
      sv: 'Chen Zhengleis nybörjarform, destillerad ur Laojia Yilu.',
    },
    verified: false,
    load: () => import('./chen18').then((m) => m.formData),
  },
  {
    id: 'chen_laojia',
    style: 'chen',
    variant: { en: 'Laojia Yilu · Old Frame I', sv: 'Laojia Yilu · Gammal ram I', zh_pinyin: 'Lǎojià Yílù', zh_hans: '老架一路' },
    count: 74,
    lineage: {
      en: 'Chen family foundational long form, from Chenjiagou village.',
      sv: 'Chen-familjens grundläggande långa form, från byn Chenjiagou.',
    },
    verified: false,
    load: () => import('./chen_laojia').then((m) => m.formData),
  },
  {
    id: 'chen56',
    style: 'chen',
    variant: { en: '56 · Competition', sv: '56 · Tävling', zh_pinyin: 'Wǔshíliù Shì', zh_hans: '五十六式' },
    count: 56,
    lineage: {
      en: 'Standardized 1989 Chen competition routine.',
      sv: 'Standardiserad Chen-tävlingsrutin från 1989.',
    },
    verified: false,
    load: () => import('./chen56').then((m) => m.formData),
  },
  // ---- Wu family ----
  {
    id: 'wu_long',
    style: 'wu',
    variant: { en: '108 · Traditional Slow', sv: '108 · Traditionell långsam', zh_pinyin: 'Yībǎilíngbā Shì', zh_hans: '一百零八式' },
    count: 108,
    lineage: {
      en: 'Wu Jianquan round form, via the Wu Kung-tsao lineage.',
      sv: 'Wu Jianquans runda form, via Wu Kung-tsao-linjen.',
    },
    verified: false,
    load: () => import('./wu_long').then((m) => m.formData),
  },
  // ---- Wu/Hao family ----
  {
    id: 'wuhao',
    style: 'wuhao',
    variant: { en: '46 · Competition', sv: '46 · Tävling', zh_pinyin: 'Sìshíliù Shì', zh_hans: '四十六式' },
    count: 46,
    lineage: {
      en: 'Hao small frame; Wu Yuxiang → Li Yiyu → Hao Weizhen.',
      sv: 'Hao liten ram; Wu Yuxiang → Li Yiyu → Hao Weizhen.',
    },
    verified: false,
    load: () => import('./wuhao').then((m) => m.formData),
  },
  // ---- Sun family ----
  {
    id: 'sun73',
    style: 'sun',
    variant: { en: '73 · Competition', sv: '73 · Tävling', zh_pinyin: 'Qīshísān Shì', zh_hans: '七十三式' },
    count: 73,
    lineage: {
      en: 'Standardized Sun competition routine, Sun Lutang lineage.',
      sv: 'Standardiserad Sun-tävlingsrutin, Sun Lutang-linjen.',
    },
    verified: false,
    load: () => import('./sun73').then((m) => m.formData),
  },
  {
    id: 'sun97',
    style: 'sun',
    variant: { en: '97 · Traditional', sv: '97 · Traditionell', zh_pinyin: 'Jiǔshíqī Shì', zh_hans: '九十七式' },
    count: 97,
    lineage: {
      en: 'Sun Lutang form, codified by his daughter Sun Jianyun.',
      sv: 'Sun Lutangs form, kodifierad av dottern Sun Jianyun.',
    },
    verified: false,
    load: () => import('./sun97').then((m) => m.formData),
  },
  // ---- Combined / Competition ----
  {
    id: 'comb42',
    style: 'combined',
    variant: { en: '42 · Competition', sv: '42 · Tävling', zh_pinyin: 'Sìshí’èr Shì', zh_hans: '四十二式' },
    count: 42,
    lineage: {
      en: '1989 combined competition form (Yang/Chen/Wu/Sun).',
      sv: 'Kombinerad tävlingsform från 1989 (Yang/Chen/Wu/Sun).',
    },
    verified: false,
    load: () => import('./comb42').then((m) => m.formData),
  },
  {
    id: 'comb48',
    style: 'combined',
    variant: { en: '48 · Combined', sv: '48 · Kombinerad', zh_pinyin: 'Sìshíbā Shì', zh_hans: '四十八式' },
    count: 48,
    lineage: {
      en: '1976 combined routine, predominantly Yang-style.',
      sv: 'Kombinerad rutin från 1976, främst Yang-stil.',
    },
    verified: false,
    load: () => import('./comb48').then((m) => m.formData),
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
