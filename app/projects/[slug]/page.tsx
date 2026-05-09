import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import { SITE } from '@/lib/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${SITE.name}`,
      description: project.tagline,
      images: project.images[0]
        ? [{ url: project.images[0].src, width: project.images[0].width, height: project.images[0].height }]
        : undefined,
    },
  };
}

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  live:        { label: 'Live', color: '#4ADE80', bg: 'rgba(74,222,128,0.1)' },
  beta:        { label: 'Beta', color: '#FB923C', bg: 'rgba(251,146,60,0.1)' },
  development: { label: 'In Entwicklung', color: '#A1A1AA', bg: 'rgba(161,161,170,0.1)' },
  archived:    { label: 'Archiviert', color: '#52525B', bg: 'rgba(82,82,91,0.1)' },
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const status = statusConfig[project.status];

  return (
    <div className="min-h-screen" style={{ background: '#09090B' }}>
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0F0F23 0%, #09090B 100%)' }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(ellipse at center, ${project.color ?? '#6366F1'}1A 0%, transparent 70%)` }}
          aria-hidden
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back link */}
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-8"
          >
            ← Zurück
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ color: status.color, background: status.bg }}
            >
              {status.label}
            </span>
            <span className="text-xs text-text-muted">{project.category}</span>
            <span className="text-xs text-text-muted">·</span>
            <span className="text-xs text-text-muted">{project.year}</span>
          </div>

          <h1 className="text-section text-text-primary mb-4">{project.title}</h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">{project.tagline}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Description */}
        <section>
          <p className="text-text-secondary leading-relaxed text-lg">{project.description}</p>
        </section>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-6">Ergebnisse</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/[0.08] p-5"
                  style={{ background: '#111113' }}
                >
                  <p className="text-2xl font-semibold text-text-primary mb-1">{m.value}</p>
                  <p className="text-sm text-text-muted">{m.label}</p>
                  {m.description && <p className="text-xs text-text-muted mt-1">{m.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Highlight */}
        {project.highlight && (
          <blockquote className="border-l-2 border-accent pl-6 py-2">
            <p className="text-xl text-text-primary font-medium italic">{project.highlight}</p>
          </blockquote>
        )}

        {/* Tech stack */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1.5 rounded-lg text-text-secondary border border-white/[0.08]"
                style={{ background: '#111113' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Tags */}
        <section>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full text-text-muted border border-white/[0.06]">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="flex flex-wrap gap-4 pt-4 border-t border-white/[0.06]">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent-bright transition-all"
            >
              Live ansehen ↗
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-text-secondary text-sm hover:border-white/20 hover:text-text-primary transition-all"
            >
              GitHub ↗
            </a>
          )}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent/30 text-accent text-sm hover:bg-accent hover:text-white transition-all"
          >
            Ähnliches Projekt? Meld dich →
          </Link>
        </section>
      </div>
    </div>
  );
}
