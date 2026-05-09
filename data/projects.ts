import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Project One',
    tagline: 'Dein SaaS-Produkt in einem Satz.',
    description:
      'Kurze, prägnante Beschreibung des Projekts. Was das Tool macht, für wen es ist, und welches Problem es löst. 2–3 Sätze reichen aus.',
    status: 'live',
    featured: true,
    tags: ['B2B', 'SaaS', 'Productivity'],
    category: 'Productivity',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS'],
    metrics: [
      { label: 'Active Users', value: '1,200+' },
      { label: 'MRR', value: '€4k' },
      { label: 'Launched', value: '2024' },
    ],
    images: [
      {
        src: '/images/projects/project-one/hero.png',
        alt: 'Project One Dashboard',
        width: 1200,
        height: 750,
        variant: 'hero',
      },
    ],
    links: {
      live: 'https://example.com',
      caseStudy: '/projects/project-one',
    },
    year: 2024,
    highlight: 'Von 0 auf €4k MRR in 6 Monaten.',
    color: '#6366F1',
  },
  {
    id: 'project-two',
    title: 'Project Two',
    tagline: 'Dein zweites SaaS-Produkt in einem Satz.',
    description:
      'Kurze, prägnante Beschreibung des zweiten Projekts. Was das Tool macht, für wen es ist, und welches Problem es löst. 2–3 Sätze reichen aus.',
    status: 'beta',
    featured: true,
    tags: ['B2C', 'SaaS', 'Developer Tools'],
    category: 'Developer Tools',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI', 'Vercel'],
    metrics: [
      { label: 'Beta Users', value: '300+' },
      { label: 'Waitlist', value: '1.5k' },
      { label: 'Launched', value: '2025' },
    ],
    images: [
      {
        src: '/images/projects/project-two/hero.png',
        alt: 'Project Two Interface',
        width: 1200,
        height: 750,
        variant: 'hero',
      },
    ],
    links: {
      live: 'https://example2.com',
      caseStudy: '/projects/project-two',
    },
    year: 2025,
    highlight: '1.500 Personen auf der Waitlist vor dem Launch.',
    color: '#8B5CF6',
  },
];
