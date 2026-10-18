"use client";

import Image from "next/image";
import { Building2, ContactRound, Globe, Mail, Phone, Rocket, Send, Store } from "lucide-react";
import { ceyteq, socialLinks } from "@/lib/contact-data";
import { WhatsAppGlyph } from "./ContactHeader";

function downloadVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${ceyteq.company}`,
    `ORG:${ceyteq.company}`,
    `TITLE:${ceyteq.tagline}`,
    "TEL;TYPE=CELL,VOICE:+94788607143",
    "TEL;TYPE=CELL:+94768607143",
    `EMAIL;TYPE=WORK:${ceyteq.email}`,
    `URL:${ceyteq.websiteUrl}`,
    ...socialLinks.map((s) => `URL;TYPE=${s.name.replace(/[^A-Za-z]/g, "")}:${s.url}`),
    "END:VCARD",
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ceyteq-ceylon-technology.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const audiences = [
  { icon: Rocket, label: "Startups" },
  { icon: Store, label: "SMEs" },
  { icon: Building2, label: "Corporate Organizations" },
];

export default function ContactHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="bg-navy-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950" />
        <div className="absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-navy-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 text-center md:px-8 md:pb-20 md:pt-40">
        {/* Official logo lockup on a light plate (artwork is composed for light backgrounds) */}
        <div className="mx-auto w-fit max-w-full rounded-3xl bg-white px-6 py-4 shadow-2xl shadow-black/50 ring-1 ring-white/60 sm:px-9 sm:py-5">
          <Image
            src="/images/logo.png"
            alt="Ceyteq – Ceylon Technology · Empowering Digital Evolution"
            width={1400}
            height={603}
            priority
            sizes="(min-width: 640px) 400px, 300px"
            className="h-auto w-[280px] sm:w-[400px]"
          />
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy-400/30 bg-navy-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-200">
          <span className="h-1.5 w-1.5 rounded-full bg-navy-300" />
          {ceyteq.company}
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Get in Touch{" "}
          <span className="bg-gradient-to-r from-navy-200 via-navy-300 to-white bg-clip-text text-transparent">
            With Us
          </span>
        </h1>

        <p className="mt-5 font-serif text-xl italic text-navy-100 sm:text-2xl">
          &ldquo;{ceyteq.tagline}&rdquo;
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          Whether you&apos;re a startup, SME, or corporate organization,
          let&apos;s build a strong brand presence together — through digital,
          advertising, and printing solutions.
        </p>

        {/* Audience chips */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {audiences.map((a) => (
            <span
              key={a.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-slate-200"
            >
              <a.icon className="h-3.5 w-3.5 text-navy-300" />
              {a.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="no-print mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#message"
            className="inline-flex items-center gap-2 rounded-xl bg-navy-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-navy-950/50 transition-all hover:-translate-y-0.5 hover:bg-navy-500"
          >
            <Send className="h-4 w-4" />
            Send a Message
          </a>
          <a
            href={ceyteq.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1FA855] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-navy-950/50 transition-all hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-navy-950"
          >
            <WhatsAppGlyph className="h-4.5 w-4.5" />
            Chat on WhatsApp
          </a>
          <button
            type="button"
            onClick={downloadVCard}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <ContactRound className="h-4 w-4" />
            Save Our Contact
          </button>
        </div>

        {/* Quick contact strip */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/12 text-left backdrop-blur-md sm:grid-cols-3">
          <a
            href={ceyteq.hotlineHref}
            className="flex items-center gap-3.5 bg-navy-950/70 px-5 py-4 transition-colors hover:bg-navy-900/80"
          >
            <Phone className="h-5 w-5 shrink-0 text-navy-300" />
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Hotline / WhatsApp
              </span>
              <span className="block text-sm font-semibold text-white">
                {ceyteq.hotlineDisplay}
              </span>
            </span>
          </a>
          <a
            href={`mailto:${ceyteq.email}`}
            className="flex items-center gap-3.5 bg-navy-950/70 px-5 py-4 transition-colors hover:bg-navy-900/80"
          >
            <Mail className="h-5 w-5 shrink-0 text-navy-300" />
            <span className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Email Us
              </span>
              <span className="block truncate text-sm font-semibold text-white">
                {ceyteq.email}
              </span>
            </span>
          </a>
          <a
            href={ceyteq.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 bg-navy-950/70 px-5 py-4 transition-colors hover:bg-navy-900/80"
          >
            <Globe className="h-5 w-5 shrink-0 text-navy-300" />
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Official Website
              </span>
              <span className="block text-sm font-semibold text-white">
                {ceyteq.websiteDisplay}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
