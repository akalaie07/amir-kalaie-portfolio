'use client';

import { useT } from '@/components/Providers';

export default function ContactSection() {
  const T = useT();
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <div className="reveal">
          <span className="label tech-label">
            <span className="bracket-l">[</span>— {T("Let's talk", 'Sprechen wir')}<span className="bracket-r">]</span>
          </span>
          <h2 className="display" style={{ marginTop: 28 }}>
            {T('Have a problem worth ', 'Ein Problem, das es wert ist ')}
            <em>{T('building', 'gebaut')}</em>
            {T('?', ' zu werden?')}
          </h2>
          <p className="sub">
            {T(
              'I take on two to three external engagements per year. Best fit: founders shipping their first SaaS, or established teams who need a senior product engineer to ship the next one.',
              'Ich übernehme zwei bis drei externe Projekte pro Jahr. Passt am besten zu: Gründer, die ihre erste SaaS ausliefern, oder etablierte Teams, die einen Senior Product Engineer für die nächste brauchen.'
            )}
          </p>
          <div className="contact-row">
            <a
              href="mailto:hello@amirkalaie.com"
              className="email-btn"
              data-cursor-text={T('Send', 'Senden')}
            >
              hello@amirkalaie.com <span className="arrow">→</span>
            </a>
            <a href="https://linkedin.com/in/amirkalaie" className="cta ghost" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://github.com/amirkalaie" className="cta ghost" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
