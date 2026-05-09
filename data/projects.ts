import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'reselltrack',
    title: 'ResellTrack',
    tagline: 'Das Tracking-Tool für professionelle Wiederverkäufer.',
    description:
      'ResellTrack ist eine SaaS-App für Wiederverkäufer auf Plattformen wie Vinted und eBay. Sie ermöglicht präzises Inventar-Management, automatisches Gewinntracking und einen vollständigen Überblick über alle Verkaufsaktivitäten — ohne Tabellenkalkulationen.',
    status: 'development',
    featured: true,
    tags: ['B2C', 'SaaS', 'E-Commerce'],
    category: 'E-Commerce Tools',
    techStack: ['Next.js 16', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { label: 'Artikel-Limit Starter', value: '100' },
      { label: 'Tier-System', value: 'Starter / Pro' },
      { label: 'Export-Formate', value: 'CSV' },
    ],
    images: [
      {
        src: '/images/projects/reselltrack/hero.png',
        alt: 'ResellTrack Dashboard',
        width: 1200,
        height: 750,
        variant: 'hero',
      },
    ],
    links: {
      caseStudy: '/projects/reselltrack',
    },
    year: 2025,
    highlight: 'Inventar + Gewinn + Steuern — alles in einer App.',
    color: '#6366F1',
  },
  {
    id: 'kalaie-ledger',
    title: 'Kalaie Ledger',
    tagline: 'Deutschsprachige Buchhaltungs-App für moderne Unternehmen.',
    description:
      'Kalaie Ledger ist eine vollständige Buchhaltungs-Web-App — gebaut für deutschsprachige Unternehmen. Deals verwalten, Buchhaltungsreports generieren, Ratenzahlungen tracken und Massenimporte via CSV/Excel durchführen — alles in einer strukturierten, modernen Oberfläche.',
    status: 'development',
    featured: true,
    tags: ['B2B', 'SaaS', 'Finance', 'Buchhaltung'],
    category: 'FinTech',
    techStack: ['Next.js 16', 'TypeScript', 'Supabase', 'shadcn/ui', 'Tailwind CSS v4', 'Recharts', 'React PDF', 'Resend', 'Zod'],
    metrics: [
      { label: 'Module', value: '6' },
      { label: 'PDF-Export', value: 'Nativ' },
      { label: 'Multi-Tenancy', value: 'Organisationen' },
    ],
    images: [
      {
        src: '/images/projects/kalaie-ledger/hero.png',
        alt: 'Kalaie Ledger Übersicht',
        width: 1200,
        height: 750,
        variant: 'hero',
      },
    ],
    links: {
      caseStudy: '/projects/kalaie-ledger',
    },
    year: 2025,
    highlight: 'Deals · Reports · Inkasso · Chat — in einem System.',
    color: '#8B5CF6',
  },
];
