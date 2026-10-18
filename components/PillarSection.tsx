"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, Flag } from "lucide-react";
import type { Pillar, SubItem } from "@/lib/data";
import Reveal from "./Reveal";

function Deliverables({ items, open }: { items: string[]; open: boolean }) {
  return (
    <div
      className={`grid transition-all duration-300 ease-out ${
        open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className="rounded-lg border border-navy-100 bg-white p-3.5">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-navy-600">
            Deliverables
          </p>
          <ul className="mt-2 space-y-1.5">
            {items.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2 text-[13px] leading-relaxed text-slate-600"
              >
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy-500" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SubCard({
  item,
  defaultOpen,
}: {
  item: SubItem;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <article className="group h-full rounded-2xl border border-slate-200/70 bg-slate-50 p-5 transition-all duration-300 hover:border-navy-200 hover:bg-navy-50/50 hover:shadow-(--shadow-card)">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex rounded-md bg-navy-900 px-2 py-0.5 font-mono text-[11px] font-bold tracking-wide text-white">
          {item.code}
        </span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="no-print inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-navy-700 transition-colors hover:border-navy-300 hover:bg-navy-50"
        >
          Deliverables
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <h3 className="mt-3 font-semibold tracking-tight text-navy-950">
        {item.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
        {item.description}
      </p>
      <Deliverables items={item.deliverables} open={open} />
    </article>
  );
}

function ListRow({ item, defaultOpen }: { item: SubItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <article className="rounded-2xl border border-slate-200/70 bg-slate-50 p-5 transition-all duration-300 hover:border-navy-200 hover:bg-navy-50/50 hover:shadow-(--shadow-card) sm:p-6">
      <div className="flex items-start gap-4">
        <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-mono text-xs font-bold text-white sm:flex">
          {item.code}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className="font-semibold tracking-tight text-navy-950">
              <span className="mr-2 font-mono text-xs font-bold text-navy-500 sm:hidden">
                {item.code}
              </span>
              {item.title}
            </h3>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="no-print inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-navy-700 transition-colors hover:border-navy-300 hover:bg-navy-50"
            >
              Deliverables
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            {item.description}
          </p>
          <Deliverables items={item.deliverables} open={open} />
        </div>
      </div>
    </article>
  );
}

export default function PillarSection({ pillar }: { pillar: Pillar }) {
  return (
    <section id={pillar.id} className="scroll-mt-24">
      <Reveal>
        <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-(--shadow-card) md:p-10">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-5 border-b border-slate-100 pb-7 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-950 text-lg font-extrabold tracking-tight text-white shadow-lg shadow-navy-900/20">
              {pillar.number}
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-500">
                {pillar.eyebrow}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy-950">
                {pillar.title}
              </h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
                {pillar.summary}
              </p>
            </div>
            <span className="hidden shrink-0 select-none font-serif text-6xl font-bold leading-none text-slate-100 lg:block">
              {pillar.number}
            </span>
          </div>

          {/* Body by layout */}
          {pillar.layout === "grid-2" && (
            <div className="grid gap-5 md:grid-cols-2">
              {pillar.items.map((item, i) => (
                <Reveal
                  key={item.code}
                  delay={i * 70}
                  className={
                    i === pillar.items.length - 1 && pillar.items.length % 2 === 1
                      ? "md:col-span-2"
                      : ""
                  }
                >
                  <SubCard item={item} defaultOpen={i === 0} />
                </Reveal>
              ))}
            </div>
          )}

          {pillar.layout === "grid-3" && (
            <div className="grid gap-5 md:grid-cols-3">
              {pillar.items.map((item, i) => (
                <Reveal key={item.code} delay={i * 70}>
                  <SubCard item={item} defaultOpen={i === 0} />
                </Reveal>
              ))}
            </div>
          )}

          {pillar.layout === "list" && (
            <div className="space-y-4">
              {pillar.items.map((item, i) => (
                <Reveal key={item.code} delay={i * 70}>
                  <ListRow item={item} defaultOpen={i === 0} />
                </Reveal>
              ))}
            </div>
          )}

          {/* Outcome strip */}
          <div className="mt-7 flex items-start gap-3 rounded-xl bg-navy-950 px-5 py-4">
            <Flag className="mt-0.5 h-4.5 w-4.5 shrink-0 text-navy-300" />
            <p className="text-sm font-medium leading-relaxed text-slate-200">
              {pillar.outcome}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
