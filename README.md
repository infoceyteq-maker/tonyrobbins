# Personal Brand & National PR Campaign — Web Proposal

A high-end web proposal built with **Next.js 15** and **Tailwind CSS 4** for **Ceyteq Digital Solutions (Samir)**, with two routes:

- **`/`** — Strategic PR & Personal Brand proposal (5-pillar framework)
- **`/contact`** — Ceyteq Contact & Social Hub (below)

The proposal positions a U.S.-based four-time entrepreneur, consumer health CEO, Kellogg MBA, and AI strategist as a nationally recognized voice in entrepreneurship, innovation, and leadership — *"Tony Robbins meets Guy Kawasaki," through a Black serial entrepreneur perspective.*

## Design

- Professional palette: **White · Slate/Ash · Navy Blue** (custom navy scale in `app/globals.css`)
- Cinematic navy keynote-stage hero with animated stat counters
- Sticky navigation with scroll-progress bar and active-section highlighting
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Print / PDF export stylesheet (Print button in nav & CTA)

## Content Structure

| Section | Description |
| --- | --- |
| Hero | Agency badge, positioning statement, target/execution highlights, animated stats |
| Project Vision & Approach | Strategy summary, studio visual, "what we measure" KPI cards |
| Framework Overview | Five-pillar quick-navigation cards |
| **Pillar 01 — Research & Market Intelligence** | 1.1 Personal & Pre-CEO History · 1.2 CEO Track Record · 1.3 Current Projects/Advisory · 1.4 Platforms/Tools/AI Audit · 1.5 Community, Messaging & Reach (each with expandable deliverables) |
| **Pillar 02 — Platform & Tools Optimization and Development** | 2.1 Design Optimization · 2.2 AI Tools Development & Integration · 2.3 Automation, Monitoring & Guidance |
| **Pillar 03 — Branding & Marketing Plan** | 3.1 Brand & Product Identity · 3.2 Promotions & Media Strategy · 3.3 Material Oversight & Ad Monitoring |
| **Pillar 04 — Time Plan & Time Management** | Interactive Gantt + phase explorer (Days 1–10 / 11–20 / 21–30 / Post-Day 30) and 30-Day / 3-Month / 6-Month / 2-Year horizon tabs |
| **Pillar 05 — Budget Plan & Investment Structure** | 5.1 First-Month Startup Budget · 5.2 Long-Term Pro Budget, quoting principles |
| CTA / Acceptance | "What happens next" steps + interactive acceptance form (name, email, organization, authorization) with confirmation summary and mailto handoff |

> **Budget figures:** intentionally not published on the page. Per the proposal terms, itemized budgets (5.1 & 5.2) are presented at the Day-10 findings review, after Pillar 01 research.

## `/contact` — Ceyteq Contact & Social Hub

**Ceyteq – Ceylon Technology** · *"Empowering Digital Evolution"*

- **Hero** — company branding, tagline, welcome message for startups / SMEs / corporates, CTAs (message form, WhatsApp chat, **Save Contact vCard download**), quick-contact strip
- **Direct Contact cards** — Hotline/WhatsApp +94 78 860 7143 (call + `wa.me` chat), Mobile +94 76 860 7143, Email `info.ceyteq@gmail.com`, Website `www.ceyteq.linkpc.net` — with copy-to-clipboard buttons
- **Direct message form** — Name / Email / Subject (with service preset chips) / Message, validated; submitting opens the visitor's email app pre-filled to `info.ceyteq@gmail.com`, with a WhatsApp-send alternative and an accurate confirmation state
- **Side panel** — Official Website card, Core Expertise chips (web, marketing, ads, printing & signage, creative media, AI/ERP, PR), call shortcuts
- **Social Hub grid** — Facebook, Instagram, LinkedIn, TikTok, YouTube, Pinterest, X (Twitter), BiliBili, Contra, Fiverr with real brand glyphs (`simple-icons`; Lucide/letterform fallbacks), brand-color hover states, handles, and All / Social / Video / Professional filters
- Cross-linked both ways with the proposal page (nav, footer, featured-proposal CTA)

Contact details and social links live in `lib/contact-data.ts` — edit there to update the page.

## Run Locally

```bash
npm install
npm run dev        # development → http://localhost:3000
```

Production:

```bash
npm run build
npm run start      # production server
```

## Project Layout

```
app/                 layout, proposal page (/) + contact page (/contact), global styles
components/          Nav, Hero, Vision, PillarSection, Timeline, Budget, Accept, Footer, Reveal
components/contact/  ContactHeader, ContactHero, DirectCards, ContactForm, SocialGrid,
                     ContactFooter, BrandIcon
lib/data.ts          All proposal content (pillars, phases, horizons) — edit copy here
lib/contact-data.ts  Ceyteq contact details, social links, expertise — edit here
public/images/       Hero keynote-stage and media-studio visuals
```

To customize the proposal copy, edit `lib/data.ts` — pillar titles, descriptions, deliverables, timeline phases, and horizons are all data-driven.
