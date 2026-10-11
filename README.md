# Utsho.dev — Developer Portfolio

An immersive, motion-led portfolio for Rakibul Hasan Utsho, a Bangladesh-based full-stack developer.

## Experience

- Four curated GitHub projects spanning fintech, SaaS, food commerce, and facility booking.
- Scroll-driven page reveals with GSAP and ScrollTrigger.
- A lazy-loaded Three.js hero scene with animated wireframe geometry, pointer parallax, and reduced-motion support.
- Dedicated case-study pages with direct source links, technology stacks, project scope, and relevant contribution notes.
- Responsive project cards with subtle pointer tilt and cursor-following light.
- SEO metadata, responsive navigation, accessible links, and fallback artwork if WebGL cannot initialize.

## Selected project case studies

- **Digital Wallet & Payment Platform** — Next.js interface with a companion TypeScript/Express API repository. The frontend contribution is stated separately from broader platform functionality.
- **LessonUp** — Full-stack life-lessons app with authentication, moderation, premium content, and Stripe Checkout in test mode.
- **Real Foods** — Food storefront with customer ordering flows and admin product-management screens.
- **SportsGround** — Sports-facility discovery and booking workflows with separate frontend and backend repositories.

The artwork on the project cards is a stylised visual preview, not a screenshot or a claim that every pictured interface is currently deployed. Project descriptions distinguish documented features from verification steps and future work.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS v4, GSAP, Three.js.

## Local development

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

Quality checks:

```bash
npm run lint
npm run build
```

## Project content

Project descriptions, selected GitHub repositories, related links, and technology tags are maintained in `src/data/projects.ts`. Personal links and contact details live in `src/data/site.ts`.

The Three.js hero is decorative and lazy-loaded. The page remains useful without WebGL and respects the user's reduced-motion preference.

## Deployment

Deploy the repository through Vercel or another platform that supports Next.js. Set the production domain in deployment settings before sharing a canonical URL.
