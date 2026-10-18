export type SubItem = {
  code: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type Pillar = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  outcome: string;
  items: SubItem[];
  layout: "grid-2" | "list" | "grid-3";
};

export const pillars: Pillar[] = [
  {
    id: "research",
    number: "01",
    eyebrow: "Pillar One",
    title: "Research & Market Intelligence",
    summary:
      "A comprehensive baseline analysis completed before any active pitching — so every story we take to U.S. media is backed by verified proof points, not claims.",
    outcome:
      "Outcome: a complete authority dossier — your story, track record, platforms, and audience mapped into pitch-ready proof.",
    layout: "grid-2",
    items: [
      {
        code: "1.1",
        title: "Personal & Pre-CEO Business History",
        description:
          "Examining your journey from day one, covering foundational personal background and the business levels operated prior to stepping into a CEO role.",
        deliverables: [
          "Founder story timeline from day one to present",
          "Signature anecdotes & origin-story bank for interviews",
          "Credibility asset inventory — milestones, credentials, proof points",
        ],
      },
      {
        code: "1.2",
        title: "CEO Track Record & Operations",
        description:
          "In-depth business analysis of companies led as CEO, including client handling history, productions executed, operating markets and countries, and teams managed.",
        deliverables: [
          "Portfolio of companies led, with outcomes and scale metrics",
          "Client & production case-study shortlist for media use",
          "Markets, countries, and team-size map across your career",
        ],
      },
      {
        code: "1.3",
        title: "Current Projects, Advisory & Lectures",
        description:
          "Reviewing ongoing projects, active advisory roles, lectures, historical evolution, and identifying primary fields of focus.",
        deliverables: [
          "Current venture, advisory, and board portfolio map",
          "Speaking & lecture history with signature topic inventory",
          "Category focus fields and white-space positioning opportunities",
        ],
      },
      {
        code: "1.4",
        title: "Platforms, Tools, AI & Marketing Audit",
        description:
          "Auditing all active social media channels, web panels, software tools, AI models, and traditional media channels such as newspapers and books.",
        deliverables: [
          "Channel-by-channel audit scorecard for every active platform",
          "Software, AI model, and tooling inventory with gap analysis",
          "Traditional media footprint review — books, newspapers, broadcast",
        ],
      },
      {
        code: "1.5",
        title: "Community, Messaging & Audience Reach",
        description:
          "Analyzing community composition, core messaging frameworks, target audience attraction patterns, current reach, and total audience metrics.",
        deliverables: [
          "Audience personas and community segmentation",
          "Core messaging house — promise, pillars, and proof points",
          "Reach baseline and measurable audience-growth targets",
        ],
      },
    ],
  },
  {
    id: "platforms",
    number: "02",
    eyebrow: "Pillar Two",
    title: "Platform & Tools Optimization and Development",
    summary:
      "Infrastructure setup for seamless authority presentation — every profile, panel, and workflow rebuilt so that when media and event organizers look you up, every touchpoint confirms national-level credibility.",
    outcome:
      "Outcome: a fully optimized, automated platform ecosystem that presents one consistent, keynote-ready authority.",
    layout: "list",
    items: [
      {
        code: "2.1",
        title: "Existing Platforms & Design Optimization",
        description:
          "Ground-up review and structural optimization of all current platforms based on research findings, including social media profiles and visual designs aligned with workflow plans.",
        deliverables: [
          "Profile redesign system — bios, banners, links, featured sections",
          "Website & web-panel UX and conversion optimization",
          "Visual consistency kit applied across every channel",
        ],
      },
      {
        code: "2.2",
        title: "AI & Management Tools Development & Integration",
        description:
          "Custom-building required in-house AI and management tools while sourcing and integrating essential external tools.",
        deliverables: [
          "Custom in-house AI tools for content, PR, and management workflows",
          "Media-list, CRM, and outreach tooling integration",
          "External solution sourcing, setup, and configuration",
        ],
      },
      {
        code: "2.3",
        title: "Automated System Implementation, Monitoring & Guidance",
        description:
          "Establishing automated workflows to ensure operational continuity, backed by continuous monitoring and strategic guidance.",
        deliverables: [
          "Automated publishing, outreach, and follow-up workflows",
          "Live monitoring dashboards with performance alerts",
          "SOP documentation plus ongoing strategic guidance",
        ],
      },
    ],
  },
  {
    id: "branding",
    number: "03",
    eyebrow: "Pillar Three",
    title: "Branding & Marketing Plan",
    summary:
      "Strategic outreach and promotional architecture — translating research and optimized platforms into a clear public identity and a full-scale campaign across media, social, and advertising channels.",
    outcome:
      "Outcome: a crystal-clear brand narrative, promoted across every high-ROI channel with continuous performance oversight.",
    layout: "grid-3",
    items: [
      {
        code: "3.1",
        title: "Brand & Product Identity",
        description:
          "Translating post-research and optimization insights into a crystal-clear core brand and product narrative.",
        deliverables: [
          "Positioning statement and signature framework naming",
          "Core brand & product narrative documentation",
          "Speaker one-sheet and media-kit identity system",
        ],
      },
      {
        code: "3.2",
        title: "Promotions & Media Strategy",
        description:
          "Executing full-scale brand promotions, campaigns, social work initiatives, and leveraging media channels for maximum ROI.",
        deliverables: [
          "30-day content, PR, and campaign calendar",
          "Podcast, TV, print, and digital pitch waves",
          "Social growth and community campaigns",
        ],
      },
      {
        code: "3.3",
        title: "Material Oversight & Ad Monitoring",
        description:
          "Continuous monitoring of all marketing materials to ensure audience resonance, with specialized tracking for ad campaigns.",
        deliverables: [
          "Creative QA and brand-alignment review of all materials",
          "Dedicated ad-campaign tracking and optimization",
          "Weekly performance reporting against campaign goals",
        ],
      },
    ],
  },
];

