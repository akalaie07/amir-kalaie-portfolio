'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeUp, slideFromLeft, slideFromRight, stagger, viewportOnce } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import SectionWrapper from '@/components/common/SectionWrapper';
import type { Project } from '@/types/project';

interface CaseStudiesProps {
  projects: Project[];
}

export default function CaseStudies({ projects }: CaseStudiesProps) {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="case-studies" className="border-t border-white/[0.04]">
      <motion.div
        variants={reduced ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-20"
      >
        {/* Section header */}
        <motion.div variants={reduced ? {} : fadeUp} className="flex flex-col gap-3">
          <p className="text-label text-accent">Featured Case Studies</p>
          <h2 className="text-section text-text-primary">Die Projekte im Detail</h2>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Nicht nur gebaut — durchdacht. Hier siehst du Kontext, Entscheidungen und Ergebnisse.
          </p>
        </motion.div>

        {/* Project entries */}
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const textVariant = reduced ? {} : (isEven ? slideFromLeft : slideFromRight);
          const imageVariant = reduced ? {} : (isEven ? slideFromRight : slideFromLeft);

          return (
            <motion.article
              key={project.id}
              variants={reduced ? {} : stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}
            >
              {/* Text block */}
              <motion.div
                variants={textVariant}
                className="flex flex-col gap-6 [direction:ltr]"
              >
                {/* Project meta */}
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: project.color ?? '#6366F1' }}
                  />
                  <span className="text-sm text-text-muted">{project.category}</span>
                  <span className="text-sm text-text-muted">·</span>
                  <span className="text-sm text-text-muted">{project.year}</span>
                </div>

                <h3 className="text-3xl font-semibold text-text-primary">{project.title}</h3>

                {/* Highlight */}
                {project.highlight && (
                  <blockquote className="border-l-2 border-accent pl-4 text-text-secondary text-base italic">
                    {project.highlight}
                  </blockquote>
                )}

                <p className="text-text-secondary leading-relaxed">{project.description}</p>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-white/[0.06]">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col gap-0.5">
                        <span className="text-xl font-semibold text-text-primary">{m.value}</span>
                        <span className="text-xs text-text-muted">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md text-text-secondary border border-white/[0.08]"
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-1">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-bright transition-colors"
                    >
                      Live ansehen <span>↗</span>
                    </a>
                  )}
                  {project.links.caseStudy && (
                    <Link
                      href={project.links.caseStudy}
                      className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      Case Study <span>→</span>
                    </Link>
                  )}
                </div>
              </motion.div>

              {/* Image / Mockup */}
              <motion.div variants={imageVariant} className="[direction:ltr]">
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-[16/10]"
                  style={{ background: '#18181B' }}
                >
                  {/* Placeholder visual when no real screenshot */}
                  <div className="absolute inset-0 flex flex-col gap-4 p-6">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-md"
                        style={{ background: project.color ?? '#6366F1' }}
                      />
                      <div className="h-2 w-24 rounded-full bg-white/[0.06]" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {project.metrics?.slice(0, 3).map((m, i) => (
                        <div
                          key={i}
                          className="rounded-lg p-3 border border-white/[0.06]"
                          style={{ background: '#111113' }}
                        >
                          <p className="text-xs text-text-muted mb-1">{m.label}</p>
                          <p className="text-sm font-semibold text-text-primary">{m.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 rounded-xl border border-white/[0.06]" style={{ background: '#111113' }}>
                      <div className="p-4 flex items-end gap-1.5 h-full">
                        {[30, 50, 45, 70, 60, 80, 75, 90].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                              height: `${h}%`,
                              background: i === 7 ? (project.color ?? '#6366F1') : `${project.color ?? '#6366F1'}40`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Glow */}
                  <div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-12 blur-2xl"
                    style={{ background: `${project.color ?? '#6366F1'}40` }}
                    aria-hidden
                  />
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
