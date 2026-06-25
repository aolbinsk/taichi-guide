import { useStore } from '../state/useStore';
import type { UiLang } from '../types';

const OPTIONS: { value: UiLang; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'sv', label: 'SV' },
];

export function LanguageToggle() {
  const lang = useStore((s) => s.lang);
  const setLang = useStore((s) => s.setLang);

  return (
    <div className="lang-toggle" role="group" aria-label="Translation layer">
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          className={lang === o.value ? 'lang-toggle__btn is-active' : 'lang-toggle__btn'}
          aria-pressed={lang === o.value}
          onClick={() => setLang(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
