# Saurabh Pednekar — MDM Portfolio

A premium, production-ready personal portfolio for an enterprise **Master Data Management Developer** (STIBO STEP · Informatica MDM · Reltio). Dark, glassmorphic, electric-blue, with a live data-network hero and an interactive end-to-end architecture flow.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
npm run typecheck
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js. No env vars needed.
3. Deploy. That's it.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # SEO metadata, fonts, JSON-LD, <html>
│   ├── page.tsx          # composes all sections
│   ├── globals.css       # theme tokens, glass utilities, reduced-motion
│   ├── robots.ts         # /robots.txt
│   └── sitemap.ts        # /sitemap.xml
├── components/
│   ├── Navbar.tsx        # sticky nav, active-section highlight, mobile drawer
│   ├── LoadingScreen.tsx # intro animation
│   ├── sections/         # one file per homepage section
│   │   ├── Hero.tsx              # animated data-network background + CTAs
│   │   ├── Stats.tsx            # count-up statistic cards
│   │   ├── About.tsx           # summary + capability timeline
│   │   ├── Skills.tsx          # progress bars + interactive radar chart
│   │   ├── Architecture.tsx    # interactive end-to-end flow (centerpiece)
│   │   ├── Projects.tsx        # cards + expandable modal
│   │   ├── CaseStudies.tsx     # problem → analysis → solution → impact
│   │   ├── Playground.tsx      # MDM Solution Playground (special feature)
│   │   ├── Timeline.tsx        # scroll-driven career timeline
│   │   ├── Certifications.tsx  # badge grid with hover glow
│   │   ├── KnowledgeHub.tsx    # blog preview cards
│   │   ├── Contact.tsx         # contact card + CTAs
│   │   └── Footer.tsx
│   └── ui/               # reusable primitives
│       ├── GlassCard.tsx
│       ├── MagneticButton.tsx
│       ├── Counter.tsx
│       ├── NetworkBackground.tsx
│       ├── SectionHeading.tsx
│       ├── Section.tsx
│       └── motion.tsx           # shared variants + Reveal wrapper
├── hooks/
│   └── useActiveSection.ts      # IntersectionObserver nav highlighting
└── lib/
    ├── data.ts                  # ALL content lives here — edit this first
    └── types.ts
```

## Customizing content

**Everything you'll want to change lives in `src/lib/data.ts`** — name, links, stats, skills, projects, case studies, timeline, certifications, articles, and the playground domains. No component edits required for content.

- **Resume:** replace `public/Saurabh-Pednekar-Resume.pdf` with your real PDF (keep the filename, or update `profile.resumeHref` in `data.ts`).
- **Links:** update `profile.email` and `profile.linkedin` in `data.ts`.
- **Theme:** colors and fonts are tokens in `tailwind.config.ts` and `globals.css`.

## Design + a11y notes

- Mobile-first, fully responsive (single column → hybrid → dashboard).
- `prefers-reduced-motion` is respected globally; the hero network and packet animations fall back to static.
- Visible keyboard focus, semantic landmarks, ARIA on interactive controls.
- Fonts load via `<link>` (Inter, Space Grotesk, JetBrains Mono) for zero build-time network dependency.

## License

Personal portfolio template — free to adapt.
