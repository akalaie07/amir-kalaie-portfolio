'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, slideFromLeft, slideFromRight, stagger, viewportOnce } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import SectionWrapper from '@/components/common/SectionWrapper';

const values = [
  { label: 'Klarheit über Komplexität', icon: '◎' },
  { label: 'Shipping over Perfection', icon: '⚡' },
  { label: 'Produkt zuerst, Code danach', icon: '◈' },
  { label: 'Langfristige Wartbarkeit', icon: '◉' },
];

export default function AboutSection() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="about" className="border-t border-white/[0.04]">
      <motion.div
        variants={reduced ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-16"
      >
        {/* Section label */}
        <motion.p variants={reduced ? {} : fadeUp} className="text-label text-accent">
          Über mich
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: photo ── */}
          <motion.div
            variants={reduced ? {} : slideFromLeft}
            className="relative"
          >
            {/* Outer accent */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'rgba(99,102,241,0.2)' }}
              aria-hidden
            />

            {/* Photo with styled frame */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/avatar.png"
                alt="Amir Kalaie"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(9,9,11,0.8) 0%, transparent 100%)' }}
                aria-hidden
              />

              {/* Name tag at bottom */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-lg font-semibold text-white">Amir Kalaie</p>
                <p className="text-sm text-text-secondary mt-0.5">Full-Stack Product Engineer · Germany</p>
              </div>
            </div>

            {/* Quick-facts card overlapping bottom-right */}
            <motion.div
              variants={reduced ? {} : fadeUp}
              className="absolute -bottom-6 -right-4 rounded-2xl border border-white/[0.08] p-4 shadow-2xl hidden sm:block"
              style={{ background: 'rgba(17,17,19,0.95)', backdropFilter: 'blur(12px)', minWidth: '160px' }}
            >
              {[
                { label: 'Fokus', value: 'SaaS / Full-Stack' },
                { label: 'Stack', value: 'Next.js · TS' },
                { label: 'Status', value: '✦ Verfügbar' },
              ].map((f) => (
                <div key={f.label} className="flex flex-col mb-2 last:mb-0">
                  <span className="text-[10px] text-text-muted uppercase tracking-wider">{f.label}</span>
                  <span className="text-xs text-text-primary font-medium">{f.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: text ── */}
          <motion.div
            variants={reduced ? {} : slideFromRight}
            className="flex flex-col gap-8 pt-2 lg:pt-10"
          >
            <h2 className="text-section text-text-primary leading-tight">
              Ich denke in<br />
              <span className="gradient-text">Systemen.</span><br />
              Ich baue in Sprints.
            </h2>

            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                Als Full-Stack Product Engineer verbinde ich technische Tiefe mit unternehmerischem Denken. Ich baue keine Features — ich löse Probleme. Jedes Projekt beginnt mit der Frage: Was soll der Nutzer nach dem Klick fühlen?
              </p>
              <p>
                Mein Fokus liegt auf dem modernen Web-Stack: Next.js, TypeScript, Supabase, Stripe. Ich bevorzuge klare Architekturen, die langfristig wartbar sind — und die skalieren, wenn das Produkt wächst.
              </p>
              <p>
                Aktuell baue ich zwei SaaS-Produkte auf und nehme selektiv externe Projekte an — mit dem Anspruch, Arbeit abzuliefern, auf die ich stolz bin.
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-white/[0.06] hover:border-accent/20 transition-colors duration-200"
                  style={{ background: '#111113' }}
                >
                  <span className="text-accent text-sm flex-shrink-0">{v.icon}</span>
                  <span className="text-xs text-text-secondary leading-snug">{v.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-bright transition-colors group"
              >
                Lass uns zusammenarbeiten
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </SectionWrapper>
  );
}
