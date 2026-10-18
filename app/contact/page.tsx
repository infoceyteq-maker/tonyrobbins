import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe,
  Phone,
  Sparkles,
} from "lucide-react";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactHero from "@/components/contact/ContactHero";
import DirectCards from "@/components/contact/DirectCards";
import ContactForm from "@/components/contact/ContactForm";
import SocialGrid from "@/components/contact/SocialGrid";
import ContactFooter from "@/components/contact/ContactFooter";
import Reveal from "@/components/Reveal";
import { ceyteq, expertise } from "@/lib/contact-data";

export const metadata: Metadata = {
  title: "Contact & Social Hub — Ceyteq (Ceylon Technology)",
  description:
    "Get in touch with Ceyteq – Ceylon Technology. Empowering Digital Evolution: hotline/WhatsApp, mobile, email, website, and 10 social & professional platforms for startups, SMEs, and corporate organizations.",
};

function MessageSection() {
  return (
    <section id="message" className="scroll-mt-24" aria-label="Send Ceyteq a message">
      <div className="grid items-start gap-6 lg:grid-cols-5">
        {/* Form */}
        <Reveal className="lg:col-span-3">
          <ContactForm />
        </Reveal>

        {/* Side panel */}
        <div className="space-y-6 lg:col-span-2">
          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-7 text-white shadow-(--shadow-lift) md:p-8">
              <div className="bg-navy-grid absolute inset-0" aria-hidden="true" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-navy-600/30 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-200">
                  <Globe className="h-3.5 w-3.5" />
                  Official Website
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  Explore everything Ceyteq does
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Explore our full suite of digital solutions, services, and
                  past work on our official platform.
                </p>
                <a
                  href={ceyteq.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-navy-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-500"
                >
                  <Globe className="h-4 w-4" />
                  Visit {ceyteq.websiteDisplay}
                  <ExternalLink className="h-3.5 w-3.5 opacity-75" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-(--shadow-card) md:p-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-navy-600" />
                <h3 className="font-bold tracking-tight text-navy-950">
                  Our Core Expertise
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Web development, digital marketing, ad campaigns, premium
                printing &amp; signage, creative media, and AI/ERP solutions.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 rounded-full border border-navy-100 bg-navy-50 px-2.5 py-1 text-[11.5px] font-medium text-navy-800"
                  >
                    <CheckCircle2 className="h-3 w-3 text-navy-500" />
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 border-t border-slate-100 pt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-600">
                All-in-one professional digital partner
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-3xl border border-navy-100 bg-navy-50 p-7 shadow-(--shadow-card) md:p-8">
              <h3 className="font-bold tracking-tight text-navy-950">
                Prefer to talk it through?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Call us and tell us about your project — we&apos;ll map the
                fastest path from idea to launch.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={ceyteq.hotlineHref}
                  className="inline-flex items-center justify-between gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy-900 shadow-sm transition-colors hover:bg-navy-100/60"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4 text-navy-600" />
                    Hotline / WhatsApp
                  </span>
                  {ceyteq.hotlineDisplay}
                </a>
                <a
                  href={ceyteq.mobileHref}
                  className="inline-flex items-center justify-between gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy-900 shadow-sm transition-colors hover:bg-navy-100/60"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4 text-navy-600" />
                    Mobile
                  </span>
                  {ceyteq.mobileDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProposalCta() {
  return (
    <section aria-label="Strategic PR and personal brand proposal">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-8 py-10 text-white shadow-(--shadow-lift) md:px-12">
          <div className="bg-navy-grid absolute inset-0" aria-hidden="true" />
          <div className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-navy-500/20 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-200">
                <FileText className="h-3.5 w-3.5" />
                Featured Proposal
              </span>
              <h2 className="mt-3.5 text-2xl font-extrabold tracking-tight md:text-3xl">
                Personal Brand &amp; National PR Campaign
              </h2>
              <p className="mt-2 leading-relaxed text-slate-300">
                See how Ceyteq structures a 5-pillar strategy to position a
                founder as a nationally recognized voice — research,
                platforms, branding, timeline, and investment.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-navy-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-navy-950/50 transition-all hover:-translate-y-0.5 hover:bg-navy-500"
            >
              View the Proposal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <ContactHeader />
      <ContactHero />

      <main className="bg-ash-grid">
        <div className="mx-auto max-w-6xl space-y-14 px-5 py-14 md:px-8 md:py-16">
          <DirectCards />
          <MessageSection />
          <SocialGrid />
          <ProposalCta />
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
