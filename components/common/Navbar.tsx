'use client';

import { useContext } from 'react';
import { LangCtx, ThemeCtx, useT } from '@/components/Providers';
import LogoMark from '@/components/common/LogoMark';
import CityClock from '@/components/common/CityClock';

export default function Navbar() {
  const T = useT();
  const { lang, setLang } = useContext(LangCtx);
  const { theme, setTheme } = useContext(ThemeCtx);

  return (
    <nav className="top">
      <div className="shell nav-row">
        {/* Brand */}
        <a href="#top" className="brand" aria-label="Amir Kalaie home">
          <span className="mark"><LogoMark size={30} /></span>
          <span className="name">
            Amir Kalaie<span className="dot">.</span>
          </span>
        </a>

        {/* Nav links */}
        <div className="nav-mid">
          <a href="#work">{T('Work', 'Projekte')}</a>
          <a href="#practice">{T('Practice', 'Disziplinen')}</a>
          <a href="#process">{T('Process', 'Prozess')}</a>
          <a href="#philosophy">{T('About', 'Über mich')}</a>
          <a href="#contact">{T('Contact', 'Kontakt')}</a>
        </div>

        {/* Nav end */}
        <div className="nav-end">
          <CityClock />

          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            )}
          </button>

          {/* Lang toggle */}
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
            aria-label="Switch language"
          >
            <span className={lang === 'en' ? 'on' : ''}>EN</span>
            <span className="sep">·</span>
            <span className={lang === 'de' ? 'on' : ''}>DE</span>
          </button>

          {/* Availability pill */}
          <span className="pill">
            <span className="dot" />
            {T('Booking 2026', 'Buchbar 2026')}
          </span>
        </div>
      </div>
    </nav>
  );
}
