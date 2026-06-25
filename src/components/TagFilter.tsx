import { useStore } from '../state/useStore';
import { TAG_LABELS, UI } from '../i18n/labels';
import type { Tag } from '../types';

/** Order tags are presented in the horizontal chip row. */
const TAG_ORDER: Tag[] = [
  'opening-closing',
  'hand-deflection',
  'cloud-hands',
  'kick',
  'strike',
  'stance',
  'transition',
  'repetitive',
];

export function TagFilter() {
  const lang = useStore((s) => s.lang);
  const activeTags = useStore((s) => s.activeTags);
  const toggleTag = useStore((s) => s.toggleTag);
  const clearTags = useStore((s) => s.clearTags);

  return (
    <div className="tagfilter" role="group" aria-label="Filter by category">
      {TAG_ORDER.map((tag) => {
        const active = activeTags.includes(tag);
        return (
          <button
            key={tag}
            className={active ? 'chip is-active' : 'chip'}
            aria-pressed={active}
            onClick={() => toggleTag(tag)}
          >
            {TAG_LABELS[lang][tag]}
          </button>
        );
      })}
      {activeTags.length > 0 && (
        <button className="chip chip--clear" onClick={clearTags}>
          {UI[lang].clearFilters} ✕
        </button>
      )}
    </div>
  );
}
