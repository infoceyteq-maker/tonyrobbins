"use client";

import { useState, type ComponentType } from "react";
import { Check, Copy, ExternalLink, Globe, Mail, Phone, Smartphone } from "lucide-react";
import { ceyteq } from "@/lib/contact-data";
import Reveal from "../Reveal";
import { WhatsAppGlyph } from "./ContactHeader";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
        copied
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : "border-slate-200 bg-white text-navy-700 hover:border-navy-300 hover:bg-navy-50"
      }`}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

type Card = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  value: string;
  note: string;
  copyValue?: string;
  actions: React.ReactNode;
};

const primaryBtn =
  "inline-flex items-center gap-1.5 rounded-full bg-navy-700 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-navy-600";
const ghostBtn =
  "inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy-700 transition-colors hover:border-navy-300 hover:bg-navy-50";

export default function DirectCards() {
  const cards: Card[] = [
    {
      icon: Phone,
      title: "Hotline / WhatsApp",
      value: ceyteq.hotlineDisplay,
      note: "Fastest response — call or start a WhatsApp chat.",
      copyValue: "+94788607143",
      actions: (
        <>
          <a href={ceyteq.hotlineHref} className={primaryBtn}>
            <Phone className="h-3.5 w-3.5" /> Call Now
          </a>
          <a
            href={ceyteq.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#1FA855] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#178a45]"
          >
            <WhatsAppGlyph className="h-3.5 w-3.5" /> WhatsApp Chat
          </a>
        </>
      ),
    },
    {
      icon: Smartphone,
      title: "Mobile",
      value: ceyteq.mobileDisplay,
      note: "Direct mobile line for calls and project discussions.",
      copyValue: "+94768607143",
      actions: (
        <a href={ceyteq.mobileHref} className={primaryBtn}>
          <Phone className="h-3.5 w-3.5" /> Call Now
        </a>
      ),
    },
    {
      icon: Mail,
      title: "Email Address",
      value: ceyteq.email,
      note: "Send project briefs, inquiries, and documents anytime.",
      copyValue: ceyteq.email,
      actions: (
        <a href={`mailto:${ceyteq.email}`} className={primaryBtn}>
          <Mail className="h-3.5 w-3.5" /> Write Email
        </a>
      ),
    },
    {
      icon: Globe,
      title: "Official Website",
      value: ceyteq.websiteDisplay,
      note: "Explore our full suite of services and past work.",
      actions: (
        <a
          href={ceyteq.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryBtn}
        >
          <Globe className="h-3.5 w-3.5" /> Visit Site
          <ExternalLink className="h-3 w-3 opacity-70" />
        </a>
      ),
    },
  ];

  return (
    <section id="direct" className="scroll-mt-24" aria-label="Direct contact details">
      <Reveal>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-600">
              Direct Contact
            </p>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-navy-950">
              Reach us directly, your way
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-500">
            Call, WhatsApp, email, or visit our website — whichever suits you
            best, the Ceyteq team will get back to you promptly.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 70}>
            <article className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-(--shadow-lift)">
              <div className="flex items-start justify-between gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-navy-700 group-hover:text-white">
                  <card.icon className="h-6 w-6" />
                </span>
                {card.copyValue && <CopyButton value={card.copyValue} label={card.title} />}
              </div>
              <h3 className="mt-4 font-bold tracking-tight text-navy-950">{card.title}</h3>
              <p className="mt-0.5 break-all text-[15px] font-semibold text-navy-800">
                {card.value}
              </p>
              <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-slate-500">
                {card.note}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">{card.actions}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
