import { useEffect, useState } from 'react';
import { useStore } from '../state/useStore';
import { UI } from '../i18n/labels';
import { formsByStyle, getFormMeta } from '../data/registry';

/**
 * Tap the current form name to open a sheet of every form, grouped by family.
 * The catalog is metadata-only, so opening this never loads posture data — the
 * chosen form's dataset is fetched lazily once selected (see App).
 */
export function FormSwitcher() {
  const lang = useStore((s) => s.lang);
  const formId = useStore((s) => s.formId);
  const setForm = useStore((s) => s.setForm);
  const [open, setOpen] = useState(false);

  const current = getFormMeta(formId);
  const groups = formsByStyle();

  // Close on Escape for keyboard/desktop users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const pick = (id: string) => {
    setForm(id);
    setOpen(false);
  };

  return (
    <>
      <button
        className="formswitch__trigger"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        title={UI[lang].changeForm}
      >
        <span className="formswitch__name">{current.variant[lang]}</span>
        <span className="formswitch__chevron" aria-hidden>
          ▾
        </span>
      </button>

      {open && (
        <div className="sheet" role="dialog" aria-modal="true" aria-label={UI[lang].chooseForm}>
          <div className="sheet__scrim" onClick={() => setOpen(false)} />
          <div className="sheet__panel">
            <div className="sheet__head">
              <h2 className="sheet__title">{UI[lang].chooseForm}</h2>
              <button className="sheet__close" onClick={() => setOpen(false)} aria-label="Close">
                ✕
              </button>
            </div>
            <div className="sheet__body">
              {groups.map(({ style, forms }) => (
                <section key={style.id} className="famgroup">
                  <div className="famgroup__head">
                    <span className="famgroup__name">
                      {style.name[lang]} <span className="famgroup__hanzi">{style.name.zh_hans}</span>
                    </span>
                    <span className="famgroup__blurb">{style.blurb[lang]}</span>
                  </div>
                  <ul className="famgroup__list">
                    {forms.map((f) => {
                      const active = f.id === formId;
                      return (
                        <li key={f.id}>
                          <button
                            className={active ? 'formitem is-active' : 'formitem'}
                            onClick={() => pick(f.id)}
                            aria-current={active}
                          >
                            <span className="formitem__top">
                              <span className="formitem__variant">{f.variant[lang]}</span>
                              <span className="formitem__count">{UI[lang].postures(f.count)}</span>
                            </span>
                            <span className="formitem__lineage">{f.lineage[lang]}</span>
                            {!f.verified && (
                              <span className="formitem__badge">{UI[lang].unverified}</span>
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
