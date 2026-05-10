'use client';

export default function MarqueeSection() {
  const items = [
    'Next.js 16', 'TypeScript', 'Supabase', 'Postgres', 'Stripe',
    'Tailwind v4', 'shadcn/ui', 'React PDF', 'Recharts', 'Resend', 'Vercel', 'Zod',
  ];
  const block = (
    <div className="item">
      {items.map((x, i) => <span key={i}>{x}</span>)}
    </div>
  );
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {block}
        {block}
      </div>
    </section>
  );
}
