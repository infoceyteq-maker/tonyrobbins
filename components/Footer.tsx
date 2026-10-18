import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-600 font-serif text-lg font-bold text-white">
                C
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold tracking-tight text-white">
                  Ceyteq Digital Solutions
                </p>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy-300">
                  Prepared by Samir
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Strategic PR &amp; Personal Brand Proposal — Personal Brand
              &amp; National PR Campaign for a U.S.-based consumer health CEO,
              Kellogg MBA, and AI strategist.
            </p>
          </div>

          <nav aria-label="Proposal sections" className="no-print">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Proposal Contents
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#accept" className="font-medium text-navy-300 transition-colors hover:text-white">
                  Accept Proposal
                </a>
              </li>
              <li>
                <Link href="/contact" className="inline-flex items-center gap-1.5 font-medium text-navy-300 transition-colors hover:text-white">
                  <Mail className="h-3.5 w-3.5" />
                  Contact &amp; Social Hub
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Ceyteq Digital Solutions. All rights reserved. · October
            2026
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-navy-300" />
            Confidential — prepared exclusively for the intended recipient.
          </p>
        </div>
      </div>
    </footer>
  );
}
