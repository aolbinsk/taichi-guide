import { useEffect, useRef, useState } from 'react';
import type { Posture } from '../types';
import { useStore } from '../state/useStore';
import { UI } from '../i18n/labels';
import { speakMandarin, stopSpeaking, ttsAvailable } from '../lib/tts';

interface Props {
  posture: Posture;
}

/** Tiny status pills indicating which media a posture has available. */
function MediaPills({ posture, ttsOk }: Props & { ttsOk: boolean }) {
  const lang = useStore((s) => s.lang);
  const m = posture.media;
  const pills: { key: string; label: string; on: boolean }[] = [
    // Audio is available from a bundled recording or on-device Mandarin TTS.
    { key: 'audio', label: UI[lang].media.audio, on: !!m.audio || ttsOk },
    { key: 'image', label: UI[lang].media.image, on: !!m.image },
    { key: 'video', label: UI[lang].media.video, on: !!m.video },
    { key: 'rig', label: UI[lang].media.rig, on: !!m.rig },
  ];
  return (
    <div className="pills">
      {pills.map((p) => (
        <span key={p.key} className={p.on ? 'pill pill--on' : 'pill pill--off'}>
          {p.label}
        </span>
      ))}
    </div>
  );
}

export function PostureCard({ posture }: Props) {
  const lang = useStore((s) => s.lang);
  const expandedSeq = useStore((s) => s.expandedSeq);
  const toggleExpanded = useStore((s) => s.toggleExpanded);
  const scrollTo = useStore((s) => s.scrollTo);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const expanded = expandedSeq === posture.seq;
  const t = UI[lang];

  // Detect on-device Mandarin TTS once; gates the pronunciation control.
  const [ttsOk, setTtsOk] = useState(false);
  useEffect(() => {
    let alive = true;
    ttsAvailable().then((ok) => alive && setTtsOk(ok));
    return () => {
      alive = false;
    };
  }, []);

  // Stop any speech when this card collapses or unmounts.
  useEffect(() => {
    if (!expanded) return;
    return () => stopSpeaking();
  }, [expanded]);

  const canHear = !!posture.media.audio || ttsOk;

  const playAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Prefer a bundled recording; fall back to synthesized Mandarin if it's
    // missing/unplayable, or if there's no recording at all.
    const el = audioRef.current;
    if (posture.media.audio && el) {
      el.currentTime = 0;
      el.play().catch(() => {
        if (ttsOk) void speakMandarin(posture.names.zh_hans);
      });
      return;
    }
    if (ttsOk) void speakMandarin(posture.names.zh_hans);
  };

  return (
    <article
      className={expanded ? 'card is-expanded' : 'card'}
      data-seq={posture.seq}
      onClick={() => toggleExpanded(posture.seq)}
    >
      <div className="card__head">
        <span className="card__seq">{posture.seq}</span>
        <div className="card__names">
          <h3 className="card__title">{posture.names[lang]}</h3>
          <p className="card__zh">
            <span className="card__pinyin">{posture.names.zh_pinyin}</span>
            <span className="card__hanzi">{posture.names.zh_hans}</span>
          </p>
          {posture.repeatOf !== null && (
            <button
              className="card__repeat"
              onClick={(e) => {
                e.stopPropagation();
                scrollTo(posture.repeatOf!);
              }}
            >
              ↺ {t.repeatOf(posture.repeatOf)}
            </button>
          )}
        </div>
        <MediaPills posture={posture} ttsOk={ttsOk} />
      </div>

      {expanded && (
        <div className="card__body">
          <div className="card__media">
            {posture.media.image ? (
              <img
                className="card__img"
                src={posture.media.image}
                alt={posture.names[lang]}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="card__img card__img--placeholder" aria-hidden="true">
                ☯
              </div>
            )}
          </div>
          <p className="card__desc">{posture.description[lang]}</p>
          <div className="card__actions">
            <button
              className="btn btn--audio"
              onClick={playAudio}
              disabled={!canHear}
            >
              ▶ {t.playAudio}
            </button>
            {/* Phase 3 placeholder: inline video / 3D rig slot */}
            <div className="card__future-slot" aria-hidden="true">
              {t.media.video} · {t.media.rig}
            </div>
          </div>
          {posture.media.audio && (
            <audio ref={audioRef} src={posture.media.audio} preload="none" />
          )}
        </div>
      )}
    </article>
  );
}
