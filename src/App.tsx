import { useEffect, useRef, useState } from 'react';
import type { FormData } from './types';
import { SearchBar } from './components/SearchBar';
import { TagFilter } from './components/TagFilter';
import { PostureList } from './components/PostureList';
import { Scrubber } from './components/Scrubber';
import { FormSwitcher } from './components/FormSwitcher';
import { useStore } from './state/useStore';
import { getFormMeta } from './data/registry';
import { attachMedia } from './data/mediaLibrary';
import { UI } from './i18n/labels';

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lang = useStore((s) => s.lang);
  const formId = useStore((s) => s.formId);

  const [data, setData] = useState<FormData | null>(null);

  // Lazily load the active form's dataset (its own bundle chunk). A guard flag
  // prevents a slow earlier load from clobbering a newer selection.
  useEffect(() => {
    let stale = false;
    setData(null);
    getFormMeta(formId)
      .load()
      .then((d) => {
        // Enrich postures with catalogued image/video resources at load time.
        if (!stale) setData(attachMedia(formId, d));
      });
    return () => {
      stale = true;
    };
  }, [formId]);

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar__row">
          <FormSwitcher />
        </div>
        <SearchBar />
        <TagFilter />
      </header>

      <main className="stage">
        {data ? (
          <>
            <PostureList data={data} scrollRef={scrollRef} ref={scrollRef} />
            <Scrubber milestones={data.milestones} />
          </>
        ) : (
          <div className="list list--empty">{UI[lang].loadingForm}</div>
        )}
      </main>
    </div>
  );
}
