import { useRef } from 'react';
import { formData } from './data/yang108';
import { SearchBar } from './components/SearchBar';
import { TagFilter } from './components/TagFilter';
import { PostureList } from './components/PostureList';
import { Scrubber } from './components/Scrubber';
import { useStore } from './state/useStore';

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lang = useStore((s) => s.lang);

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar__title">{formData.form.name[lang]}</div>
        <SearchBar />
        <TagFilter />
      </header>

      <main className="stage">
        <PostureList data={formData} scrollRef={scrollRef} ref={scrollRef} />
        <Scrubber milestones={formData.milestones} />
      </main>
    </div>
  );
}
