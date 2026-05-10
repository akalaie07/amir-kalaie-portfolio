'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useT } from '@/components/Providers';

/* ---------- TypingName — always two lines (Amir / Kalaie.) ---------- */
function TypingName() {
  const styles = [
    { font: 'var(--font-instrument-serif, Georgia, serif)', italic: true,  weight: 400, spacing: '-0.025em' },
    { font: 'var(--font-space-grotesk, system-ui, sans-serif)', italic: false, weight: 700, spacing: '-0.04em' },
    { font: 'var(--font-jetbrains-mono, monospace)', italic: false, weight: 500, spacing: '-0.02em' },
  ];
  const L1 = 'Amir';
  const L2 = 'Kalaie.';
  const total = L1.length + L2.length; // 11
  const [styleIdx, setStyleIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'hold' | 'deleting' | 'switch'>('typing');

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (chars < total) {
        id = setTimeout(() => setChars(c => c + 1), 70 + Math.random() * 35);
      } else {
        id = setTimeout(() => setPhase('hold'), 100);
      }
    } else if (phase === 'hold') {
      id = setTimeout(() => setPhase('deleting'), 1900);
    } else if (phase === 'deleting') {
      if (chars > 0) {
        id = setTimeout(() => setChars(c => c - 1), 30);
      } else {
        id = setTimeout(() => setPhase('switch'), 180);
      }
    } else if (phase === 'switch') {
      setStyleIdx(si => (si + 1) % styles.length);
      setPhase('typing');
    }
    return () => clearTimeout(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chars, phase, styleIdx]);

  const s = styles[styleIdx];
  // Split chars between the two lines
  const row1 = L1.slice(0, Math.min(chars, L1.length));
  const row2 = chars > L1.length ? L2.slice(0, chars - L1.length) : '';
  const caretOnRow2 = chars > L1.length;

  return (
    <span
      className="typing-name"
      aria-label={`${L1} ${L2}`}
      style={{
        fontFamily: s.font,
        fontStyle: s.italic ? 'italic' : 'normal',
        fontWeight: s.weight,
        letterSpacing: s.spacing,
      }}
    >
      {/* Line 1 — always reserved as a block */}
      <span className="tn-row">
        {row1}
        {!caretOnRow2 && <span className="tn-caret" aria-hidden="true" />}
      </span>
      {/* Line 2 — always a block so layout never shifts */}
      <span className="tn-row">
        {row2 || '​'}{/* zero-width space holds line height when empty */}
        {caretOnRow2 && <span className="tn-caret" aria-hidden="true" />}
      </span>
    </span>
  );
}

/* ---------- Portrait ---------- */
function Portrait() {
  const T = useT();
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      const inner = el.querySelector<HTMLElement>('.portrait');
      if (inner) {
        inner.style.setProperty('--px', x * -8 + 'px');
        inner.style.setProperty('--py', y * -8 + 'px');
      }
    };
    const onLeave = () => {
      const inner = el.querySelector<HTMLElement>('.portrait');
      if (inner) {
        inner.style.setProperty('--px', '0px');
        inner.style.setProperty('--py', '0px');
      }
    };
    addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="portrait-wrap" ref={wrap}>
      <div className="portrait-glow" />
      <div className="portrait">
        <Image
          src="/images/amir.png"
          alt="Portrait of Amir Kalaie"
          fill
          sizes="(max-width: 960px) 100vw, 460px"
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
        />
        <div className="portrait-corners">
          <span /><span /><span /><span />
        </div>
      </div>
      <div className="portrait-caption">
        <span className="l">A. KALAIE<br />BERLIN · DE</span>
        <span className="r">№ 01<br />MMXXVI</span>
      </div>
      <div className="pbadge b1">
        <span className="swatch" />
        {T('Available Q3 / Q4', 'Verfügbar Q3 / Q4')}
      </div>
      <div className="pbadge b2">
        <span style={{
          fontFamily: 'var(--font-space-grotesk, system-ui)',
          fontWeight: 700, fontSize: 13, marginRight: 2, color: 'var(--accent)'
        }}>2</span>
        {T('SaaS shipping in 2026', 'SaaS-Launches in 2026')}
      </div>
    </div>
  );
}

/* ---------- Hero section ---------- */
export default function HeroSection() {
  const T = useT();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger'));
    requestAnimationFrame(() => {
      els.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add('is-in');
      });
    });
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
    );
    els.forEach(el => io.observe(el));
    const fb = setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.is-in), .reveal-stagger:not(.is-in)')
        .forEach(el => el.classList.add('is-in'));
    }, 500);
    return () => { io.disconnect(); clearTimeout(fb); };
  }, []);

  return (
    <header className="hero" id="top">
      <div className="shell">
        <div className="hero-grid">
          <div className="reveal-stagger">
            <div className="label tech-label">
              <span className="bracket-l">[</span>
              {T('Independent Studio · est. 2024', 'Unabhängiges Studio · seit 2024')}
              <span className="bracket-r">]</span>
            </div>
            <h1 className="hero-name" style={{ marginTop: 22 }}>
              <TypingName />
            </h1>
            <p className="hero-blurb">
              {T(
                'I design and build SaaS products end-to-end — from the architecture diagram to the first paying customer. Quiet interfaces, durable systems, and product instincts that ship.',
                'Ich entwerfe und entwickle SaaS-Produkte komplett selbst — vom Architekturdiagramm bis zum ersten zahlenden Kunden. Ruhige Interfaces, robuste Systeme und ein Produktgespür, das ausliefert.'
              )}
            </p>
            <div className="hero-meta">
              <div className="cell">
                <div className="k">{T('Practicing', 'Schwerpunkte')}</div>
                <div className="v">
                  {T('Product engineering, full-stack architecture, UX systems.', 'Product Engineering, Full-Stack-Architektur, UX-Systeme.')}
                </div>
              </div>
              <div className="cell">
                <div className="k">{T('Currently', 'Gerade')}</div>
                <div className="v">
                  {T('Building ', 'Im Aufbau: ')}<em>ResellTrack</em>{T(' & ', ' & ')}<em>Kalaie Ledger</em>.
                </div>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#work" className="cta" data-cursor-text={T('See work', 'Projekte')}>
                {T('View selected work', 'Projekte ansehen')} <span className="arrow">→</span>
              </a>
              <a href="#contact" className="cta ghost" data-cursor-text={T('Write me', 'Schreiben')}>
                {T('Start a project', 'Projekt anfragen')}
              </a>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '.2s' }}>
            <Portrait />
          </div>
        </div>
      </div>
    </header>
  );
}
