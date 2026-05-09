'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SITE } from '@/lib/constants';

export default function HeroSection() {
  const reduced = useReducedMotion();

  const containerVariants = reduced ? {} : stagger;
  const itemVariants = reduced ? {} : fadeUp;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial gradient focal point */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              {SITE.availableForWork && (
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verfügbar für neue Projekte
                </span>
              )}
            </motion.div>

            {/* Eyebrow */}
            <motion.p variants={itemVariants} className="text-label text-accent">
              Full-Stack Product Engineer
            </motion.p>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-hero text-text-primary">
              Ich baue{' '}
              <span className="gradient-text">SaaS-Produkte</span>
              ,<br />
              die skalieren.
            </motion.h1>

            {/* Subline */}
            <motion.p variants={itemVariants} className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Von der Idee bis zur Produktion — saubere Architektur, moderner Stack, fokussierte Umsetzung. Ich denke in Produkten, nicht nur in Code.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent-bright transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
              >
                Projekte ansehen
                <span aria-hidden>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-text-secondary font-medium text-sm hover:border-white/20 hover:text-text-primary transition-all duration-200"
              >
                Kontakt aufnehmen
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.p variants={itemVariants} className="text-xs text-text-muted pt-2">
              Aktuell in Entwicklung: Project One · Project Two
            </motion.p>
          </motion.div>

          {/* Right: Floating mockup */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 40 }}
            animate={reduced ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:block"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={reduced ? {} : { y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Browser chrome mockup */}
              <div
                className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ background: '#18181B' }}
              >
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="flex-1 mx-4 h-5 rounded-md bg-white/[0.04] flex items-center px-3">
                    <span className="text-[10px] text-text-muted">app.project-one.com</span>
                  </div>
                </div>

                {/* Dashboard content placeholder */}
                <div className="p-6 space-y-4" style={{ minHeight: '280px' }}>
                  {/* Metric cards row */}
                  <div className="grid grid-cols-3 gap-3">
                    {['€4.2k', '1,200', '94%'].map((val, i) => (
                      <div key={i} className="rounded-lg p-3 border border-white/[0.06]" style={{ background: '#111113' }}>
                        <p className="text-xs text-text-muted mb-1">{['MRR', 'Users', 'Uptime'][i]}</p>
                        <p className="text-base font-semibold text-text-primary">{val}</p>
                        <p className="text-[10px] text-emerald-400 mt-0.5">↑ {['+12%', '+8%', '30d'][i]}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="rounded-lg p-4 border border-white/[0.06]" style={{ background: '#111113' }}>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: i === 11 ? '#6366F1' : 'rgba(99,102,241,0.25)',
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* List rows */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-accent/20 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="h-2 rounded-full bg-white/[0.06] w-3/4 mb-1" />
                        <div className="h-2 rounded-full bg-white/[0.04] w-1/2" />
                      </div>
                      <div className="h-5 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow under the mockup */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full blur-2xl"
                style={{ background: 'rgba(99,102,241,0.2)' }}
                aria-hidden
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={reduced ? {} : { opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted">Scroll</span>
          <motion.div
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
