'use client';

import Image from 'next/image';
import { useT } from '@/components/Providers';

export default function PhilosophySection() {
  const T = useT();
  return (
    <section className="philosophy" id="philosophy">
      <div className="shell">
        <div className="phil-grid">
          <div className="phil-photo reveal">
            <Image
              src="/images/amir.png"
              alt="Amir Kalaie portrait"
              fill
              sizes="(max-width: 880px) 100vw, 45vw"
              style={{ objectFit: 'cover', objectPosition: '50% 22%' }}
            />
            <div className="stamp">A. Kalaie · Berlin · MMXXVI</div>
          </div>

          <div className="phil-text reveal-stagger">
            <div className="label tech-label">
              <span className="bracket-l">[</span>— {T('On principle', 'Über Prinzipien')}<span className="bracket-r">]</span>
            </div>
            <h3 className="display" style={{ marginTop: 24 }}>
              {T('I think in ', 'Ich denke in ')}<em>{T('systems.', 'Systemen.')}</em>
              <br />
              {T('I build in ', 'Ich baue in ')}<em>{T('sprints.', 'Sprints.')}</em>
            </h3>
            <p>
              {T(
                "I'm a full-stack product engineer based in Berlin, working internationally. I build software that has to last — accounting systems, reseller infrastructure, the kind of products people use every day for years.",
                'Ich bin Full-Stack-Product-Engineer in Berlin und arbeite international. Ich baue Software, die halten muss — Buchhaltungssysteme, Reseller-Infrastruktur, die Art Produkte, die Menschen jahrelang täglich nutzen.'
              )}
            </p>
            <p>
              {T(
                "What I care about is the second visit. The first one is a marketing problem; the second one is an engineering problem, a design problem, and a respect-for-the-user problem all at once. That's where I want my work to live.",
                'Mir geht es um den zweiten Besuch. Der erste ist ein Marketing-Problem; der zweite ist Engineering, Design und Respekt vor dem Nutzer in einem. Dort soll meine Arbeit leben.'
              )}
            </p>
            <div className="principles">
              <div className="pr">
                <span className="ix">i.</span>
                <span className="body">
                  <b>{T('Clarity over complexity.', 'Klarheit vor Komplexität.')}</b>{' '}
                  {T(
                    "If a feature can't be named in one sentence, it isn't ready to be built.",
                    'Wenn ein Feature nicht in einem Satz benennbar ist, ist es nicht bereit gebaut zu werden.'
                  )}
                </span>
              </div>
              <div className="pr">
                <span className="ix">ii.</span>
                <span className="body">
                  <b>{T('Shipping over perfection.', 'Ausliefern vor Perfektion.')}</b>{' '}
                  {T(
                    'Software earns its quality after launch, not before.',
                    'Software verdient sich Qualität nach dem Launch, nicht davor.'
                  )}
                </span>
              </div>
              <div className="pr">
                <span className="ix">iii.</span>
                <span className="body">
                  <b>{T('Product before code.', 'Produkt vor Code.')}</b>{' '}
                  {T(
                    "Every line answers a user question — or it shouldn't be there.",
                    'Jede Zeile beantwortet eine Nutzerfrage — sonst gehört sie da nicht hin.'
                  )}
                </span>
              </div>
              <div className="pr">
                <span className="ix">iv.</span>
                <span className="body">
                  <b>{T('Maintainability is a feature.', 'Wartbarkeit ist ein Feature.')}</b>{' '}
                  {T(
                    "The software you build today is the software you'll maintain at 2 a.m.",
                    'Die Software von heute ist die Software, die man um 2 Uhr nachts wartet.'
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
