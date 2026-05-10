'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const c = document.getElementById('ak-cursor');
    if (!c) return;
    let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
    let raf: number;

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      c.style.setProperty('--cx', cx + 'px');
      c.style.setProperty('--cy', cy + 'px');
      raf = requestAnimationFrame(tick);
    };

    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const textEl = c.querySelector<HTMLElement>('.ctxt');

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ctxTarget = target.closest<HTMLElement>('[data-cursor-text]');
      if (ctxTarget) {
        c.classList.add('has-text');
        c.classList.remove('is-link');
        if (textEl) textEl.textContent = ctxTarget.getAttribute('data-cursor-text') ?? '';
        return;
      }
      if (target.closest('a, button')) c.classList.add('is-link');
    };

    const out = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor-text]')) c.classList.remove('has-text');
      if (target.closest('a, button')) c.classList.remove('is-link');
    };

    addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return (
    <div className="cursor" id="ak-cursor" aria-hidden="true">
      <span className="ctxt" />
    </div>
  );
}
