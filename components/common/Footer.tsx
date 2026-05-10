'use client';

import { useT } from '@/components/Providers';
import LogoMark from '@/components/common/LogoMark';
import CityClock from '@/components/common/CityClock';

export default function Footer() {
  const T = useT();
  return (
    <footer className="bottom">
      <div className="shell">
        {/* Oversized wordmark */}
        <div className="wordmark reveal">
          <span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
            <LogoMark size={140} variant="image" />
          </span>
          <span>Kalaie<em>.</em></span>
        </div>

        {/* Footer grid */}
        <div className="footer-grid">
          <div>
            <h5>{T('Studio', 'Studio')}</h5>
            <ul>
              <li>{T('Independent practice', 'Unabhängige Praxis')}</li>
              <li>Berlin · {T('Working worldwide', 'Weltweit tätig')}</li>
              <li>{T('Booking Q3 / Q4 2026', 'Buchbar Q3 / Q4 2026')}</li>
            </ul>
          </div>
          <div>
            <h5>{T('Index', 'Verzeichnis')}</h5>
            <ul>
              <li><a href="#work">{T('Selected work', 'Projekte')}</a></li>
              <li><a href="#practice">{T('Practice', 'Disziplinen')}</a></li>
              <li><a href="#process">{T('Process', 'Prozess')}</a></li>
              <li><a href="#philosophy">{T('About', 'Über mich')}</a></li>
            </ul>
          </div>
          <div>
            <h5>{T('Elsewhere', 'Anderswo')}</h5>
            <ul>
              <li><a href="https://github.com/amirkalaie" target="_blank" rel="noreferrer">GitHub ↗</a></li>
              <li><a href="https://linkedin.com/in/amirkalaie" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
              <li><a href="https://twitter.com/amirkalaie" target="_blank" rel="noreferrer">Twitter / X ↗</a></li>
            </ul>
          </div>
          <div>
            <h5>{T('Contact', 'Kontakt')}</h5>
            <ul>
              <li><a href="mailto:hello@amirkalaie.com">hello@amirkalaie.com</a></li>
              <li>{T('Response < 24h', 'Antwort < 24 Std.')}</li>
            </ul>
          </div>
        </div>

        {/* Sign-off */}
        <div className="signoff">
          <span>© 2026 Amir Kalaie · {T('Independent Studio', 'Unabhängiges Studio')}</span>
          <span>{T('Designed & engineered in Berlin', 'Entworfen & entwickelt in Berlin')}</span>
          <CityClock />
        </div>
      </div>
    </footer>
  );
}
