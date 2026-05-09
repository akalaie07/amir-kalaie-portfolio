'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import SectionWrapper from '@/components/common/SectionWrapper';
import { SITE, SOCIAL } from '@/lib/constants';

export default function ContactSection() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="contact" className="border-t border-white/[0.04]" narrow>
      <motion.div
        variants={reduced ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center flex flex-col items-center gap-8"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />

        <motion.div variants={reduced ? {} : fadeUp} className="flex flex-col gap-4 relative z-10">
          <p className="text-label text-accent">Lass uns zusammenarbeiten</p>
          <h2 className="text-section text-text-primary">
            Du hast eine Produktidee?<br />
            Lass sie uns richtig bauen.
          </h2>
        </motion.div>

        <motion.p
          variants={reduced ? {} : fadeUp}
          className="text-text-secondary leading-relaxed max-w-lg relative z-10"
        >
          Ich nehme aktuell 1–2 neue Projekte an. Schreib mir, was du baust — ich antworte innerhalb von 24 Stunden.
        </motion.p>

        {/* Primary CTA */}
        <motion.div variants={reduced ? {} : fadeUp} className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent-bright transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 text-base"
          >
            Nachricht senden
            <span aria-hidden>→</span>
          </a>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors underline underline-offset-4"
          >
            Oder 30-min Discovery Call buchen
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={reduced ? {} : fadeUp}
          className="flex items-center gap-6 pt-4 border-t border-white/[0.06] w-full justify-center relative z-10"
        >
          {[
            { label: 'GitHub', href: SOCIAL.github },
            { label: 'LinkedIn', href: SOCIAL.linkedin },
            { label: 'Twitter / X', href: SOCIAL.twitter },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
