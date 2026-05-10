'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import CustomCursor from '@/components/common/CustomCursor';
import ScrollProgress from '@/components/common/ScrollProgress';

/* ---------- Language context ---------- */
interface LangCtxType { lang: 'en' | 'de'; setLang: (l: 'en' | 'de') => void; }
export const LangCtx = createContext<LangCtxType>({ lang: 'en', setLang: () => {} });
export function useT() {
  const { lang } = useContext(LangCtx);
  return function t(en: string, de: string) { return lang === 'de' ? de : en; };
}

/* ---------- Theme context ---------- */
interface ThemeCtxType { theme: 'light' | 'dark'; setTheme: (t: 'light' | 'dark') => void; }
export const ThemeCtx = createContext<ThemeCtxType>({ theme: 'light', setTheme: () => {} });

export default function Providers({ children }: { children: ReactNode }) {
  /* Lang */
  const [lang, setLangState] = useState<'en' | 'de'>('en');

  /* Theme — derive initial value from data-theme already set by inline script */
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    /* Restore lang */
    try {
      const stored = localStorage.getItem('lang') as 'en' | 'de' | null;
      setLangState(stored ?? (navigator.language?.startsWith('de') ? 'de' : 'en'));
    } catch {}

    /* Restore theme (already on <html> via inline script, just sync state) */
    try {
      const t = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null;
      if (t) setThemeState(t);
    } catch {}
  }, []);

  const setLang = (v: 'en' | 'de') => {
    setLangState(v);
    try { localStorage.setItem('lang', v); } catch {}
    document.documentElement.lang = v;
  };

  const setTheme = (v: 'light' | 'dark') => {
    setThemeState(v);
    try { localStorage.setItem('theme', v); } catch {}
    document.documentElement.setAttribute('data-theme', v);
  };

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      <LangCtx.Provider value={{ lang, setLang }}>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </LangCtx.Provider>
    </ThemeCtx.Provider>
  );
}
