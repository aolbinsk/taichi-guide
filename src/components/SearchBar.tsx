import { useStore } from '../state/useStore';
import { UI } from '../i18n/labels';
import { LanguageToggle } from './LanguageToggle';

export function SearchBar() {
  const lang = useStore((s) => s.lang);
  const query = useStore((s) => s.query);
  const setQuery = useStore((s) => s.setQuery);

  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        type="search"
        inputMode="search"
        placeholder={UI[lang].searchPlaceholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label={UI[lang].searchPlaceholder}
      />
      <LanguageToggle />
    </div>
  );
}
