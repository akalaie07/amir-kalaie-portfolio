'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import SectionWrapper from '@/components/common/SectionWrapper';

const reasons = [
  {
    icon: '⬡',
    title: 'Full-Stack Ownership',
    description:
      'Eine Person. Von der Datenbankstruktur bis zum deployten UI. Keine Übergaben, keine Missverständnisse zwischen Teams, keine blinden Flecken.',
    accent: '#6366F1',
  },
  {
    icon: '⚡',
    title: 'Speed ohne Schulden',
    description:
      'Ich shippe schnell — ohne Technical Debt aufzubauen. Jedes Projekt ist dokumentiert, wartbar und auf Übergabe ausgelegt.',
    accent: '#8B5CF6',
  },
  {
    icon: '◈',
    title: 'Produktdenken',
    description:
      'Ich bin kein reiner Developer. Ich frage erst "Warum?" — dann "Wie?". Dein Produkterfolg ist die Metrik, auf die ich optimiere.',
    accent: '#A78BFA',
  },
];

export default function WhyMeSection() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="why-me" className="border-t border-white/[0.04]">
      <motion.div
        variants={reduced ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-12"
      >
        {/* Header */}
        <motion.div variants={reduced ? {} : fadeUp} className="flex flex-col gap-3 max-w-2xl">
          <p className="text-label text-accent">Warum mit mir arbeiten</p>
          <h2 className="text-section text-text-primary">Was den Unterschied macht</h2>
        </motion.div>

        {/* Cards */}
        <motion.div variants={reduced ? {} : stagger} className="grid md:grid-cols-3 gap-4">
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={reduced ? {} : fadeUp}
              className="group relative rounded-2xl border border-white/[0.08] p-6 flex flex-col gap-4 overflow-hidden hover:border-white/[0.15] transition-all duration-300"
              style={{ background: '#111113' }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 30% 20%, ${r.accent}0D 0%, transparent 60%)` }}
                aria-hidden
              />

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg relative z-10"
                style={{ background: `${r.accent}1A`, color: r.accent }}
              >
                {r.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-base font-semibold text-text-primary">{r.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
