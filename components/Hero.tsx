"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CalendarClock,
  ChevronDown,
  FileText,
  Lock,
  Target,
} from "lucide-react";

function useCounter(target: number, duration = 1200, start = true) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function Stat({
  value,
  suffix,
  label,
  started,
}: {
  value: number;
  suffix?: string;
  label: string;
  started: boolean;
}) {
  const n = useCounter(value, 1300, started);
  return (
    <div className="px-5 py-4 sm:px-7">
      <div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {n}
        {suffix && <span className="text-navy-300">{suffix}</span>}
      </div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
      {/* Backdrop image + overlays */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-stage.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/55 to-navy-950" />
        <div className="bg-navy-grid absolute inset-0" />
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-navy-600/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-navy-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
        {/* Meta row */}
        <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5 font-medium text-slate-300">
            <FileText className="h-3.5 w-3.5 text-navy-300" />
            Prepared by Samir — Ceyteq Digital Solutions
          </span>
          <span className="hidden h-3 w-px bg-white/20 sm:block" />
          <span>October 2026</span>
          <span className="hidden h-3 w-px bg-white/20 sm:block" />
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-navy-300" />
            Confidential Proposal
          </span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-navy-400/30 bg-navy-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-200">
          <span className="h-1.5 w-1.5 rounded-full bg-navy-300" />
          Ceyteq Digital Solutions • Strategic PR &amp; Brand Proposal
        </div>

        <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Personal Brand &amp;{" "}
          <span className="bg-gradient-to-r from-navy-200 via-navy-300 to-white bg-clip-text text-transparent">
            National PR Campaign
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Positioning a four-time entrepreneur, consumer health CEO, Kellogg
          MBA, and AI strategist as a nationally recognized voice in
          entrepreneurship, innovation, and leadership.
        </p>

        {/* Positioning statement */}
        <div className="mt-7 max-w-2xl border-l-2 border-navy-400 pl-5">
          <p className="font-serif text-xl italic leading-snug text-white sm:text-2xl">
            &ldquo;Tony Robbins meets Guy Kawasaki&rdquo;
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
            — through the perspective of a Black serial entrepreneur who has
            built, led, and advised companies across markets.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-9 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-sm">
            <Target className="h-4 w-4 text-navy-300" />
            Target: U.S. Media &amp; Keynote Circuit
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-sm">
            <CalendarClock className="h-4 w-4 text-navy-300" />
            Execution: 30–60 Day Rapid Traction
          </span>
        </div>

        {/* CTAs */}
        <div className="no-print mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#accept"
            className="inline-flex items-center gap-2 rounded-xl bg-navy-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-navy-950/50 transition-all hover:-translate-y-0.5 hover:bg-navy-500"
          >
            Accept Proposal &amp; Begin Research
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#vision"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Review the 5-Pillar Plan
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>

        {/* Stats strip */}
        <div
          ref={statsRef}
          className="mt-14 grid grid-cols-2 divide-white/10 rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur-md sm:grid-cols-4 sm:divide-x"
        >
          <Stat value={4} suffix="×" label="Entrepreneur" started={started} />
          <Stat value={5} label="Core Pillars" started={started} />
          <Stat value={30} suffix="-Day" label="Execution Sprint" started={started} />
          <Stat value={15} suffix="-Day" label="Review Window" started={started} />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Prepared for a U.S.-based consumer health CEO &amp; AI strategist
          (Kellogg MBA) building a national voice across entrepreneurship,
          innovation, and leadership.
        </p>
      </div>
    </section>
  );
}
