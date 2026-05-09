'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import SectionWrapper from '@/components/common/SectionWrapper';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Wir klären Ziel, Scope und Erfolgskriterien in einem einzigen Call. Kein Overhead, kein Hin und Her.',
  },
  {
    number: '02',
    title: 'Architektur',
    description: 'Ich designe das System, bevor ich eine Zeile Code schreibe. Klare Entscheidungen jetzt sparen Wochen später.',
  },
  {
    number: '03',
    title: 'Iteration',
    description: 'Wöchentliche Demos, asynchrone Updates, volle Transparenz. Du weißt immer, wo wir stehen.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Staged Rollout, Monitoring und Post-Launch-Support. Das Produkt geht live — und bleibt stabil.',
  },
  {
    number: '05',
    title: 'Wachstum',
    description: 'Optional: Ich bleibe als technischer Advisor an Bord und helfe beim Scale-up.',
  },
];

export default function ProcessSection() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="process" className="border-t border-white/[0.04]">
      <motion.div
        variants={reduced ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-12"
      >
        {/* Header */}
        <motion.div variants={reduced ? {} : fadeUp} className="flex flex-col gap-3 max-w-xl">
          <p className="text-label text-accent">Prozess</p>
          <h2 className="text-section text-text-primary">So arbeiten wir zusammen</h2>
          <p className="text-text-secondary leading-relaxed">
            Kein Black-Box-Entwickeln. Volle Transparenz, klare Phasen, messbare Ergebnisse.
          </p>
        </motion.div>

        {/* Steps — vertical on mobile, horizontal on large screens */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-8 left-8 right-8 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(99,102,241,0.3), transparent)' }}
          />

          <motion.div
            variants={reduced ? {} : stagger}
            className="grid lg:grid-cols-5 gap-4 lg:gap-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={reduced ? {} : fadeUp}
                className="relative flex lg:flex-col gap-4 lg:gap-3 p-4 rounded-2xl border border-white/[0.06] hover:border-accent/20 transition-colors duration-200"
                style={{ background: '#111113' }}
              >
                {/* Number dot */}
                <div className="flex-shrink-0 flex items-center gap-3 lg:gap-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-accent relative z-10"
                    style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)' }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-text-primary">{step.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
