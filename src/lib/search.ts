import type { Posture, Tag } from '../types';

/**
 * Fold a string for diacritic-insensitive matching.
 *
 * Decomposes (NFD) then strips combining marks, so:
 *   - Swedish  å ä ö  ->  a a o
 *   - Pinyin   ǎ á à  ->  a a a
 * This lets "krok" match "krök" and "lou xi" match "Lóu Xī".
 */
export function fold(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

/** Fields we search across simultaneously (English, Swedish, pinyin). */
function haystack(p: Posture): string {
  return fold(`${p.names.en} ${p.names.sv} ${p.names.zh_pinyin} ${p.names.zh_hans}`);
}

/**
 * Lightweight fuzzy match: every whitespace-separated token in the query must
 * appear (folded) somewhere in the posture's searchable fields. Good enough and
 * instant for ~108 records — no external fuzzy lib needed for the MVP.
 */
export function matchesQuery(p: Posture, query: string): boolean {
  const q = fold(query);
  if (!q) return true;
  const hay = haystack(p);
  return q.split(/\s+/).every((token) => hay.includes(token));
}

export function matchesTags(p: Posture, activeTags: Tag[]): boolean {
  if (activeTags.length === 0) return true;
  // AND semantics: posture must carry every selected tag.
  return activeTags.every((t) => p.tags.includes(t));
}

export function filterPostures(
  postures: Posture[],
  query: string,
  activeTags: Tag[],
): Posture[] {
  return postures.filter((p) => matchesQuery(p, query) && matchesTags(p, activeTags));
}
