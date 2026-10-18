import Image from "next/image";
import {
  BarChart3,
  Compass,
  Megaphone,
  Mic,
  Newspaper,
  ShieldCheck,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";

const measures = [
  {
    icon: Newspaper,
    label: "Media Placements Pitched",
    detail: "U.S. print, digital & broadcast outreach volume and pickup",
  },
  {
    icon: Mic,
    label: "Podcast & Interview Bookings",
    detail: "Confirmed appearances across business & leadership shows",
  },
  {
    icon: Megaphone,
    label: "Keynote Submissions",
    detail: "Applications lodged across the U.S. keynote circuit",
  },
  {
    icon: Users,
    label: "Audience Growth & Reach",
    detail: "Follower, community, and campaign reach vs. Day-1 baseline",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="scroll-mt-24">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-(--shadow-card)">
          <div className="grid lg:grid-cols-5">
            {/* Copy */}
            <div className="p-8 md:p-10 lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700">
                <Compass className="h-3.5 w-3.5" />
                Project Vision &amp; Approach
              </div>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-navy-950 md:text-3xl">
                A high-profile personal brand, built from the ground up —
                with measurable traction.
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                To build a high-profile personal brand from the ground up with
                measurable traction, our execution is structured into{" "}
                <strong className="font-semibold text-navy-900">
                  5 core pillars
                </strong>{" "}
                designed to establish absolute authority, optimize all digital
                assets, execute high-converting media outreach, and ensure
                continuous performance tracking.
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                No pitching before proof. We begin with deep research into your
                history, track record, platforms, and audience — then convert
                that evidence into optimized platforms, a clear brand identity,
                and a disciplined 30-day campaign aimed squarely at U.S. media
                and the keynote circuit.
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-navy-100 bg-navy-50/70 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-navy-600" />
                <p className="text-sm leading-relaxed text-slate-700">
                  <span className="font-semibold text-navy-900">
                    Evidence before exposure.
                  </span>{" "}
                  Every claim taken to media is first verified in Pillar 01 —
                  companies led, clients served, markets operated, teams built
                  — so your national voice is defensible from day one.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative min-h-64 lg:col-span-2">
              <Image
                src="/images/media-studio.jpg"
                alt="Professional media and podcast studio in navy tones"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-serif text-lg italic leading-snug text-white">
                  Built for the studio, the stage, and the national
                  conversation.
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-navy-200">
                  U.S. Media • Podcasts • Keynotes
                </p>
              </div>
            </div>
          </div>

          {/* What we measure */}
          <div className="border-t border-slate-100 bg-slate-50/70 px-8 py-7 md:px-10">
            <div className="mb-5 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-navy-600" />
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-navy-900">
                What We Measure From Day One
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {measures.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-slate-200/70 bg-white p-4"
                >
                  <m.icon className="h-5 w-5 text-navy-600" />
                  <p className="mt-2.5 text-sm font-semibold text-navy-950">
                    {m.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {m.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
