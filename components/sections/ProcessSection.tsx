'use client';

import { useT } from '@/components/Providers';

export default function ProcessSection() {
  const T = useT();

  const phases = [
    {
      week: T('Week 01', 'Woche 01'),
      n: '01',
      title: T('Frame', 'Rahmen'),
      body: T(
        'A short, intense discovery. We name the problem, the user, and the one outcome the product has to earn.',
        'Kurze, intensive Discovery. Wir benennen Problem, Nutzer und das eine Ergebnis, das das Produkt liefern muss.'
      ),
    },
    {
      week: T('Week 02–03', 'Woche 02–03'),
      n: '02',
      title: T('Architect', 'Architektur'),
      body: T(
        'Schema first, surface second. Data model, auth, billing skeleton — the parts that get expensive to change later.',
        'Erst Schema, dann Oberfläche. Datenmodell, Auth, Billing-Skelett — die Teile, deren Änderung später teuer wird.'
      ),
    },
    {
      week: T('Week 04–08', 'Woche 04–08'),
      n: '03',
      title: T('Build', 'Bauen'),
      body: T(
        'Two-week sprints, weekly demos. The product ships internally before it ships externally — every release is dogfooded.',
        'Zwei-Wochen-Sprints, wöchentliche Demos. Intern wird vor extern ausgeliefert — jedes Release wird selbst genutzt.'
      ),
    },
    {
      week: T('Week 09→', 'Woche 09→'),
      n: '04',
      title: T('Operate', 'Betrieb'),
      body: T(
        'Quiet support, analytics, retention. I stay attached to the product after launch — most of the value lives there.',
        'Stiller Support, Analytics, Retention. Nach dem Launch bleibe ich am Produkt — dort entsteht der meiste Wert.'
      ),
    },
  ];

  return (
    <section className="block" id="process">
      <div className="shell">
        <div className="block-head reveal">
          <div className="num">
            <span className="n">03</span> · {T('Process', 'Prozess')}
          </div>
          <div>
            <h2 className="display">
              {T('From idea to ', 'Von der Idee zum ')}
              <em>{T('operating product', 'laufenden Produkt')}</em>
              {T(' in eight weeks.', ' in acht Wochen.')}
            </h2>
            <p className="sub">
              {T(
                'A predictable rhythm built from shipping eight products solo. Slow at the start where the cost of being wrong is highest; fast in the middle where momentum compounds.',
                'Ein verlässlicher Rhythmus aus acht solo ausgelieferten Produkten. Langsam am Anfang, wo Fehler am teuersten sind; schnell in der Mitte, wo sich Momentum aufbaut.'
              )}
            </p>
          </div>
        </div>

        <div className="process reveal-stagger">
          {phases.map(p => (
            <div className="phase" key={p.n}>
              <div className="head">
                <span className="week">{p.week}</span>
                <span className="num">{p.n}</span>
              </div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
