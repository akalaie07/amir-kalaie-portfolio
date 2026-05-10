'use client';

import { useT } from '@/components/Providers';

export default function ManifestoSection() {
  const T = useT();
  return (
    <section className="manifesto">
      <div className="shell">
        <div className="reveal">
          <div className="label tech-label">
            <span className="bracket-l">[</span>— {T('A note on craft', 'Über das Handwerk')}<span className="bracket-r">]</span>
          </div>
          <div className="display quote" style={{ marginTop: 28 }}>
            {T('I build software the way good architects build buildings —', 'Ich baue Software wie gute Architekten Häuser —')}
            <span className="muted">
              {' '}{T("thoughtfully, slowly, and with the user's ", 'durchdacht, langsam und mit dem ')}
            </span>
            <em>{T('second visit', 'zweiten Besuch')}</em>
            <span className="muted">
              {' '}{T('in mind, not the first.', 'des Nutzers im Sinn, nicht dem ersten.')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
