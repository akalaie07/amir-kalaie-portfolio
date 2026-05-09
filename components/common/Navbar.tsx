'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SITE } from '@/lib/constants';
import { useScrollSection } from '@/hooks/useScrollSection';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSection();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-[#09090B]/80 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-sm font-semibold tracking-tight text-text-primary hover:text-accent transition-colors">
            {SITE.name}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      'text-sm transition-colors duration-200 relative group',
                      isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-200',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            {SITE.availableForWork && (
              <span className="flex items-center gap-1.5 text-xs text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Verfügbar
              </span>
            )}
            <a
              href="#contact"
              className="text-sm px-4 py-1.5 rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-200"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={cn('h-px bg-current transition-all duration-200', mobileOpen && 'rotate-45 translate-y-2')} />
              <span className={cn('h-px bg-current transition-all duration-200', mobileOpen && 'opacity-0')} />
              <span className={cn('h-px bg-current transition-all duration-200', mobileOpen && '-rotate-45 -translate-y-2')} />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-30 bg-[#09090B]/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-base px-6 py-3 rounded-full border border-accent/40 text-accent text-center hover:bg-accent hover:text-white transition-all duration-200"
              >
                Kontakt aufnehmen
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
