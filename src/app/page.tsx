import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSceneLoader from "@/components/three/HeroSceneLoader";
import PortfolioMotion from "@/components/motion/PortfolioMotion";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const featuredProject = projects.find((project) => project.featured) ?? projects[0];
const otherProjects = projects.filter((project) => project.slug !== featuredProject.slug);

const skillGroups = [
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Accessible UI"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "RBAC"] },
  { title: "Data & tools", skills: ["MongoDB", "Mongoose", "Git", "GitHub", "Vercel", "Recharts"] },
  { title: "Motion & interaction", skills: ["GSAP", "ScrollTrigger", "Three.js", "Framer Motion", "WebGL", "Micro-interactions"] },
];

const processSteps = [
  { number: "01", title: "Understand", description: "Clarify the problem, the people using the product, and what a useful outcome looks like." },
  { number: "02", title: "Architect", description: "Separate responsibilities, define data flows, and make deliberate technology choices." },
  { number: "03", title: "Build", description: "Turn the plan into clear interfaces, reliable APIs, and reusable components." },
  { number: "04", title: "Refine", description: "Test important flows, tune performance, and polish the interaction details." },
];

export default function Home() {
  return (
    <div className="site-shell">
      <PortfolioMotion />
      <Navbar />
      <main>
        <section className="hero section-grid" id="home" aria-labelledby="hero-title">
          <div className="hero-grid-overlay" aria-hidden="true" />
          <div className="hero-glow hero-glow--one" aria-hidden="true" />
          <div className="hero-glow hero-glow--two" aria-hidden="true" />
          <div className="hero-layout page-width">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow" data-hero-eyebrow>
                <span className="eyebrow-dot" /> MERN FULL-STACK DEVELOPER <span className="eyebrow-separator">/</span> BANGLADESH
              </p>
              <h1 className="hero-title" id="hero-title">
                <span className="hero-title-line" data-hero-title-line>Building digital</span>
                <span className="hero-title-line" data-hero-title-line>experiences that</span>
                <span className="hero-title-line hero-title-line--accent" data-hero-title-line>move beyond.</span>
              </h1>
              <p className="hero-description" data-hero-copy>
                I build full-stack products and thoughtful interfaces — from reliable APIs and operations dashboards to polished customer experiences.
              </p>
              <div className="hero-actions" data-hero-actions>
                <Link className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↗</span></Link>
                <a className="button button-quiet" href={site.linkedinUrl} target="_blank" rel="noreferrer">Let’s connect <span aria-hidden="true">↗</span></a>
              </div>
              <div className="hero-meta" data-hero-meta>
                <div className="hero-meta-item"><span className="hero-meta-label">FOCUS</span><span className="hero-meta-value">Full-stack engineering</span></div>
                <div className="hero-meta-divider" />
                <div className="hero-meta-item"><span className="hero-meta-label">EXPLORING</span><span className="hero-meta-value">Motion & interaction</span></div>
              </div>
            </div>
            <div className="hero-art" data-hero-art>
              <div className="hero-art-topline"><span>INTERACTIVE SYSTEMS</span><span className="hero-art-coordinates">MOTION / REALTIME</span></div>
              <div className="hero-scene-frame">
                <div className="hero-scene-orbit hero-scene-orbit--outer" aria-hidden="true" />
                <div className="hero-scene-orbit hero-scene-orbit--inner" aria-hidden="true" />
                <HeroSceneLoader />
                <div className="scene-label scene-label--top"><span className="scene-label-dot" />PRODUCT / UI</div>
                <div className="scene-label scene-label--bottom"><span>INTERACTION / MOTION</span><span aria-hidden="true">↓</span></div>
              </div>
              <div className="hero-art-bottomline"><span>01 — ENGINEERED WITH INTENT</span><span>PRODUCT · DATA · SYSTEMS</span></div>
            </div>
          </div>
          <a className="hero-scroll-cue" href="#work" aria-label="Scroll to selected work"><span className="scroll-cue-line" /><span>SCROLL TO EXPLORE</span></a>
          <span className="hero-index" aria-hidden="true">01 <i /> 05</span>
        </section>

        <section className="ticker-section" aria-label="Technology focus">
          <div className="ticker-label">TOOLS IN MOTION</div>
          <div className="ticker-window">
            <div className="ticker-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <div className="ticker-group" key={copy}>
                  {["NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS", "GSAP", "FRAMER MOTION", "STRIPE", "MONGODB"].map((item) => (
                    <span className="ticker-item" key={item + copy}><span className="ticker-star">✳</span>{item}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="page-width">
            <div className="section-heading" data-reveal>
              <div>
                <p className="section-kicker"><span>02</span> / SELECTED WORK</p>
                <h2 className="section-title" id="work-title">Ideas, shaped <em>into systems.</em></h2>
              </div>
              <p className="section-intro">A selection of products and engineering experiments focused on useful functionality, clear interfaces, and thoughtful technical decisions.</p>
            </div>
            <article className="featured-project" data-reveal>
              <div className="featured-project-copy">
                <div className="project-overline">
                  <span className="project-number">{featuredProject.number}</span>
                  <span className="project-status"><span className="status-pulse" /> {featuredProject.status.toUpperCase()}</span>
                </div>
                <p className="project-category">{featuredProject.category.toUpperCase()}</p>
                <h3>Better money tools.<br /><em>Built around real workflows.</em></h3>
                <p className="project-description">{featuredProject.summary}</p>
                <div className="tag-list">{featuredProject.stack.slice(0, 6).map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div>
                <div className="project-actions">
                  <Link className="text-link" href={"/projects/" + featuredProject.slug}>Explore case study <span aria-hidden="true">↗</span></Link>
                  <a className="text-link text-link-muted" href={featuredProject.githubUrl} target="_blank" rel="noreferrer">Frontend source <span aria-hidden="true">↗</span></a>
                  {featuredProject.relatedLinks?.[0] ? <a className="text-link text-link-muted" href={featuredProject.relatedLinks[0].url} target="_blank" rel="noreferrer">Backend API <span aria-hidden="true">↗</span></a> : null}
                </div>
              </div>
              <div className="featured-project-art">
                <div className="featured-art-top"><span><span className="live-indicator" /> SELECTED PROJECT / FRONTEND</span><span>FINTECH / SYSTEMS</span></div>
                <ProjectVisual variant={featuredProject.variant} />
                <div className="featured-art-bottom"><span>WALLET · KYC · OPERATIONS</span><span className="featured-art-coords">UI + API</span></div>
              </div>
            </article>
            <div className="projects-subheading" data-reveal>
              <h3>More selected work <span>({String(otherProjects.length).padStart(2, "0")})</span></h3>
              <span>PRODUCTS / INTERFACES / ENGINEERING</span>
            </div>
            <div className="projects-grid" data-stagger>
              {otherProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="work-note" data-reveal><span className="work-note-symbol">↳</span><p>Each case study separates shipped functionality from experiments and future plans. No demo metrics or capabilities are presented as verified production results.</p></div>
          </div>
        </section>

        <section className="section stack-section section-grid" id="stack" aria-labelledby="stack-title">
          <div className="stack-grid-overlay" aria-hidden="true" />
          <div className="page-width stack-content">
            <div className="section-heading section-heading-light" data-reveal>
              <div><p className="section-kicker"><span>03</span> / THE TOOLKIT</p><h2 className="section-title" id="stack-title">The right tool<br /><em>for the right job.</em></h2></div>
              <p className="section-intro">A practical stack across product UI, backend workflows, data, and interaction design. Tools are chosen for the problem, not for the trend.</p>
            </div>
            <div className="skill-groups" data-stagger>
              {skillGroups.map((group, index) => (
                <div className="skill-group" data-stagger-item key={group.title}>
                  <div className="skill-group-index">0{index + 1}</div>
                  <div className="skill-group-content"><h3>{group.title}</h3><div className="skill-chip-list">{group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div></div>
                </div>
              ))}
            </div>
            <div className="stack-footer" data-reveal><span className="stack-footer-line" /><p>Curious by default. Deliberate by design.</p></div>
          </div>
        </section>

        <section className="section approach-section" id="approach" aria-labelledby="approach-title">
          <div className="page-width">
            <div className="section-heading" data-reveal>
              <div><p className="section-kicker"><span>04</span> / HOW I WORK</p><h2 className="section-title" id="approach-title">Thoughtful by design.<br /><em>Precise in execution.</em></h2></div>
              <p className="section-intro">Good software is more than a polished screen. It is a set of clear decisions that hold together from the first interaction to the underlying data.</p>
            </div>
            <div className="process-grid" data-stagger>
              {processSteps.map((step) => (
                <article className="process-card" data-stagger-item key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <div className="process-icon" aria-hidden="true">{step.number === "01" ? "⌕" : step.number === "02" ? "⌘" : step.number === "03" ? "↗" : "✳"}</div>
                  <h3>{step.title}</h3><p>{step.description}</p><span className="process-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="page-width about-layout">
            <div className="about-mark" data-reveal><div className="about-mark-grid" aria-hidden="true" /><div className="about-monogram">U<span>.</span></div><div className="about-mark-caption"><span>RAKIBUL HASAN UTSHO</span><span>BUILDING, LEARNING, REFINING.</span></div></div>
            <div className="about-copy" data-reveal>
              <p className="section-kicker"><span>05</span> / A LITTLE ABOUT ME</p>
              <h2 className="section-title" id="about-title">I like solving problems<br />with <em>clarity and curiosity.</em></h2>
              <p>I’m a Bangladesh-based developer focused on building responsive web applications with React, Next.js, Node.js, Express, MongoDB, and TypeScript.</p>
              <p>My projects span fintech interfaces, authentication and API workflows, product and order management, and booking experiences. I care about maintainable architecture just as much as the details people interact with.</p>
              <div className="about-values"><span>BUILD WITH PURPOSE</span><span>KEEP LEARNING</span><span>MAKE DETAILS MATTER</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-grid" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid-overlay" aria-hidden="true" />
          <div className="page-width contact-content" data-reveal>
            <p className="section-kicker"><span>06</span> / NEXT UP</p>
            <p className="contact-overline">HAVE A GOOD PROBLEM TO SOLVE?</p>
            <h2 id="contact-title">Let’s make<br /><em>something meaningful.</em></h2>
            <p className="contact-description">Open to connecting with developers, teams, and people building useful things for the web.</p>
            <a className="button button-primary button-large" href={site.linkedinUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
            <div className="contact-orbit contact-orbit--one" aria-hidden="true" /><div className="contact-orbit contact-orbit--two" aria-hidden="true" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
