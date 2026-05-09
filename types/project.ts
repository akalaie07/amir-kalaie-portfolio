export type ProjectStatus = 'live' | 'beta' | 'development' | 'archived';

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant: 'hero' | 'screenshot' | 'thumbnail';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  featured: boolean;
  tags: string[];
  category: string;
  techStack: string[];
  metrics?: ProjectMetric[];
  images: ProjectImage[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  year: number;
  highlight?: string;
  color?: string;
}
