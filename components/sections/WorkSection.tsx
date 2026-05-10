'use client';

import { useT } from '@/components/Providers';
import ScreenshotGallery from '@/components/common/ScreenshotGallery';

export default function WorkSection() {
  const T = useT();

  const rtShots = [
    { src: '/images/projects/reselltrack/hero.png',    alt: 'ResellTrack — Hero',          label: T('Landing', 'Start') },
    { src: '/images/projects/reselltrack/reality.png', alt: 'ResellTrack — Reality check', label: T('Reality', 'Realität') },
    { src: '/images/projects/reselltrack/pricing.png', alt: 'ResellTrack — Pricing',       label: T('Pricing', 'Preise') },
    { src: '/images/projects/reselltrack/cta.png',     alt: 'ResellTrack — Sign-up',       label: T('Sign-up', 'Start') },
  ];

  const klShots = [
    { src: '/images/projects/kalaie-ledger/deals.png',   alt: 'Kalaie Ledger — Deals',       label: 'Deals' },
    { src: '/images/projects/kalaie-ledger/reports.png', alt: 'Kalaie Ledger — Reports',     label: T('Reports', 'Berichte') },
    { src: '/images/projects/kalaie-ledger/master.png',  alt: 'Kalaie Ledger — Master data', label: T('Master', 'Stammdaten') },
    { src: '/images/projects/kalaie-ledger/login.png',   alt: 'Kalaie Ledger — Sign-in',     label: T('Sign-in', 'Anmelden') },
  ];

  return (
    <section className="block" id="work">
      <div className="shell">
        <div className="block-head reveal">
          <div className="num">
            <span className="n">01</span> · {T('Selected Work', 'Ausgewählte Arbeiten')}
          </div>
          <div>
            <h2 className="display">
              {T('Two products, ', 'Zwei Produkte, ')}<em>{T('one philosophy', 'eine Haltung')}</em>.
            </h2>
            <p className="sub">
              {T(
                'Independent SaaS, full-stack on Next.js + Supabase, designed and engineered solo. Each one is a long bet on a slow, durable problem.',
                'Unabhängige SaaS, Full-Stack auf Next.js + Supabase, allein entworfen und entwickelt. Beide sind langfristige Wetten auf langsame, langlebige Probleme.'
              )}
            </p>
          </div>
        </div>

        <div className="work-list">
          {/* ResellTrack */}
          <article className="work-card reveal">
            <div className="left">
              <div className="top-row">
                <div className="meta">№ 01 — 2025 · {T('E-Commerce Tools', 'E-Commerce-Tools')}</div>
                <span className="status-chip">
                  <span className="dot" />{T('In Development', 'In Entwicklung')}
                </span>
              </div>
              <h3 className="display">ResellTrack.</h3>
              <p className="tag-line">
                {T(
                  'A profit tracker for resellers — Vinted, eBay, Etsy, all in one ledger.',
                  'Gewinn-Tracker für Reseller — Vinted, eBay, Etsy, alles in einem System.'
                )}
              </p>
              <p className="desc">
                {T(
                  'Inventory, real profit after fees and taxes, exports — without spreadsheets. Free forever for ten items, Pro for serious sellers. Built solo: schema, auth, billing, dashboard, the whole stack.',
                  'Lagerbestand, echter Gewinn nach Gebühren und Steuern, Exporte — ohne Excel. Free dauerhaft für zehn Artikel, Pro für ernsthafte Verkäufer. Solo gebaut: Schema, Auth, Billing, Dashboard, der ganze Stack.'
                )}
              </p>
              <div className="stat-row">
                <div className="stat">
                  <span className="k">{T('Tier', 'Plan')}</span>
                  <span className="v">Free / Pro</span>
                </div>
                <div className="stat">
                  <span className="k">{T('Items', 'Artikel')}</span>
                  <span className="v">10→∞</span>
                </div>
                <div className="stat">
                  <span className="k">{T('Export', 'Export')}</span>
                  <span className="v">CSV · {T('Tax', 'Steuer')}</span>
                </div>
              </div>
              <div className="work-cta-row">
                <a href="/projects/reselltrack" className="read" data-cursor-text={T('Open case', 'Lesen')}>
                  {T('Read case study', 'Case Study lesen')} <span>→</span>
                </a>
                <span className="meta">Next.js · Supabase · Stripe</span>
              </div>
            </div>
            <ScreenshotGallery shots={rtShots} url="reselltrack.com" />
          </article>

          {/* Kalaie Ledger — mirrored (screenshot left, text right on desktop) */}
          <article className="work-card reveal">
            <ScreenshotGallery shots={klShots} url="ledger.kalaie.com" />
            <div className="left">
                <div className="top-row">
                  <div className="meta">№ 02 — 2025 · {T('FinTech / Sales Ops', 'FinTech / Vertrieb')}</div>
                  <span className="status-chip">
                    <span className="dot" />{T('In Development', 'In Entwicklung')}
                  </span>
                </div>
                <h3 className="display">Kalaie Ledger.</h3>
                <p className="tag-line">
                  {T(
                    'A sales & receivables platform — deals, dunning, reports, master data.',
                    'Vertriebs- & Forderungsplattform — Deals, Inkasso, Berichte, Stammdaten.'
                  )}
                </p>
                <p className="desc">
                  {T(
                    'Six modules: deal pipeline, overdue tracking with dunning, twelve-month revenue charts, CSV/Excel import, team chat, and master data for platforms, products, closers and partners. Multi-tenant, role-based, native PDF.',
                    'Sechs Module: Deal-Pipeline, Überfälligkeiten mit Mahnwesen, 12-Monats-Umsatzdiagramme, CSV-/Excel-Import, Team-Chat und Stammdaten für Plattformen, Produkte, Closer und Vertriebspartner. Multi-Tenant, rollenbasiert, native PDFs.'
                  )}
                </p>
                <div className="stat-row">
                  <div className="stat">
                    <span className="k">{T('Modules', 'Module')}</span>
                    <span className="v">{T('Six', 'Sechs')}</span>
                  </div>
                  <div className="stat">
                    <span className="k">{T('Tenancy', 'Mandanten')}</span>
                    <span className="v">Multi-Org</span>
                  </div>
                  <div className="stat">
                    <span className="k">{T('Roles', 'Rollen')}</span>
                    <span className="v">Admin · Closer</span>
                  </div>
                </div>
                <div className="work-cta-row">
                  <a href="/projects/kalaie-ledger" className="read" data-cursor-text={T('Open case', 'Lesen')}>
                    {T('Read case study', 'Case Study lesen')} <span>→</span>
                  </a>
                  <span className="meta">Next.js · Tailwind v4 · Recharts</span>
                </div>
              </div>
          </article>
        </div>
      </div>
    </section>
  );
}
