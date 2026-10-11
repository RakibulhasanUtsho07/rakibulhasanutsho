export type ProjectVisualVariant = "payment" | "lesson" | "food" | "sports";
export type ProjectStatus = "In development" | "Live project" | "Engineering showcase";

export type ProjectLink = {
  label: string;
  url: string;
};

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
  relatedLinks?: ProjectLink[];
  contribution?: string;
  highlights: string[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: "digital-wallet-platform",
    number: "01",
    title: "Digital Wallet & Payment Platform",
    category: "Fintech / Full-stack",
    summary: "A modern payment-product interface paired with a TypeScript API covering transaction, KYC, security, and operations workflows.",
    description:
      "A digital wallet product explored across two connected repositories: a responsive Next.js interface and a modular Express/TypeScript backend. The public code includes finance dashboard UI and backend areas for transaction operations, security, merchant verification, administration, and AI-assisted review. The showcase distinguishes the frontend contribution from the wider platform scope.",
    stack: ["Next.js", "TypeScript", "Express", "MongoDB", "Mongoose", "BullMQ", "Framer Motion"],
    status: "Engineering showcase",
    variant: "payment",
    featured: true,
    githubUrl: "https://github.com/RakibulhasanUtsho07/digital--payment-system-web",
    relatedLinks: [
      { label: "Backend API repository", url: "https://github.com/RakibulhasanUtsho07/digital-wallet-backend" },
    ],
    contribution:
      "The frontend repository credits my work on the navigation bar, hero section, responsive behaviour, colour theme, and global visual consistency.",
    highlights: [
      "Responsive Next.js and Tailwind interface with an interactive hero carousel and feature-stepper experience.",
      "Companion TypeScript/Express API with modular areas for administration, security, transactions, merchant verification, and AI-assisted review.",
      "Backend dependencies include MongoDB/Mongoose, rate limiting, validation, and worker/queue tooling.",
      "Separate frontend and backend links make the system boundaries and implementation areas easy to explore.",
    ],
    nextSteps: [
      "Document verified end-to-end scenarios and automated test coverage before making production-readiness claims.",
      "Add sanitized screenshots and architecture notes that contain no customer or identity data.",
    ],
  },
  {
    slug: "lessonup",
    number: "02",
    title: "LessonUp — Life Lessons Platform",
    category: "Full-stack / SaaS",
    summary: "A life-lessons platform with authentication, a community feed, favorites, moderation, and a premium membership flow.",
    description:
      "A full-stack application for collecting and sharing personal-growth lessons. The documented feature set spans a user dashboard, public feed, saved favourites, content reporting, admin moderation, and a one-time premium upgrade implemented with Stripe Checkout in test mode.",
    stack: ["Next.js", "Express", "MongoDB", "Better Auth", "Stripe", "Framer Motion", "Recharts"],
    status: "Live project",
    variant: "lesson",
    githubUrl: "https://github.com/RakibulhasanUtsho07/lesson-up",
    liveUrl: "https://lesson-up.vercel.app",
    relatedLinks: [
      { label: "Backend API (live)", url: "https://lesson-up-sarver-one.vercel.app" },
      { label: "Backend source repository", url: "https://github.com/RakibulhasanUtsho07/lesson_up_sarver_one" },
    ],
    highlights: [
      "Email/password and Google sign-in paths documented with Better Auth.",
      "Create lessons, browse the public feed, like entries, save favourites, and report content.",
      "Free-versus-premium content gating and Stripe Checkout in test mode, with webhook-based upgrade flow described in the project README.",
      "Admin analytics, user-role management, content moderation, and report handling.",
    ],
    nextSteps: [
      "Keep payment flows clearly labelled as test mode until live-payment configuration and end-to-end behaviour are verified.",
      "Add a concise walkthrough and screenshots of the main user and admin flows.",
    ],
  },
  {
    slug: "real-foods",
    number: "03",
    title: "Real Foods — Storefront & Operations",
    category: "E-commerce / Product UI",
    summary: "A food storefront connected to customer ordering flows and a separate admin product-management dashboard.",
    description:
      "A Next.js food-commerce experience with separate customer and admin areas. The repository includes product browsing, menus, cart and order pages, profile screens, product-management forms, and dashboard components. Authentication and data visualisation libraries are part of its current stack.",
    stack: ["Next.js", "React", "MongoDB", "Better Auth", "HeroUI", "Framer Motion", "Recharts"],
    status: "Live project",
    variant: "food",
    githubUrl: "https://github.com/RakibulhasanUtsho07/Real_Foods",
    liveUrl: "https://real-foods.vercel.app",
    highlights: [
      "Customer-facing food and product browsing, menu, cart, and order-history routes.",
      "Admin routes and reusable components for adding, editing, and managing products.",
      "Separate user/admin dashboard layouts and profile experiences.",
      "Better Auth, MongoDB, Framer Motion, and Recharts are present in the repository dependencies.",
    ],
    nextSteps: [
      "Verify current live ordering and authentication flows, then document the exact tested behaviour.",
      "Replace stylised portfolio mockups with approved screenshots from the real interface.",
    ],
  },
  {
    slug: "sports-ground",
    number: "04",
    title: "SportsGround — Facility Booking",
    category: "Full-stack / Booking",
    summary: "A sports-facility discovery and booking experience with private bookings and facility-management routes.",
    description:
      "A full-stack sports-ground booking application built around facility discovery and user-specific workflows. The frontend repository documents sign-in, private bookings, adding a facility, managing owned facilities, and featured facility cards, with a companion Express/MongoDB server repository.",
    stack: ["Next.js", "React", "Express", "MongoDB", "Better Auth", "React Hook Form"],
    status: "Engineering showcase",
    variant: "sports",
    githubUrl: "https://github.com/RakibulhasanUtsho07/sports-ground",
    relatedLinks: [
      { label: "Backend API repository", url: "https://github.com/RakibulhasanUtsho07/sports-ground-server" },
    ],
    highlights: [
      "Facility discovery and featured facility cards with booking entry points.",
      "Authenticated user routes for personal bookings.",
      "Facility submission and facility-management workflows.",
      "Separate frontend and Express/MongoDB backend repositories.",
    ],
    nextSteps: [
      "Add a verified live demo and screenshots if the application is publicly deployed.",
      "Document booking validation and server-side authorisation using a safe demo account.",
    ],
  },
];
