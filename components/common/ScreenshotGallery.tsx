'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Shot {
  src: string;
  alt: string;
  label: string;
}

interface Props {
  shots: Shot[];
  url: string;
  dwell?: number;
}

export default function ScreenshotGallery({ shots, url, dwell = 5500 }: Props) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    if (paused || interactive) return;
    const id = setTimeout(() => {
      setI(prev => (prev + 1) % shots.length);
      setCycleKey(k => k + 1);
    }, dwell);
    return () => clearTimeout(id);
  }, [i, paused, interactive, dwell, shots.length, cycleKey]);

  const goto = (k: number) => {
    setInteractive(true);
    setI(k);
    setCycleKey(c => c + 1);
  };

  return (
    <div
      className="ss-frame"
      style={{ '--ss-dwell': dwell + 'ms' } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Chrome bar */}
      <div className="ss-chrome">
        <div className="ss-lights"><span /><span /><span /></div>
        <div className="ss-url">{url}</div>
        <div className="ss-progress-meta">
          <span className="ss-num">
            {String(i + 1).padStart(2, '0')} / {String(shots.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Screenshot body */}
      <div className="ss-body">
        {shots.map((s, k) => (
          <Image
            key={k}
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width: 880px) 100vw, 50vw"
            className={k === i ? 'on' : ''}
            priority={k === 0}
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
          />
        ))}
      </div>

      {/* Tab strip */}
      <div className="ss-tabs">
        {shots.map((s, k) => (
          <button
            key={k}
            className={[
              'ss-tab',
              k === i ? 'on' : '',
              k === i && paused ? 'paused' : '',
              k === i && interactive ? 'no-anim' : '',
            ].join(' ').trim()}
            onClick={() => goto(k)}
          >
            <span className="num">{String(k + 1).padStart(2, '0')}</span>
            <span className="lbl">{s.label}</span>
            {k === i && <span key={cycleKey} className="ss-progress-tick" aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  );
}