export type Phase = {
  range: string;
  title: string;
  description: string;
  bullets: string[];
  /** Gantt position in % of the 45-day window */
  start: number;
  width: number;
};

export const phases: Phase[] = [
  {
    range: "Days 1–10",
    title: "Research, Optimization & Automation",
    description:
      "Comprehensive research execution, platform optimization, and automated management setup.",
    bullets: [
      "Full Pillar 01 research & audit sprint",
      "Platform redesign and optimization rollout",
      "AI tools, automation, and dashboards configured",
      "Findings review + itemized first-month budget presented",
    ],
    start: 0,
    width: 22,
  },
  {
    range: "Days 11–20",
    title: "Materials Production & Campaign Planning",
    description:
      "Production of all branding and marketing materials and finalization of campaign architecture.",
    bullets: [
      "Brand & product identity finalized",
      "Media kit, speaker one-sheet, and pitch assets produced",
      "Content bank and campaign calendar locked",
      "Target media and keynote lists built and prioritized",
    ],
    start: 22,
    width: 22,
  },
  {
    range: "Days 21–30",
    title: "Full Campaign Execution & Event Focus",
    description:
      "Full campaign rollout focusing on content alignment, media outreach, and scheduled events.",
    bullets: [
      "PR pitch waves to U.S. media and podcasts",
      "Social campaigns and ad campaigns live",
      "Keynote and event submissions in market",
      "Daily material oversight and ad monitoring",
    ],
    start: 44,
    width: 23,
  },
  {
    range: "Post-Day 30",
    title: "15-Day Review Window & Long-Term Pro Plans",
    description:
      "A structured 15-day review of traction and results, followed by 3-Month, 6-Month, and 2-Year Pro Plans.",
    bullets: [
      "15-day performance and traction review window",
      "Results debrief with next-phase recommendations",
      "Pro Plan roadmaps: 3-Month, 6-Month, 2-Year",
      "Scaling budget confirmed against proven channels",
    ],
    start: 67,
    width: 33,
  },
];

export type Horizon = {
  id: string;
  label: string;
  headline: string;
  focus: string;
  points: string[];
};

export const horizons: Horizon[] = [
  {
    id: "30d",
    label: "30-Day Sprint",
    headline: "Rapid traction from a standing start",
    focus:
      "Research, optimize, produce, and launch — the complete 5-pillar framework activated in a single 30-day execution sprint, with a 15-day review window immediately after.",
    points: [
      "Authority dossier and optimized platforms live by Day 10",
      "Pitch-ready media kit and campaign assets by Day 20",
      "Active U.S. media, podcast, and keynote outreach by Day 30",
    ],
  },
  {
    id: "3m",
    label: "3-Month Pro",
    headline: "Sustained visibility and booking momentum",
    focus:
      "The cost-effective scaling phase: continuous pitching, a always-on content engine, and systematic keynote submissions — funded by the integrated 3-month Pro Budget (service fees + ad spend).",
    points: [
      "Rolling media and podcast pitch waves every month",
      "Always-on social content engine with ad amplification",
      "Keynote circuit submissions across priority U.S. events",
    ],
  },
  {
    id: "6m",
    label: "6-Month Pro",
    headline: "From emerging voice to recognized authority",
    focus:
      "Deepening national presence with recurring media segments, flagship content series, and larger-stage positioning built on six months of accumulated proof and placements.",
    points: [
      "Recurring contributor and expert-commentator positioning",
      "Signature content series across video, audio, and print",
      "Tier-one stage and national feature targeting",
    ],
  },
  {
    id: "2y",
    label: "2-Year Vision",
    headline: "Category ownership in entrepreneurship & leadership",
    focus:
      "The long horizon: owning a defined category of the entrepreneurship, innovation, and leadership conversation — with the brand, audience, and media footprint to sustain it.",
    points: [
      "Recognized national voice with an owned audience at scale",
      "Flagship properties — book, event, or media franchise pathways",
      "Durable authority platform independent of any single channel",
    ],
  },
];

export const navLinks = [
  { href: "#vision", label: "Vision" },
  { href: "#research", label: "Research" },
  { href: "#platforms", label: "Platforms" },
  { href: "#branding", label: "Branding" },
  { href: "#timeline", label: "Timeline" },
  { href: "#investment", label: "Investment" },
];
