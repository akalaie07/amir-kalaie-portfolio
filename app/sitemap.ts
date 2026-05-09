import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';
import { getAllProjectSlugs } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllProjectSlugs();

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...slugs.map((slug) => ({
      url: `${SITE.url}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
