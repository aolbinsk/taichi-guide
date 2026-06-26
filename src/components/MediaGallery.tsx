import { useState } from 'react';
import type { MediaSource, MediaView } from '../types';
import { useStore } from '../state/useStore';
import { UI } from '../i18n/labels';

interface Props {
  sources: MediaSource[];
  alt: string;
}

/** Extract a YouTube video id from a watch/embed/short URL, else null. */
function youTubeId(url: string): string | null {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

/**
 * Resolve an app-bundled asset path (e.g. "/media/thumbs/x.jpg") against the
 * deploy base so it works under a GitHub Pages subpath (vite `base: './'`).
 * External (http) URLs pass through untouched.
 */
function asset(url: string): string {
  if (/^https?:\/\//.test(url) || url.startsWith('data:')) return url;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (url.startsWith('/') ? url : `/${url}`);
}

function viewLabel(view: MediaView | undefined, lang: 'en' | 'sv'): string {
  if (!view) return '';
  return UI[lang].mediaViews[view] ?? view;
}

/** A single video tile: shows a YouTube thumbnail; clicking embeds it inline. */
function VideoTile({ src, alt }: { src: MediaSource; alt: string }) {
  const lang = useStore((s) => s.lang);
  const [playing, setPlaying] = useState(false);
  const id = youTubeId(src.url);
  // When start/end are set, bound the embed to this posture's segment (a "clip"
  // of the whole-form demo) — a plain bounded embed, nothing is downloaded.
  const isClip = src.start != null && src.end != null;
  const span = isClip ? `&start=${Math.floor(src.start!)}&end=${Math.ceil(src.end!)}` : '';
  const caption = [viewLabel(src.view, lang), src.author].filter(Boolean).join(' · ');

  return (
    <figure className="mg__tile">
      {playing && id ? (
        <div className="mg__frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${span}`}
            title={src.title}
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          type="button"
          className="mg__thumb"
          onClick={(e) => {
            e.stopPropagation();
            if (id) setPlaying(true);
            else window.open(src.url, '_blank', 'noopener');
          }}
          aria-label={src.title}
        >
          {id && (
            <img
              // Prefer the localized poster (offline-capable); fall back to
              // YouTube's CDN if it isn't present (e.g. dev before localizing).
              src={asset(`/media/thumbs/${id}.jpg`)}
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.dataset.fallback) {
                  img.dataset.fallback = '1';
                  img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                }
              }}
              alt={alt}
              loading="lazy"
              decoding="async"
            />
          )}
          <span className="mg__play" aria-hidden="true">▶</span>
          {isClip ? (
            <span className="mg__badge">{UI[lang].thisPosture}</span>
          ) : (
            src.view && <span className="mg__badge">{viewLabel(src.view, lang)}</span>
          )}
        </button>
      )}
      <figcaption className="mg__cap">
        <a
          href={isClip ? `${src.url}${src.url.includes('?') ? '&' : '?'}t=${Math.floor(src.start!)}` : src.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {caption || src.source}
        </a>
        {src.formLevel && <span className="mg__formtag">{UI[lang].fullForm}</span>}
      </figcaption>
    </figure>
  );
}

/** Attributed media gallery for a posture: images, then videos, then pages. */
export function MediaGallery({ sources, alt }: Props) {
  const lang = useStore((s) => s.lang);
  const images = sources.filter((s) => s.kind === 'image');
  const videos = sources.filter((s) => s.kind === 'video');
  const pages = sources.filter((s) => s.kind === 'page');

  if (sources.length === 0) {
    return (
      <div className="card__media">
        <div className="card__img card__img--placeholder" aria-hidden="true">
          ☯
        </div>
      </div>
    );
  }

  return (
    <div className="mg">
      {images.length > 0 && (
        <div className="mg__images">
          {images.map((s) => (
            <figure key={s.url} className="mg__figure">
              <img className="card__img" src={asset(s.url)} alt={alt} loading="lazy" decoding="async" />
              <figcaption className="mg__cap">
                <a href={s.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  {s.author || s.source}
                </a>
                {s.license && <span className="mg__lic">{s.license}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {videos.length > 0 && (
        <div className="mg__grid">
          {videos.map((s) => (
            <VideoTile key={s.url} src={s} alt={alt} />
          ))}
        </div>
      )}

      {pages.length > 0 && (
        <ul className="mg__pages">
          {pages.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                {s.title}
              </a>
              <span className="mg__src"> · {s.source}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="mg__attrib">{UI[lang].mediaAttribution}</p>
    </div>
  );
}
