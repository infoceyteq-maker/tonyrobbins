"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  ClipboardList,
  Mail,
  PenLine,
  Printer,
  Rocket,
} from "lucide-react";
import Reveal from "./Reveal";

const nextSteps = [
  {
    icon: PenLine,
    step: "Step 1",
    title: "Accept & Kickoff",
    detail:
      "You accept below, we confirm in writing, and schedule the kickoff session to align on access, priorities, and interviews.",
  },
  {
    icon: ClipboardList,
    step: "Step 2",
    title: "Days 1–10: Research Sprint",
    detail:
      "Pillar 01 research, platform optimization, and automation setup — closing with a findings review and your itemized budgets (5.1 & 5.2).",
  },
  {
    icon: Rocket,
    step: "Step 3",
    title: "Days 11–30: Build & Launch",
    detail:
      "Materials production and campaign planning (Days 11–20), then full campaign execution and event focus (Days 21–30).",
  },
];

export default function Accept() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const today = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    []
  );

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const formValid = name.trim().length >= 2 && emailValid && agreed;
  const showError = touched && !formValid;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!formValid) return;
    setSubmitted(true);
  };

  const mailtoHref = `mailto:?subject=${encodeURIComponent(
    "Proposal Accepted — Personal Brand & National PR Campaign"
  )}&body=${encodeURIComponent(
    `I, ${name}${company ? ` (${company})` : ""}, accept the Ceyteq Digital Solutions proposal "Personal Brand & National PR Campaign" (5-Pillar Framework) and authorize the team to begin Pillar 01: Research & Market Intelligence.\n\nName: ${name}\nEmail: ${email}\nCompany / Organization: ${company || "—"}\nDate of acceptance: ${today}`
  )}`;

  return (
    <section id="accept" className="scroll-mt-24">
      {/* What happens next */}
      <Reveal>
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {nextSteps.map((s) => (
            <article
              key={s.step}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-(--shadow-card)"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-500">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-3.5 font-semibold tracking-tight text-navy-950">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {s.detail}
              </p>
            </article>
          ))}
        </div>
      </Reveal>

      {/* CTA / Acceptance panel */}
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-white shadow-(--shadow-lift)">
          <div className="bg-navy-grid absolute inset-0" aria-hidden="true" />
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-navy-600/25 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-navy-500/20 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-2">
            {/* Copy */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-300">
                Call to Action
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Ready to Build Your National Voice?
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-slate-300">
                Let&apos;s activate this 5-pillar framework and secure rapid,
                measurable traction in your first 30 days — research first,
                then optimized platforms, a clear brand, and a full-scale
                U.S. media and keynote campaign.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "30–60 day rapid traction window",
                  "Itemized budgets delivered at the Day-10 findings review",
                  "15-day review window before any long-term commitment",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy-300" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="no-print mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Printer className="h-4 w-4" />
                  Print / Save as PDF
                </button>
              </div>
            </div>

            {/* Form / Success */}
            <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur-md md:p-7">
              {!submitted ? (
                <form onSubmit={onSubmit} noValidate>
                  <h3 className="font-bold tracking-tight">
                    Accept the Proposal
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-300">
                    Complete the acceptance to authorize{" "}
                    <span className="font-medium text-white">
                      Pillar 01 — Research &amp; Market Intelligence
                    </span>
                    .
                  </p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <label htmlFor="accept-name" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Full Name *
                      </label>
                      <input
                        id="accept-name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-navy-400 focus:ring-2 focus:ring-navy-500/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="accept-email" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Email Address *
                      </label>
                      <input
                        id="accept-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-navy-400 focus:ring-2 focus:ring-navy-500/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="accept-company" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Company / Organization
                      </label>
                      <input
                        id="accept-company"
                        type="text"
                        autoComplete="organization"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company name (optional)"
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-navy-400 focus:ring-2 focus:ring-navy-500/40"
                      />
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/12 bg-navy-950/40 p-3.5">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-[#3363e0]"
                      />
                      <span className="text-[13px] leading-relaxed text-slate-300">
                        I accept this proposal and authorize Ceyteq Digital
                        Solutions to begin{" "}
                        <span className="font-medium text-white">
                          Pillar 01: Research &amp; Market Intelligence
                        </span>
                        , with itemized budgets (5.1 &amp; 5.2) to be
                        presented at the Day-10 findings review. *
                      </span>
                    </label>

                    {showError && (
                      <p className="fade-in rounded-lg border border-red-400/30 bg-red-500/10 px-3.5 py-2.5 text-[13px] text-red-200">
                        Please add your name, a valid email, and confirm the
                        authorization to continue.
                      </p>
                    )}

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-950/40 transition-all hover:-translate-y-0.5 hover:bg-navy-400"
                    >
                      Accept Proposal &amp; Begin Research
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-center text-[11px] text-slate-400">
                      Prepared by Ceyteq Digital Solutions (Samir) · October 2026
                    </p>
                  </div>
                </form>
              ) : (
                <div className="fade-in">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
                    <CalendarCheck2 className="h-6 w-6 text-emerald-300" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight">
                    Proposal Accepted — Thank You, {name.split(" ")[0]}.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Your acceptance of the{" "}
                    <span className="font-medium text-white">
                      Personal Brand &amp; National PR Campaign
                    </span>{" "}
                    proposal is recorded for {today}. Pillar 01 — Research
                    &amp; Market Intelligence — is authorized to begin.
                  </p>
                  <dl className="mt-5 space-y-2.5 rounded-xl border border-white/12 bg-navy-950/50 p-4 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-400">Accepted by</dt>
                      <dd className="font-medium text-white">{name}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-400">Confirmation email</dt>
                      <dd className="break-all font-medium text-white">{email}</dd>
                    </div>
                    {company && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-slate-400">Organization</dt>
                        <dd className="font-medium text-white">{company}</dd>
                      </div>
                    )}
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-400">Next milestone</dt>
                      <dd className="font-medium text-white">Day-10 Findings Review</dd>
                    </div>
                  </dl>
                  <div className="no-print mt-5 flex flex-col gap-2.5">
                    <a
                      href={mailtoHref}
                      className="flex items-center justify-center gap-2 rounded-xl bg-navy-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-400"
                    >
                      <Mail className="h-4 w-4" />
                      Send Confirmation to Ceyteq
                    </a>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <Printer className="h-4 w-4" />
                      Print My Copy of the Proposal
                    </button>
                  </div>
                  <p className="mt-4 text-[12px] leading-relaxed text-slate-400">
                    Next step: our kickoff session to align on platform access,
                    interview scheduling, and research priorities for Days
                    1–10.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
