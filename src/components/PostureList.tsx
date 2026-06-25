import { forwardRef, useEffect, useMemo } from 'react';
import type { FormData } from '../types';
import { useStore } from '../state/useStore';
import { filterPostures } from '../lib/search';
import { UI } from '../i18n/labels';
import { PostureCard } from './PostureCard';

interface Props {
  data: FormData;
  scrollRef: React.RefObject<HTMLDivElement>;
}

export const PostureList = forwardRef<HTMLDivElement, Props>(function PostureList(
  { data, scrollRef },
  _ref,
) {
  const lang = useStore((s) => s.lang);
  const query = useStore((s) => s.query);
  const activeTags = useStore((s) => s.activeTags);
  const scrollTarget = useStore((s) => s.scrollTarget);
  const clearScrollTarget = useStore((s) => s.clearScrollTarget);

  const filtered = useMemo(
    () => filterPostures(data.postures, query, activeTags),
    [data.postures, query, activeTags],
  );

  const isFiltering = query.trim().length > 0 || activeTags.length > 0;

  // Imperatively scroll to a requested posture (from scrubber / repeat link).
  useEffect(() => {
    if (scrollTarget == null) return;
    const container = scrollRef.current;
    const el = container?.querySelector<HTMLElement>(`[data-seq="${scrollTarget}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('card--flash');
      window.setTimeout(() => el.classList.remove('card--flash'), 900);
    }
    clearScrollTarget();
  }, [scrollTarget, scrollRef, clearScrollTarget]);

  if (filtered.length === 0) {
    return <div className="list list--empty">{UI[lang].noResults}</div>;
  }

  // When filtering we drop the part headers and show a flat result list.
  if (isFiltering) {
    return (
      <div className="list" ref={scrollRef}>
        {filtered.map((p) => (
          <PostureCard key={p.seq} posture={p} />
        ))}
      </div>
    );
  }

  // Default view: grouped by form part.
  return (
    <div className="list" ref={scrollRef}>
      {data.form.parts.map((part) => {
        const partPostures = filtered.filter(
          (p) => p.seq >= part.range[0] && p.seq <= part.range[1],
        );
        if (partPostures.length === 0) return null;
        return (
          <section key={part.id} className="part">
            <h2 className="part__header" data-part={part.id}>
              {part.label[lang]}
            </h2>
            {partPostures.map((p) => (
              <PostureCard key={p.seq} posture={p} />
            ))}
          </section>
        );
      })}
    </div>
  );
});
