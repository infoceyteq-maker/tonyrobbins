"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Menu, X } from "lucide-react";
import { siWhatsapp } from "simple-icons";
import { ceyteq } from "@/lib/contact-data";

const anchors = [
  { href: "#direct", label: "Direct Contact" },
  { href: "#message", label: "Send a Message" },
  { href: "#socials", label: "Social Hub" },
];

function WhatsAppGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={siWhatsapp.path} />
    </svg>
  );
}

export { WhatsAppGlyph };

export default function ContactHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/92 shadow-lg shadow-navy-950/20 backdrop-blur-md"
          : "bg-navy-950/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-white/30">
            <Image
              src="/images/logo-mark.png"
              alt="Ceyteq logo"
              width={80}
              height={80}
              priority
              className="h-full w-full object-contain p-0.5"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-white">
              {ceyteq.company}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-navy-300">
              {ceyteq.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Contact page sections">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/8 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            PR Proposal
          </Link>
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="rounded-full px-3.5 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:bg-white/8 hover:text-white"
            >
              {a.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={ceyteq.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-2 text-[13px] font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
          >
            <WhatsAppGlyph className="h-3.5 w-3.5" />
            WhatsApp
          </a>
          <a
            href={ceyteq.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy-600 px-4 py-2 text-[13px] font-semibold text-white shadow-md shadow-navy-900/40 transition-colors hover:bg-navy-500"
          >
            Visit Website
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="fade-in border-t border-white/10 bg-navy-950/98 px-5 pb-5 pt-3 backdrop-blur-md lg:hidden"
          aria-label="Mobile contact page sections"
        >
          <div className="grid gap-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/8"
            >
              <ArrowLeft className="h-4 w-4" /> PR Proposal
            </Link>
            {anchors.map((a) => (
              <a
                key={a.href}
                href={a.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/8"
              >
                {a.label}
              </a>
            ))}
            <a
              href={ceyteq.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-navy-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              Chat on WhatsApp — {ceyteq.hotlineDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
