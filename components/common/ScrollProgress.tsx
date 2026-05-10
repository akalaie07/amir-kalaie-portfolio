'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const onScroll = () => {
      const bar = document.getElementById('ak-progress');
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (bar) bar.style.setProperty('--p', pct + '%');
      const nav = document.querySelector('nav.top');
      if (nav) nav.classList.toggle('scrolled', h.scrollTop > 24);
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return <div className="progress-bar" id="ak-progress" aria-hidden="true" />;
}
