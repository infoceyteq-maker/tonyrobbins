"use client";

import { useState } from "react";
import { ArrowRight, CalendarRange, CheckCircle2, Flag } from "lucide-react";
import { horizons, phases } from "@/lib/data";
import Reveal from "./Reveal";

export default function Timeline() {
  const [activePhase, setActivePhase] = useState(2);
  const [horizonId, setHorizonId] = useState("30d");
  const horizon = horizons.find((h) => h.id === horizonId) ?? horizons[0];

  return (
    <section id="timeline" className="scroll-mt-24">
      <Reveal>
        <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-(--shadow-card) md:p-10">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-5 border-b border-slate-100 pb-7 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-950 text-lg font-extrabold tracking-tight text-white shadow-lg shadow-navy-900/20">
              04
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-500">
                Pillar Four
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy-950">
                Time Plan &amp; Time Management
              </h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
                Structured 30-day execution sprints and long-term scaling —
                three disciplined 10-day phases, a 15-day review window, then
                3-Month, 6-Month, and 2-Year Pro Plans. Select any phase to
                see exactly what happens inside it.
              </p>
            </div>
            <span className="hidden shrink-0 select-none font-serif text-6xl font-bold leading-none text-slate-100 lg:block">
              04
            </span>
          </div>

          {/* Gantt */}
          <div className="no-print mb-3 hidden md:block" aria-hidden="true">
            <div className="relative h-10">
              {phases.map((p, i) => (
                <button
                  key={p.range}
                  type="button"
                  onClick={() => setActivePhase(i)}
                  aria-label={`Show ${p.range} details`}
                  className="group absolute top-1/2 h-8 -translate-y-1/2 px-0.5"
                  style={{ left: `${p.start}%`, width: `${p.width}%` }}
                >
                  <span
                    className={`bar-grow block h-full w-full rounded-lg transition-colors ${
                      activePhase === i
                        ? "bg-gradient-to-r from-navy-700 to-navy-500 shadow-md shadow-navy-900/25"
                        : "bg-slate-200 group-hover:bg-navy-200"
                    }`}
                    style={{ animationDelay: `${i * 140}ms` }}
                  />
                </button>
              ))}
            </div>
            <div className="relative mt-1 h-5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              <span className="absolute left-0">Day 1</span>
              <span className="absolute" style={{ left: "21%" }}>Day 11</span>
              <span className="absolute" style={{ left: "43%" }}>Day 21</span>
              <span className="absolute" style={{ left: "66%" }}>Day 31</span>
              <span className="absolute right-0">Day 45 · Review Complete</span>
            </div>
          </div>

          {/* Phase cards */}
          <div className="grid gap-4 lg:grid-cols-4" role="tablist" aria-label="Execution phases">
            {phases.map((phase, i) => {
              const isActive = activePhase === i;
              return (
                <button
                  key={phase.range}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActivePhase(i)}
                  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-navy-700 bg-navy-950 text-white shadow-(--shadow-lift)"
                      : "border-slate-200/80 bg-slate-50 hover:border-navy-200 hover:bg-navy-50/60"
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold uppercase tracking-[0.14em] ${
                      isActive ? "text-navy-300" : "text-navy-600"
                    }`}
                  >
                    {phase.range}
                  </span>
                  <span
                    className={`mt-1.5 block font-semibold tracking-tight ${
                      isActive ? "text-white" : "text-navy-950"
                    }`}
                  >
                    {phase.title}
                  </span>
                  <span
                    className={`mt-2 block text-[13px] leading-relaxed ${
                      isActive ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {phase.description}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active phase detail */}
          <div
            key={activePhase}
            className="fade-in mt-5 rounded-2xl border border-navy-100 bg-navy-50/60 p-6"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="font-bold tracking-tight text-navy-950">
                {phases[activePhase].range} — {phases[activePhase].title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                Inside this phase
              </span>
            </div>
            <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {phases[activePhase].bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm leading-relaxed text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy-600" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Horizons */}
          <div className="mt-10 border-t border-slate-100 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <CalendarRange className="h-4.5 w-4.5 text-navy-600" />
                <h3 className="font-bold tracking-tight text-navy-950">
                  Long-Term Pro Plan Horizons
                </h3>
              </div>
              <div
                className="no-print inline-flex flex-wrap gap-1 rounded-full border border-slate-200 bg-slate-50 p-1"
                role="tablist"
                aria-label="Planning horizons"
              >
                {horizons.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    role="tab"
                    aria-selected={horizonId === h.id}
                    onClick={() => setHorizonId(h.id)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      horizonId === h.id
                        ? "bg-navy-700 text-white shadow-sm"
                        : "text-slate-600 hover:text-navy-800"
                    }`}
                  >
                    {h.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              key={horizon.id}
              className="fade-in mt-5 grid gap-6 rounded-2xl bg-slate-50 p-6 md:grid-cols-5"
            >
              <div className="md:col-span-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-500">
                  {horizon.label}
                </p>
                <h4 className="mt-1.5 text-lg font-bold tracking-tight text-navy-950">
                  {horizon.headline}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {horizon.focus}
                </p>
              </div>
              <ul className="space-y-2.5 md:col-span-2">
                {horizon.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm leading-relaxed text-slate-700"
                  >
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-navy-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcome strip */}
          <div className="mt-7 flex items-start gap-3 rounded-xl bg-navy-950 px-5 py-4">
            <Flag className="mt-0.5 h-4.5 w-4.5 shrink-0 text-navy-300" />
            <p className="text-sm font-medium leading-relaxed text-slate-200">
              Outcome: full campaign live within 30 days, reviewed over a
              dedicated 15-day window, then scaled through structured
              3-Month, 6-Month, and 2-Year Pro Plans.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
