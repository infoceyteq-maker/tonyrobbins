import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import PillarSection from "@/components/PillarSection";
import Timeline from "@/components/Timeline";
import Budget from "@/components/Budget";
import Accept from "@/components/Accept";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { pillars } from "@/lib/data";

const framework = [
  { number: "01", title: "Research & Market Intelligence", href: "#research" },
  { number: "02", title: "Platform & Tools Optimization", href: "#platforms" },
  { number: "03", title: "Branding & Marketing Plan", href: "#branding" },
  { number: "04", title: "Time Plan & Management", href: "#timeline" },
  { number: "05", title: "Budget & Investment Structure", href: "#investment" },
];

function FrameworkOverview() {
  return (
    <section aria-label="Five pillar framework overview">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-600">
              The Framework
            </p>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight text-navy-950">
              Five pillars. One national voice.
            </h2>
          </div>
          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            Work through each pillar below
            <ArrowDown className="h-4 w-4 text-navy-500" />
          </p>
        </div>
      </Reveal>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {framework.map((f, i) => (
          <Reveal key={f.number} delay={i * 70}>
            <Link
              href={f.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-(--shadow-lift)"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-navy-100 transition-colors group-hover:text-navy-200">
                  {f.number}
                </span>
                <h3 className="mt-2 text-[15px] font-semibold leading-snug tracking-tight text-navy-950">
                  {f.title}
                </h3>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-navy-600">
                View pillar
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <Nav />
      <Hero />

      <main className="bg-ash-grid">
        <div className="mx-auto max-w-6xl space-y-14 px-5 py-14 md:px-8 md:py-16">
          <Vision />
          <FrameworkOverview />
          {pillars.map((pillar) => (
            <PillarSection key={pillar.id} pillar={pillar} />
          ))}
          <Timeline />
          <Budget />
          <Accept />
        </div>
      </main>

      <Footer />
    </div>
  );
}
