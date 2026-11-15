# Utsho.dev — Developer Portfolio

An immersive, motion-led portfolio for Rakibul Hasan Utsho, a Bangladesh-based backend-focused full-stack developer.

## Experience

- Four curated case studies spanning a digital-payment interface, a candidate/recruiter job-tracking demo, a digital-agency website, and a bakery storefront prototype.
- Scroll-driven page reveals with GSAP and ScrollTrigger.
- A lazy-loaded Three.js hero scene with animated wireframe geometry, pointer parallax, and reduced-motion support.
- Redesigned project case-study pages with documented scope, technology profile, source/live links, limitations, and next steps.
- Responsive project cards with subtle pointer tilt and cursor-following light.
- SEO metadata, responsive navigation, accessible links, and fallback artwork if WebGL cannot initialize.

## Selected project case studies

- **Digital Wallet & Payment Interface** — Responsive Next.js landing-page experience. The repository documents frontend UI work, not payment processing or real wallet transactions.
- **HireFlow — Job Tracker** — Full-stack Next.js/PostgreSQL candidate and recruiter workflow demo with private resume handling and explainable keyword matching. The source README identifies its careers data as fictional demo content and documents production follow-ups.
- **Pixel & Code — Agency Website** — Public website for a Bangladesh-based digital agency, presenting development, creative and marketing services, portfolio, and delivery process.
- **Real Foods — Bakery Storefront UI** — Storefront prototype with an animated bakery-category hero and featured product cards. The repository currently uses in-file mock product data.

The artwork on project cards and case-study pages is a stylised visual preview, not a screenshot or a claim that every pictured interface is currently deployed. Project descriptions distinguish documented implementation from demo data, unverified behaviour, and future work.

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

Project descriptions, selected GitHub repositories, live demos, related links, technologies, and scope notes are maintained in `src/data/projects.ts`. Personal links and contact details live in `src/data/site.ts`.

The Three.js hero is decorative and lazy-loaded. The page remains useful without WebGL and respects the user's reduced-motion preference.

## Deployment

Deploy the repository through Vercel or another platform that supports Next.js. Set the production domain in deployment settings before sharing a canonical URL.
