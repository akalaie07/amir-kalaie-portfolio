'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
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
        className="grid lg:grid-cols-5 gap-12 lg:gap-16"
      >
        {/* Main text — 3 columns */}
        <motion.div variants={reduced ? {} : fadeUp} className="lg:col-span-3 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-label text-accent">Über mich</p>
            <h2 className="text-section text-text-primary">
              Ich denke in Systemen.<br />
              Ich baue in Sprints.
            </h2>
          </div>

          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Als Full-Stack Product Engineer verbinde ich technische Tiefe mit strategischem Produktdenken. Ich baue keine Features — ich löse Probleme. Jedes Projekt beginnt mit der Frage: Was soll der Nutzer nach dem Klick fühlen?
            </p>
            <p>
              Mein Fokus liegt auf dem modernen Web-Stack: Next.js, TypeScript, Supabase, Stripe. Ich bevorzuge klare Architekturen, die ein einzelner Entwickler in 6 Monaten noch versteht — und die in 2 Jahren noch maintainbar sind.
            </p>
            <p>
              Aktuell baue ich zwei SaaS-Produkte parallel auf und nehme selektiv externe Projekte an — mit dem Anspruch, Arbeit abzuliefern, auf die ich stolz bin.
            </p>
          </div>

          {/* Values row */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {values.map((v) => (
              <div
                key={v.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06]"
                style={{ background: '#111113' }}
              >
                <span className="text-accent text-sm">{v.icon}</span>
                <span className="text-sm text-text-secondary">{v.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Side panel — 2 columns */}
        <motion.div
          variants={reduced ? {} : fadeUp}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          {/* Avatar placeholder */}
          <div
            className="rounded-2xl overflow-hidden border border-white/[0.08] aspect-square flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #18181B 0%, #111113 100%)' }}
          >
            <div className="text-center space-y-2">
              <div
                className="w-20 h-20 rounded-full mx-auto"
                style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)' }}
              />
              <p className="text-sm text-text-muted">Amir Kalaie</p>
            </div>
          </div>

          {/* Quick facts */}
          <div
            className="rounded-2xl border border-white/[0.08] p-5 space-y-4"
            style={{ background: '#111113' }}
          >
            {[
              { label: 'Standort', value: 'Deutschland' },
              { label: 'Fokus', value: 'Full-Stack / SaaS' },
              { label: 'Stack', value: 'Next.js · TS · Supabase' },
              { label: 'Verfügbar', value: 'Sofort' },
            ].map((fact) => (
              <div key={fact.label} className="flex justify-between items-baseline">
                <span className="text-xs text-text-muted">{fact.label}</span>
                <span className="text-sm text-text-secondary">{fact.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
