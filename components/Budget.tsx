import {
  BadgeCheck,
  CheckCircle2,
  Flag,
  Gauge,
  Globe2,
  ReceiptText,
  Rocket,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";

const principles = [
  {
    icon: ReceiptText,
    title: "Itemized After Research",
    detail:
      "Exact figures are quoted only after Pillar 01 — scoped against your real platforms, goals, and markets, never guesswork.",
  },
  {
    icon: Gauge,
    title: "Low Cost, High Efficiency",
    detail:
      "Budgets are engineered for maximum output per dollar — lean operations, automation-first, no bloated overheads.",
  },
  {
    icon: Globe2,
    title: "Global-Reach Design",
    detail:
      "Every line item is assessed against one test: how much qualified national and global reach it buys.",
  },
];

export default function Budget() {
  return (
    <section id="investment" className="scroll-mt-24">
      <Reveal>
        <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-(--shadow-card) md:p-10">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-5 border-b border-slate-100 pb-7 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-950 text-lg font-extrabold tracking-tight text-white shadow-lg shadow-navy-900/20">
              05
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-500">
                Pillar Five
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy-950">
                Budget Plan &amp; Investment Structure
              </h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
                A cost-effective global scaling architecture in two stages: a
                focused first-month startup and optimization budget, followed
                by an integrated long-term Pro Budget built for efficient
                reach.
              </p>
            </div>
            <span className="hidden shrink-0 select-none font-serif text-6xl font-bold leading-none text-slate-100 lg:block">
              05
            </span>
          </div>

          {/* Two budget cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Stage 1 */}
            <Reveal>
              <article className="relative h-full overflow-hidden rounded-2xl bg-navy-950 p-7 text-white shadow-(--shadow-lift)">
                <div className="bg-navy-grid absolute inset-0" aria-hidden="true" />
                <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-navy-600/30 blur-3xl" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-200">
                      <Rocket className="h-3.5 w-3.5" />
                      Stage 1 · Month One
                    </span>
                    <span className="font-mono text-xs font-bold text-navy-300">5.1</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight">
                    Initial First-Month Startup &amp; Optimization Budget
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    Provided immediately following the research phase. Covers
                    complete platform optimizations, foundational setup,
                    operational workflows, and initial ad campaign
                    implementation for month one.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Complete platform optimization & redesign scope",
                      "Foundational brand, tools & automation setup",
                      "Operational workflow implementation",
                      "Initial ad campaign implementation (Month 1)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-white/10 pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Phase 1 Investment Scope · Quoted at Day-10 Findings Review
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Stage 2 */}
            <Reveal delay={90}>
              <article className="relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-navy-50 p-7 shadow-(--shadow-card)">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-700 shadow-sm">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Stage 2 · Pro Plans
                  </span>
                  <span className="font-mono text-xs font-bold text-navy-500">5.2</span>
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-navy-950">
                  Cost-Effective Long-Term Pro Budget
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                  Integrated 3-month scaling budget covering agency service
                  fees and ad campaign expenditures. Designed with a low-cost,
                  high-efficiency approach to maximize global reach — and
                  extendable into 6-Month and 2-Year horizons.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "Agency service fees across all 5 pillars",
                    "Ad campaign expenditures, tracked & optimized",
                    "Low-cost, high-efficiency global reach model",
                    "Confirmed after the 15-day post-launch review",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-navy-100 pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-600">
                  Extended Growth Roadmap · 3 / 6 / 24-Month Horizons
                </div>
              </article>
            </Reveal>
          </div>

          {/* Principles */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
                  <p.icon className="h-5 w-5 text-navy-600" />
                  <h4 className="mt-2.5 text-sm font-semibold text-navy-950">{p.title}</h4>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-navy-100 bg-navy-50/70 px-5 py-4">
            <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-navy-600" />
            <p className="text-sm leading-relaxed text-slate-700">
              <span className="font-semibold text-navy-900">How quoting works:</span>{" "}
              accept this proposal and we begin with research. At the Day-10
              findings review you receive the fully itemized first-month
              budget (5.1) and the integrated 3-month Pro Budget (5.2) —
              scoped to evidence, with no obligation beyond the scope you
              approve.
            </p>
          </div>

          {/* Outcome strip */}
          <div className="mt-7 flex items-start gap-3 rounded-xl bg-navy-950 px-5 py-4">
            <Flag className="mt-0.5 h-4.5 w-4.5 shrink-0 text-navy-300" />
            <p className="text-sm font-medium leading-relaxed text-slate-200">
              Outcome: a two-stage investment structure — a lean first-month
              launch budget, then a cost-effective Pro Budget engineered for
              maximum global reach per dollar.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
