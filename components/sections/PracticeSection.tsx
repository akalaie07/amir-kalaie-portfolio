'use client';

import { useT } from '@/components/Providers';

export default function PracticeSection() {
  const T = useT();
  return (
    <section className="block" id="practice">
      <div className="shell">
        <div className="block-head reveal">
          <div className="num">
            <span className="n">02</span> · {T('The Practice', 'Das Handwerk')}
          </div>
          <div>
            <h2 className="display">
              {T('Three disciplines, ', 'Drei Disziplinen, ')}<em>{T('one operator', 'ein Kopf')}</em>.
            </h2>
            <p className="sub">
              {T(
                'I work alone, but with the seams of a small team — product thinking, engineering, and design as one continuous decision rather than a handoff.',
                'Ich arbeite allein, aber mit der Disziplin eines kleinen Teams — Produktdenken, Engineering und Design als eine zusammenhängende Entscheidung, nicht als Übergabe.'
              )}
            </p>
          </div>
        </div>

        <div className="practice-grid reveal-stagger">
          <div className="practice-cell">
            <div className="num">— 01</div>
            <h3 className="display">
              {T('Product ', 'Produkt-')}<em>{T('strategy.', 'Strategie.')}</em>
            </h3>
            <p>
              {T(
                'Naming, positioning, pricing, and the shape of the first six months. I treat early decisions like load-bearing walls — fewer of them, made carefully.',
                'Naming, Positionierung, Pricing, die ersten sechs Monate. Frühe Entscheidungen sind tragende Wände — wenige davon, dafür sorgfältig gesetzt.'
              )}
            </p>
            <div className="stack">
              <span>Discovery</span>
              <span>Pricing</span>
              <span>Roadmap</span>
              <span>Tier design</span>
            </div>
          </div>

          <div className="practice-cell">
            <div className="num">— 02</div>
            <h3 className="display">
              Full-stack <em>{T('engineering.', 'Engineering.')}</em>
            </h3>
            <p>
              {T(
                'Modern TypeScript on the front, Postgres-shaped data on the back. Architectures that scale up, but also age well when nothing changes for six months.',
                'Modernes TypeScript vorne, Postgres-geformte Daten hinten. Architekturen, die mitwachsen, aber auch gut altern, wenn sechs Monate nichts passiert.'
              )}
            </p>
            <div className="stack">
              <span>Next.js 16</span>
              <span>TypeScript</span>
              <span>Supabase</span>
              <span>Postgres</span>
              <span>Stripe</span>
            </div>
          </div>

          <div className="practice-cell">
            <div className="num">— 03</div>
            <h3 className="display">
              {T('Interface ', 'Interface-')}<em>{T('design.', 'Design.')}</em>
            </h3>
            <p>
              {T(
                'Quiet, dense, fast. I design in the product itself — every screen is a working hypothesis, not a Figma frame. Shadcn-driven systems, hand-tuned.',
                'Ruhig, dicht, schnell. Ich designe direkt im Produkt — jeder Screen ist eine funktionierende Hypothese, kein Figma-Frame. Shadcn-basierte Systeme, von Hand justiert.'
              )}
            </p>
            <div className="stack">
              <span>Tailwind v4</span>
              <span>shadcn/ui</span>
              <span>Motion</span>
              <span>Design systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
