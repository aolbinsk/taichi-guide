import { useEffect, useRef, useState } from 'react';
import type { Posture } from '../types';
import { useStore } from '../state/useStore';
import { UI } from '../i18n/labels';
import { speakMandarin, stopSpeaking, ttsAvailable } from '../lib/tts';
import { MediaGallery } from './MediaGallery';

interface Props {
  posture: Posture;
}

/** Tiny status pills indicating which media a posture has available. */
function MediaPills({ posture, ttsOk }: Props & { ttsOk: boolean }) {
  const lang = useStore((s) => s.lang);
  const m = posture.media;
  const sources = posture.sources ?? [];
  const hasImage = !!m.image || sources.some((s) => s.kind === 'image');
  const hasVideo = !!m.video || sources.some((s) => s.kind === 'video');
  const pills: { key: string; label: string; on: boolean }[] = [
    // Audio is available from a bundled recording or on-device Mandarin TTS.
    { key: 'audio', label: UI[lang].media.audio, on: !!m.audio || ttsOk },
    { key: 'image', label: UI[lang].media.image, on: hasImage },
    { key: 'video', label: UI[lang].media.video, on: hasVideo },
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

  // Prefer a bundled recording; fall back to synthesized Mandarin if it's
  // missing/unplayable, or if there's no recording at all.
  const pronounce = () => {
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

  // Used by the audio button and the tappable Chinese line; never toggles the card.
  const onPronounce = (e: React.MouseEvent) => {
    e.stopPropagation();
    pronounce();
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
          {canHear ? (
            <button
              type="button"
              className="card__zh card__zh--speak"
              onClick={onPronounce}
              aria-label={t.playAudio}
              title={t.playAudio}
            >
              <span className="card__pinyin">{posture.names.zh_pinyin}</span>
              <span className="card__hanzi">{posture.names.zh_hans}</span>
              <span className="card__zh-spk" aria-hidden="true">
                🔊
              </span>
            </button>
          ) : (
            <p className="card__zh">
              <span className="card__pinyin">{posture.names.zh_pinyin}</span>
              <span className="card__hanzi">{posture.names.zh_hans}</span>
            </p>
          )}
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

      {/* Rendered outside the expanded body so the head's Chinese line can play it. */}
      {posture.media.audio && (
        <audio ref={audioRef} src={posture.media.audio} preload="none" />
      )}

      {expanded && (
        <div className="card__body">
          <MediaGallery sources={posture.sources ?? []} alt={posture.names[lang]} />
          <p className="card__desc">{posture.description[lang]}</p>
          <div className="card__actions">
            <button
              className="btn btn--audio"
              onClick={onPronounce}
              disabled={!canHear}
            >
              ▶ {t.playAudio}
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
