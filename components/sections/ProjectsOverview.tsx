'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import SectionWrapper from '@/components/common/SectionWrapper';
import type { Project } from '@/types/project';

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  live:        { label: 'Live', color: '#4ADE80', bg: 'rgba(74,222,128,0.1)' },
  beta:        { label: 'Beta', color: '#FB923C', bg: 'rgba(251,146,60,0.1)' },
  development: { label: 'In Entwicklung', color: '#A1A1AA', bg: 'rgba(161,161,170,0.1)' },
  archived:    { label: 'Archiviert', color: '#52525B', bg: 'rgba(82,82,91,0.1)' },
};

interface ProjectsOverviewProps {
  projects: Project[];
}

export default function ProjectsOverview({ projects }: ProjectsOverviewProps) {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="projects">
      <motion.div
        variants={reduced ? {} : stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-12"
      >
        {/* Section header */}
        <motion.div variants={reduced ? {} : fadeUp} className="flex flex-col gap-3">
          <p className="text-label text-accent">Projekte</p>
          <h2 className="text-section text-text-primary">Was ich gebaut habe</h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={reduced ? {} : stagger}
          className="grid md:grid-cols-2 gap-4"
        >
          {projects.map((project) => {
            const status = statusConfig[project.status];
            return (
              <motion.div
                key={project.id}
                variants={reduced ? {} : fadeUp}
                className="card-hover group relative rounded-2xl border border-white/[0.08] p-6 flex flex-col gap-4 cursor-pointer"
                style={{ background: '#111113' }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ color: status.color, background: status.bg }}
                      >
                        {status.label}
                      </span>
                      <span className="text-xs text-text-muted">{project.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mt-1">{project.title}</h3>
                  </div>

                  {/* Color dot */}
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0 opacity-60"
                    style={{ background: project.color ?? '#6366F1' }}
                  />
                </div>

                {/* Tagline */}
                <p className="text-sm text-text-secondary leading-relaxed">{project.tagline}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-md text-text-muted border border-white/[0.06]"
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs px-2 py-0.5 text-text-muted">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Arrow link */}
                {project.links.caseStudy && (
                  <Link
                    href={project.links.caseStudy}
                    className="mt-auto flex items-center gap-1.5 text-xs text-accent group-hover:gap-2.5 transition-all duration-200"
                  >
                    Case Study lesen
                    <span>→</span>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
