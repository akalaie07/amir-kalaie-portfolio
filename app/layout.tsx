import type { Metadata } from 'next';
import {
  Instrument_Serif,
  Space_Grotesk,
  Geist,
  JetBrains_Mono,
} from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import { SITE, SOCIAL } from '@/lib/constants';

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: '/images/og/default.png', width: 1200, height: 630, alt: SITE.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/images/og/default.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  jobTitle: 'Full-Stack Product Engineer',
  url: SITE.url,
  email: SITE.email,
  sameAs: [SOCIAL.github, SOCIAL.linkedin, SOCIAL.twitter],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={[
        instrumentSerif.variable,
        spaceGrotesk.variable,
        geist.variable,
        jetbrainsMono.variable,
      ].join(' ')}
    >
      <head>
        {/* Theme init — runs before React to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-geist, system-ui, sans-serif)' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
