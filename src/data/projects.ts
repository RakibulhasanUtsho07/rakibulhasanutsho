export type ProjectVisualVariant = "payment" | "food" | "job-tracker" | "agency";
export type ProjectStatus = "Live demo" | "Live website" | "UI prototype";

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  projectType: string;
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
  projectNotes: string;
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: "digital-wallet-platform",
    number: "01",
    title: "Digital Wallet & Payment Interface",
    category: "FINTECH / FRONTEND",
    projectType: "Responsive product landing page",
    summary:
      "A responsive Next.js product experience for a digital-wallet brand, built around interactive feature storytelling, motion, and a polished marketing interface.",
    description:
      "This repository is a frontend showcase for a digital wallet and payment product. The implementation focuses on explaining the product through a responsive landing page, an interactive hero carousel, animated feature highlights, and a consistent visual system. It is a product-interface project, not a documented payment-processing backend.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Lucide React"],
    status: "Live demo",
    variant: "payment",
    featured: true,
    githubUrl:
      "https://github.com/RakibulhasanUtsho07/digital--payment-system-web",
    liveUrl: "https://digital-payment-system-web.vercel.app/",
    contribution:
      "The repository README credits Rakibul with developing the navigation bar and hero section, configuring responsive behaviour across screen sizes, and maintaining the colour theme and global visual consistency.",
    highlights: [
      "Interactive hero banner with an auto-sliding carousel, custom controls, indicators, and Framer Motion effects.",
      "Feature-stepper section with rotating progress indicators and changing visual content.",
      "Consistent design system for colour, typography, spacing, and reusable interface sections.",
      "Responsive layout for mobile, tablet, and desktop, with reduced-motion support and optimised image assets.",
    ],
    projectNotes:
      "The public repository README documents a Next.js frontend and its UI components. It does not document a payment processor integration, live wallet balances, transaction settlement, or actual money movement. The portfolio therefore presents this accurately as a digital-payment product interface.",
    nextSteps: [
      "Keep payment, wallet, and transaction capabilities clearly labelled as interface concepts unless a verified backend integration is published.",
      "Add approved screenshots or a short walkthrough of the actual deployed interface.",
    ],
  },
  {
    slug: "hireflow-job-tracker",
    number: "02",
    title: "HireFlow — Job Tracker",
    category: "FULL-STACK / RECRUITMENT",
    projectType: "Candidate and recruiter workflow application",
    summary:
      "A Next.js and PostgreSQL job-tracking demo with role publishing, candidate applications, private resume handling, recruiter review, and explainable keyword matching.",
    description:
      "HireFlow is a full-stack careers-portal demo with distinct candidate and recruiter workflows. Candidates can explore roles, submit applications, and follow application-status history. Recruiters manage their own job listings and review applications in a scoped queue. PostgreSQL constraints protect important records, while resume documents are stored as private files rather than public assets.",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "PDF.js", "Tailwind CSS"],
    status: "Live demo",
    variant: "job-tracker",
    githubUrl: "https://github.com/RakibulhasanUtsho07/job-tracker-web",
    liveUrl: "https://job-tracker-web-jade.vercel.app",
    highlights: [
      "Public careers page with role search and filtering, role-detail pages, and application entry points.",
      "Candidate sign-up and sign-in with salted scrypt password hashes, opaque HTTP-only sessions, and server-side CSRF checks.",
      "Recruiter-owned job lifecycle for drafting, editing, publishing, closing, and safely deleting draft roles.",
      "Application workflow with PDF signature and size checks, private generated file names, owner-only resume downloads, idempotent replay, and database-enforced duplicate prevention.",
      "Recruiter review queue, controlled status transitions, append-only status events, and a candidate-facing application history that excludes private reviewer notes.",
      "PDF.js-powered SkillMatch keyword analysis for required and preferred skills, with matched and missing terms explained to the reviewer.",
    ],
    projectNotes:
      "The repository README identifies the careers portal and role data as a fictional demo, not a real employer vacancy board. SkillMatch is explainable keyword overlap; it is not a probability, an automated hiring decision, or a candidate-rejection tool. The README also states that resume uploads require persistent writable storage, and lists email verification/password reset, malware scanning, and a reviewed privacy/retention policy as deployment follow-ups.",
    nextSteps: [
      "Use managed PostgreSQL and durable private file/object storage for a production deployment; an ephemeral serverless filesystem is not suitable for uploaded resumes.",
      "Complete the documented email, malware-scanning, and privacy/retention follow-ups before treating the demo as a production recruitment service.",
      "Keep SkillMatch as reviewer assistance only, with human decision-making and transparent limitations.",
    ],
  },
  {
    slug: "pixel-and-code",
    number: "03",
    title: "Pixel & Code — Agency Website",
    category: "AGENCY WEBSITE / DIGITAL SERVICES",
    projectType: "Public agency website and service showcase",
    summary:
      "A public website for a Bangladesh-based digital agency, presenting its development, creative, and marketing services, portfolio, delivery process, and contact paths.",
    description:
      "The Pixel & Code website positions the company as a digital-services partner for businesses in Bangladesh. Its public pages introduce web and app development, graphic and UI/UX design, video editing, Meta marketing, and SEO; showcase selected work; explain the agency's project process; and guide prospective clients toward a consultation or project enquiry.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    status: "Live website",
    variant: "agency",
    liveUrl: "https://pixelandcode.agency/",
    highlights: [
      "Service pages and homepage sections covering web development, app development, graphic design, UI/UX, video editing, Meta marketing, and SEO.",
      "Portfolio and project-preview sections designed to introduce the agency's work to prospective clients.",
      "A published six-step process covering requirement analysis, UI/UX planning, agile development, QA, deployment, and ongoing support.",
      "Consultation and project-enquiry calls to action, plus published contact information.",
      "The public site describes Pixel & Code as based in Shariatpur and serving clients across Bangladesh.",
    ],
    projectNotes:
      "The listed technologies reflect the technology stack published on the agency website. They are presented as the agency's stated toolkit, not as an independent audit proving that every technology is used by every page of this particular marketing site. No public source repository or personal contribution breakdown is linked from this case study.",
    nextSteps: [
      "Add a public source-code or technical case-study link only if the agency has approved it for disclosure.",
      "Document the exact pages or implementation areas personally delivered before publishing a contribution claim.",
    ],
  },
  {
    slug: "real-foods",
    number: "04",
    title: "Real Foods — Bakery Storefront UI",
    category: "E-COMMERCE / STOREFRONT UI",
    projectType: "Bakery storefront prototype",
    summary:
      "A Next.js bakery storefront prototype with an animated bread, pastry, and cake carousel, featured product cards, brand storytelling, and promotional sections.",
    description:
      "Real Foods is presented as a bakery storefront concept. Its homepage combines a category-based hero carousel, featured bakery products, an about/brand story, special-offer content, and navigation for exploring the menu and account-related routes. The visual direction pairs warm bakery colours with animated product storytelling.",
    stack: ["Next.js", "React", "MongoDB", "Better Auth", "HeroUI", "Framer Motion", "Recharts"],
    status: "UI prototype",
    variant: "food",
    githubUrl: "https://github.com/RakibulhasanUtsho07/Real_Foods",
    liveUrl: "https://real-foods.vercel.app",
    highlights: [
      "Interactive hero carousel with separate bread, pastry, and cake slides, each with its own headline, description, imagery, and product details.",
      "Featured product-card grid showing a small bakery catalogue.",
      "About/brand-story and special-offer sections, including a deal-of-the-day presentation.",
      "Responsive navigation with public menu and about links, plus account, dashboard, cart, and order-history entry points in the interface.",
      "The repository includes Better Auth, MongoDB, HeroUI, Framer Motion, and Recharts dependencies.",
    ],
    projectNotes:
      "The featured-products component currently defines its products in a local mockBakeryProducts array, and its source comment says backend data can be connected later. The repository README is still the generic create-next-app starter README. This case study therefore describes the checked-in storefront UI and prototype flows; it does not claim a verified live checkout, production order service, or completed admin system.",
    nextSteps: [
      "Connect the featured catalogue and promotional content to a verified data source instead of the in-file mock array.",
      "Verify sign-in, cart, checkout, and order-history behaviour against the deployed environment before describing those flows as fully operational.",
      "Replace the generic repository README with project-specific setup, architecture, and deployment documentation.",
    ],
  },
];
