"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, Printer, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (doc.scrollTop / total) * 100 : 0);
      setScrolled(doc.scrollTop > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/92 shadow-lg shadow-navy-950/20 backdrop-blur-md"
          : "bg-navy-950/60 backdrop-blur-sm"
      }`}
    >
      {/* Scroll progress */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-white/10">
        <div
          className="h-full bg-navy-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-600 font-serif text-lg font-bold text-white">
            C
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-white">
              Ceyteq Digital Solutions
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-navy-300">
              Strategic PR &amp; Brand Proposal
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Proposal sections">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                active === link.href
                  ? "bg-white/12 text-white"
                  : "text-slate-300 hover:bg-white/8 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3.5 py-2 text-[13px] font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Printer className="h-3.5 w-3.5" />
            Print / PDF
          </button>
          <a
            href="#accept"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy-600 px-4 py-2 text-[13px] font-semibold text-white shadow-md shadow-navy-900/40 transition-colors hover:bg-navy-500"
          >
            Accept Proposal
            <ArrowRight className="h-3.5 w-3.5" />
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
          aria-label="Mobile proposal sections"
        >
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  active === link.href
                    ? "bg-white/12 text-white"
                    : "text-slate-300 hover:bg-white/8"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#accept"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-navy-600 px-4 py-3 text-sm font-semibold text-white"
            >
              Accept Proposal &amp; Begin Research
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
