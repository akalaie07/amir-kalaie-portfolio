'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, stagger } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { SITE, SOCIAL } from '@/lib/constants';

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
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        aria-hidden
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(99,102,241,0.1) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left column: text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7 order-2 lg:order-1"
          >
            {/* Availability */}
            {SITE.availableForWork && (
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verfügbar für neue Projekte
                </span>
              </motion.div>
            )}

            {/* Name + role */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <p className="text-label text-accent tracking-widest">Amir Kalaie</p>
              <h1 className="text-hero text-text-primary">
                Full-Stack<br />
                <span className="gradient-text">Product Engineer</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Ich baue SaaS-Produkte von Grund auf — saubere Architektur, moderner Stack, unternehmerisches Denken. Von der ersten Zeile Code bis zum zahlenden Kunden.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent-bright transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
              >
                Projekte ansehen →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-text-secondary text-sm hover:border-white/20 hover:text-text-primary transition-all duration-200"
              >
                Kontakt aufnehmen
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-1">
              {[
                { label: 'GitHub', href: SOCIAL.github },
                { label: 'LinkedIn', href: SOCIAL.linkedin },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-muted hover:text-text-secondary transition-colors"
                >
                  {s.label} ↗
                </a>
              ))}
              <span className="text-text-muted/40 text-xs">·</span>
              <span className="text-xs text-text-muted">Based in Germany</span>
            </motion.div>
          </motion.div>

          {/* ── Right column: photo ── */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
            animate={reduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)' }}
              aria-hidden
            />

            {/* Photo frame */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px]">
              {/* Decorative border frame */}
              <div
                className="absolute -inset-px rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(139,92,246,0.2) 50%, rgba(255,255,255,0.05) 100%)',
                }}
                aria-hidden
              />

              {/* Photo container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/avatar.png"
                  alt="Amir Kalaie"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                />
                {/* Subtle bottom gradient to blend into background */}
                <div
                  className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.6) 0%, transparent 100%)' }}
                  aria-hidden
                />
              </div>

              {/* Floating stat chip — top right */}
              <motion.div
                initial={reduced ? {} : { opacity: 0, y: 10 }}
                animate={reduced ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-2xl border border-white/10 backdrop-blur-md text-xs font-medium text-text-primary shadow-xl"
                style={{ background: 'rgba(24,24,27,0.9)' }}
              >
                <span className="w-2 h-2 rounded-full bg-accent" />
                2 SaaS Produkte
              </motion.div>

              {/* Floating stat chip — bottom left */}
              <motion.div
                initial={reduced ? {} : { opacity: 0, y: 10 }}
                animate={reduced ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-2xl border border-white/10 backdrop-blur-md text-xs font-medium text-text-primary shadow-xl"
                style={{ background: 'rgba(24,24,27,0.9)' }}
              >
                <span className="text-base">⚡</span>
                Full-Stack · Product
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={reduced ? {} : { opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
