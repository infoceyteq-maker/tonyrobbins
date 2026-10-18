"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { ArrowUpRight, Share2 } from "lucide-react";
import { socialLinks, type SocialCategory } from "@/lib/contact-data";
import BrandIcon from "./BrandIcon";
import Reveal from "../Reveal";

const filters: Array<"All" | SocialCategory> = [
  "All",
  "Social",
  "Video",
  "Professional",
];

export default function SocialGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? socialLinks
        : socialLinks.filter((s) => s.category === filter),
    [filter]
  );

  const countFor = (f: (typeof filters)[number]) =>
    f === "All" ? socialLinks.length : socialLinks.filter((s) => s.category === f).length;

  return (
    <section id="socials" className="scroll-mt-24" aria-label="Social media and platforms">
      <Reveal>
        <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-(--shadow-card) md:p-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700">
              <Share2 className="h-3.5 w-3.5" />
              Social Hub
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy-950 md:text-3xl">
              Connect With Us Online
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
              Follow our channels and professional platforms to stay updated
              with our latest work, services, and digital insights — across
              {` ${socialLinks.length} `}platforms.
            </p>
          </div>

          {/* Filters */}
          <div className="no-print mt-7 flex flex-wrap items-center justify-center gap-1.5">
            <div
              className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1"
              role="tablist"
              aria-label="Filter platforms by category"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    filter === f
                      ? "bg-navy-700 text-white shadow-sm"
                      : "text-slate-600 hover:text-navy-800"
                  }`}
                >
                  {f}
                  <span className={`ml-1.5 tabular-nums ${filter === f ? "text-navy-300" : "text-slate-400"}`}>
                    {countFor(f)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div
            key={filter}
            className="fade-in mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
          >
            {visible.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--brand": `#${social.brandHex}` } as CSSProperties}
                className="group flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-(--shadow-lift)"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--brand)/10 text-(--brand) transition-all duration-300 group-hover:bg-(--brand) group-hover:text-white">
                    <BrandIcon social={social} className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-(--brand)" />
                </div>
                <span className="mt-3.5 text-sm font-bold tracking-tight text-navy-950">
                  {social.name}
                </span>
                <span className="mt-0.5 break-all text-xs text-slate-500">
                  {social.handle}
                </span>
                <span className="mt-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-(--brand)">
                  {social.action}
                </span>
              </a>
            ))}
          </div>

          <p className="mt-7 text-center text-xs text-slate-400">
            All links open in a new tab. Prefer to hire us directly? Find
            Ceyteq on <span className="font-medium text-slate-500">Contra</span>{" "}
            and <span className="font-medium text-slate-500">Fiverr Pro</span>.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
