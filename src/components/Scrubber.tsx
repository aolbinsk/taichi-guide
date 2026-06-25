import { useRef, useState } from 'react';
import type { Milestone } from '../types';
import { useStore } from '../state/useStore';

interface Props {
  milestones: Milestone[];
}

/** Light haptic tick on supported devices (Android Chrome). No-op elsewhere. */
function tick() {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    navigator.vibrate?.(8);
  }
}

export function Scrubber({ milestones }: Props) {
  const scrollTo = useStore((s) => s.scrollTo);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [bubbleY, setBubbleY] = useState(0);
  const lastIdx = useRef<number>(-1);

  const resolveIndex = (clientY: number): number => {
    const rail = railRef.current;
    if (!rail) return 0;
    const rect = rail.getBoundingClientRect();
    const frac = Math.min(1, Math.max(0, (clientY - rect.top) / rect.height));
    return Math.min(milestones.length - 1, Math.floor(frac * milestones.length));
  };

  const apply = (clientY: number) => {
    const idx = resolveIndex(clientY);
    setActiveIdx(idx);
    setBubbleY(clientY);
    if (idx !== lastIdx.current) {
      lastIdx.current = idx;
      tick();
      scrollTo(milestones[idx].seq);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragging(true);
    lastIdx.current = -1;
    apply(e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    apply(e.clientY);
  };

  const endDrag = () => {
    setDragging(false);
    setActiveIdx(null);
  };

  return (
    <>
      <div
        className={dragging ? 'scrubber is-dragging' : 'scrubber'}
        ref={railRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        role="slider"
        aria-label="Form timeline"
        aria-valuemin={1}
        aria-valuemax={milestones.length}
        aria-valuenow={(activeIdx ?? 0) + 1}
      >
        {milestones.map((m, i) => (
          <button
            key={`${m.label}-${m.seq}`}
            className={activeIdx === i ? 'scrubber__tick is-active' : 'scrubber__tick'}
            onClick={(e) => {
              e.stopPropagation();
              tick();
              scrollTo(m.seq);
            }}
            tabIndex={-1}
          >
            <span className="scrubber__label">{m.label}</span>
          </button>
        ))}
      </div>

      {dragging && activeIdx !== null && (
        <div className="scrubber__bubble" style={{ top: bubbleY }}>
          {milestones[activeIdx].label}
        </div>
      )}
    </>
  );
}
