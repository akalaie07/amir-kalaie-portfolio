import Link from 'next/link';
import { SITE, SOCIAL } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <p>
          © {year} {SITE.name} — Built with Next.js & Tailwind CSS
        </p>
        <div className="flex items-center gap-6">
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="hover:text-text-secondary transition-colors">
            GitHub
          </a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text-secondary transition-colors">
            LinkedIn
          </a>
          <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-text-secondary transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
