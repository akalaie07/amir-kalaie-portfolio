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
        <motion.div variants={reduced ? {} : stagger} className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => {
            const status = statusConfig[project.status];
            return (
              <motion.div
                key={project.id}
                variants={reduced ? {} : fadeUp}
                className="group relative rounded-3xl overflow-hidden border border-white/[0.07] transition-all duration-300 hover:border-white/[0.15] hover:-translate-y-1"
                style={{ background: '#0F0F12' }}
              >
                {/* Colored top bar */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${project.color ?? '#6366F1'}, transparent)` }}
                />

                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 20% 20%, ${project.color ?? '#6366F1'}0D 0%, transparent 60%)` }}
                  aria-hidden
                />

                <div className="relative p-7 flex flex-col gap-5 h-full">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Project icon / color dot */}
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${project.color ?? '#6366F1'}20`, border: `1px solid ${project.color ?? '#6366F1'}30` }}
                    >
                      <div className="w-3.5 h-3.5 rounded-full" style={{ background: project.color ?? '#6366F1' }} />
                    </div>

                    {/* Status + year */}
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{ color: status.color, background: status.bg }}
                      >
                        {status.label}
                      </span>
                      <span className="text-xs text-text-muted">{project.year}</span>
                    </div>
                  </div>

                  {/* Title & tagline */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-text-primary tracking-tight">{project.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{project.tagline}</p>
                  </div>

                  {/* Highlight metric */}
                  {project.highlight && (
                    <p className="text-xs text-text-muted italic border-l-2 pl-3" style={{ borderColor: `${project.color ?? '#6366F1'}60` }}>
                      {project.highlight}
                    </p>
                  )}

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Footer: tech + link */}
                  <div className="flex items-end justify-between gap-3 pt-3 border-t border-white/[0.05]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded-md text-text-muted border border-white/[0.06]"
                          style={{ background: 'rgba(255,255,255,0.02)' }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[11px] text-text-muted px-1">+{project.techStack.length - 3}</span>
                      )}
                    </div>

                    {project.links.caseStudy && (
                      <Link
                        href={project.links.caseStudy}
                        className="flex-shrink-0 flex items-center gap-1 text-xs text-accent group-hover:gap-2 transition-all duration-200 font-medium"
                      >
                        Details →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
