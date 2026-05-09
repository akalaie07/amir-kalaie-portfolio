'use client';

import { motion } from 'framer-motion';
import { fadeUp, scaleIn, stagger, viewportOnce } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import SectionWrapper from '@/components/common/SectionWrapper';

const skillGroups = [
  {
    title: 'Frontend',
    icon: '⬡',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shadcn/ui'],
  },
  {
    title: 'Backend & Daten',
    icon: '⬢',
    skills: ['Node.js', 'PostgreSQL', 'Supabase', 'Prisma', 'REST APIs', 'tRPC'],
  },
  {
    title: 'Infrastruktur',
    icon: '◎',
    skills: ['Vercel', 'Docker', 'GitHub Actions', 'Stripe', 'AWS S3', 'Resend'],
  },
  {
    title: 'Produkt',
    icon: '◈',
    skills: ['Figma', 'Produktstrategie', 'Analytics', 'A/B Testing', 'User Research', 'SEO'],
  },
];

export default function SkillsSection() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="skills" className="border-t border-white/[0.04]">
      <motion.div
        variants={reduced ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-12"
      >
        {/* Header */}
        <motion.div variants={reduced ? {} : fadeUp} className="flex flex-col gap-3">
          <p className="text-label text-accent">Skills</p>
          <h2 className="text-section text-text-primary">Womit ich arbeite</h2>
        </motion.div>

        {/* Groups grid */}
        <motion.div variants={reduced ? {} : stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={reduced ? {} : fadeUp}
              className="rounded-2xl border border-white/[0.08] p-5 flex flex-col gap-4"
              style={{ background: '#111113' }}
            >
              {/* Group header */}
              <div className="flex items-center gap-2">
                <span className="text-accent">{group.icon}</span>
                <h3 className="text-sm font-medium text-text-primary">{group.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={reduced ? {} : scaleIn}
                    className="text-xs px-2.5 py-1 rounded-md text-text-secondary border border-white/[0.06] hover:border-accent/30 hover:text-text-primary transition-all duration-200 cursor-default"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
