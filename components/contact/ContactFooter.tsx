import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, Mail, Phone, Smartphone } from "lucide-react";
import { ceyteq, socialLinks } from "@/lib/contact-data";
import BrandIcon from "./BrandIcon";

export default function ContactFooter() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-600 font-serif text-lg font-bold text-white">
                C
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold tracking-tight text-white">
                  {ceyteq.company}
                </p>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-300">
                  {ceyteq.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Your all-in-one professional digital partner — web, marketing,
              advertising, printing, creative media, and AI/ERP solutions.
            </p>
          </div>

          {/* Direct */}
          <nav aria-label="Direct contact">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Direct Contact
            </p>
            <ul className="mt-3.5 space-y-2.5 text-sm">
              <li>
                <a href={ceyteq.hotlineHref} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-navy-300" />
                  Hotline / WhatsApp: {ceyteq.hotlineDisplay}
                </a>
              </li>
              <li>
                <a href={ceyteq.mobileHref} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Smartphone className="h-4 w-4 text-navy-300" />
                  Mobile: {ceyteq.mobileDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${ceyteq.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 text-navy-300" />
                  {ceyteq.email}
                </a>
              </li>
              <li>
                <a href={ceyteq.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Globe className="h-4 w-4 text-navy-300" />
                  {ceyteq.websiteDisplay}
                </a>
              </li>
              <li>
                <Link href="/" className="inline-flex items-center gap-1.5 font-medium text-navy-300 transition-colors hover:text-white">
                  Strategic PR &amp; Personal Brand Proposal
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Follow Ceyteq
            </p>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ceyteq on ${s.name}`}
                  title={`${s.name} — ${s.handle}`}
                  style={{ "--brand": `#${s.brandHex}` } as CSSProperties}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-white/5 text-slate-300 transition-all hover:border-(--brand) hover:bg-(--brand) hover:text-white"
                >
                  <BrandIcon social={s} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Ten channels, one team — pick your favorite platform and say
              hello.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {ceyteq.company}. All rights reserved.</p>
          <p className="font-serif italic text-slate-500">
            &ldquo;{ceyteq.tagline}&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
