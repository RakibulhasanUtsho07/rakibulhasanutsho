# Utsho.dev — Developer Portfolio

An immersive, motion-led portfolio for Rakibul Hasan Utsho, a Bangladesh-based full-stack developer.

## Experience

- Scroll-driven page reveals and timelines with GSAP and ScrollTrigger.
- A lazy-loaded Three.js hero scene with wireframe geometry, spatial nodes, camera parallax, and reduced-motion support.
- Responsive selected-work gallery and dedicated project case-study routes.
- Clear project status labels that distinguish ongoing work from live projects and engineering showcases.
- SEO metadata, responsive navigation, accessible links, and fallback artwork if WebGL cannot initialize.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS v4, GSAP, Three.js.

## Local development

Install Node.js and npm, then run:

- npm install
- npm run dev

Open http://localhost:3000.

Quality checks:

- npm run lint
- npm run build

## Project content

Project descriptions and technology tags are maintained in src/data/projects.ts. Personal links and contact details live in src/data/site.ts.

The Three.js hero is decorative and lazy-loaded. The page remains useful without WebGL and respects the user's reduced-motion preference. The 3D Geospatial Platform is presented as a work in progress; illustrative property data and future ideas are not represented as production functionality.

## Deployment

Deploy the repository through Vercel or another platform that supports Next.js. Set the production domain in deployment settings before sharing a canonical URL.
