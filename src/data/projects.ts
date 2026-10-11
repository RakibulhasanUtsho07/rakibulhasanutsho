export type ProjectVisualVariant = "map" | "payment" | "food" | "agency";
export type ProjectStatus = "In development" | "Live project" | "Engineering showcase";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  variant: ProjectVisualVariant;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: "3d-geospatial-platform",
    number: "01",
    title: "3D Geospatial Platform",
    category: "Geospatial / 3D Web",
    summary: "Explore Dhaka through interactive buildings, road layers, and nearby places.",
    description:
      "A browser-based 3D geospatial pilot built around a modular map engine and a Dhaka-focused building dataset. It explores how interactive building geometry, visible-area data loading, and local service discovery could support richer property exploration.",
    stack: ["Next.js", "TypeScript", "CesiumJS", "GeoJSON", "OpenStreetMap"],
    status: "In development",
    variant: "map",
    featured: true,
    githubUrl: "https://github.com/RakibulhasanUtsho07/3d-geospatial-platform",
    highlights: [
      "Interactive Cesium globe with pan, zoom, rotation, tilt, and home-view controls.",
      "Viewport-aware 3D building loading with spatial tiles, bounded feature budgets, caching, and request cancellation.",
      "Building selection, source attributes, geographic coordinates, and estimated footprint area.",
      "Nearby mapped services including pharmacies, hospitals, clinics, supermarkets, and markets.",
      "A vector road layer and a research library for Dhaka architecture references.",
    ],
    nextSteps: [
      "Connect verified property data and clearly separate real listings from illustrative prototypes.",
      "Develop dedicated indoor floor-plan and room-modeling modules.",
      "Investigate interactive interior configuration and AI-assisted design as separate future capabilities.",
    ],
  },
  {
    slug: "digital-payment-system",
    number: "02",
    title: "Digital Payment System",
    category: "Full-stack / Fintech",
    summary: "Role-based dashboards and payment workflows across a digital financial product.",
    description:
      "A financial platform concept with role-specific experiences for users, merchants, administrators, analysts, and support. The project focuses on composing workflows into manageable modules and integrating frontend experiences with backend services.",
    stack: ["Next.js", "React", "TypeScript", "Express", "MongoDB"],
    status: "Engineering showcase",
    variant: "payment",
    highlights: [
      "Role-specific interfaces for user, merchant, admin, analyst, and support scenarios.",
      "Wallet, transfer, transaction, KYC, analytics, support, security, and notification modules.",
      "Frontend and backend integration using REST APIs and data validation.",
      "Backend tooling and security capabilities documented in the project résumé.",
    ],
    nextSteps: [
      "Add verified frontend and backend repository links when the exact repositories are selected for public display.",
      "Publish architecture diagrams and screenshots that do not expose sensitive data.",
    ],
  },
  {
    slug: "real-foods",
    number: "03",
    title: "Real Foods",
    category: "E-commerce / Product UI",
    summary: "A deployed food and e-commerce experience with responsive UI and authentication flows.",
    description:
      "A production-deployed Next.js application with a responsive component-based interface. Its work includes authentication flows, interactive UI, and dashboard and data-visualization experiences.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    status: "Live project",
    variant: "food",
    liveUrl: "https://real-foods.vercel.app",
    highlights: [
      "Responsive product-focused experience built with Next.js and TypeScript.",
      "MongoDB and Better Auth-based authentication flows.",
      "Reusable UI components, notifications, and interactive motion.",
      "Dashboard and data-visualization experiences using Recharts.",
    ],
    nextSteps: [
      "Document the specific contribution, user flows, and verified live features in a future case-study update.",
    ],
  },
  {
    slug: "pixel-and-code",
    number: "04",
    title: "Pixel & Code",
    category: "Agency / Web Design",
    summary: "A digital agency website presenting services and brand identity through a modern web interface.",
    description:
      "A digital agency website included in the selected work. The portfolio case study will focus on the real interface and the contribution made to it, rather than inventing performance results or project claims.",
    stack: ["Web UI", "Responsive Design", "Frontend"],
    status: "Live project",
    variant: "agency",
    liveUrl: "https://pixelandcode.agency",
    highlights: [
      "Business-focused website presentation.",
      "Responsive layout and visual hierarchy.",
      "A project entry point for documenting the implementation and specific contribution.",
    ],
    nextSteps: [
      "Add confirmed screenshots and a more detailed implementation summary.",
    ],
  },
];
