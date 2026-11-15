import Image from "next/image";
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
  {
    title: "Backend & API",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Role-Based Access Control", "Validation", "Rate Limiting", "BullMQ", "Redis"],
  },
  {
    title: "Data & Infrastructure",
    skills: ["SQL", "PostgreSQL", "MongoDB", "Mongoose", "Redis", "Docker", "AWS", "Vercel"],
  },
  {
    title: "Frontend & Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js"],
  },
  {
    title: "Workflow & Collaboration",
    skills: ["Git", "GitHub", "GitHub Projects", "Jira", "Agile / Scrum", "Debugging", "Error Handling", "Basic Testing"],
  },
  {
    title: "AI Tools & Languages",
    skills: ["ChatGPT", "Claude", "Gemini", "Bengali", "English"],
  },
];

const processSteps = [
  { number: "01", title: "Understand", description: "Clarify the product goal, the people using it, and the workflows the system needs to support." },
  { number: "02", title: "Model", description: "Plan API boundaries, data relationships, validation rules, and access responsibilities." },
  { number: "03", title: "Build", description: "Implement maintainable services and connect them to clear, useful product interfaces." },
  { number: "04", title: "Verify", description: "Debug important flows, handle errors deliberately, and refine the experience." },
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
                <span className="eyebrow-dot" /> BACKEND DEVELOPER <span className="eyebrow-separator">/</span> BANGLADESH
              </p>
              <h1 className="hero-title" id="hero-title">
                <span className="hero-title-line" data-hero-title-line>Engineering reliable</span>
                <span className="hero-title-line" data-hero-title-line>backend systems for</span>
                <span className="hero-title-line hero-title-line--accent" data-hero-title-line>digital products.</span>
              </h1>
              <p className="hero-description" data-hero-copy>
                I build backend services and REST APIs with Node.js and Express, working across PostgreSQL, MongoDB, and Redis to support useful full-stack products.
              </p>
              <div className="hero-actions" data-hero-actions>
                <Link className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↗</span></Link>
                <a className="button button-quiet" href={site.emailUrl}>Let’s connect <span aria-hidden="true">↗</span></a>
              </div>
              <div className="hero-meta" data-hero-meta>
                <div className="hero-meta-item">
                  <span className="hero-meta-label">FOCUS</span>
                  <span className="hero-meta-value">Backend & API engineering</span>
                </div>
                <div className="hero-meta-divider" />
                <div className="hero-meta-item">
                  <span className="hero-meta-label">WORKING WITH</span>
                  <span className="hero-meta-value">Node.js · SQL · MongoDB</span>
                </div>
              </div>
              <div className="hero-stats" aria-label="Portfolio overview">
                <div className="hero-stat"><span className="hero-stat-value" data-count="4">04</span><span className="hero-stat-label">PROJECT STUDIES</span></div>
                <div className="hero-stat"><span className="hero-stat-value" data-count="5">05</span><span className="hero-stat-label">SKILL GROUPS</span></div>
              </div>
            </div>
            <div className="hero-art" data-hero-art>
              <div className="hero-art-topline"><span>SYSTEMS IN MOTION</span><span className="hero-art-coordinates">BACKEND / REALTIME</span></div>
              <div className="hero-scene-frame">
                <div className="hero-scene-orbit hero-scene-orbit--outer" aria-hidden="true" />
                <div className="hero-scene-orbit hero-scene-orbit--inner" aria-hidden="true" />
                <HeroSceneLoader />
                <div className="scene-label scene-label--top"><span className="scene-label-dot" />API / DATA / SYSTEMS</div>
                <div className="scene-label scene-label--bottom"><span>ENGINEERED WITH INTENT</span><span aria-hidden="true">↓</span></div>
              </div>
              <div className="hero-art-bottomline"><span>01 — BUILD WITH PURPOSE</span><span>NODE · DATA · PRODUCT</span></div>
            </div>
          </div>
          <a className="hero-scroll-cue" href="#work" aria-label="Scroll to selected work"><span className="scroll-cue-line" /><span>SCROLL TO EXPLORE</span></a>
          <span className="hero-index" aria-hidden="true">01 <i /> 06</span>
        </section>

        <section className="ticker-section" aria-label="Technology focus">
          <div className="ticker-label">TOOLS I WORK WITH</div>
          <div className="ticker-window">
            <div className="ticker-track" aria-hidden="true">
              {[0, 1].map((copy) => (
                <div className="ticker-group" key={copy}>
                  {["NODE.JS", "EXPRESS", "POSTGRESQL", "MONGODB", "REDIS", "TYPESCRIPT", "NEXT.JS", "BULLMQ"].map((item) => (
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
                <h2 className="section-title" id="work-title">Practical ideas.<br /><em>Thoughtful engineering.</em></h2>
              </div>
              <p className="section-intro">A selection of work across digital-payment interfaces, recruitment workflows, digital services, and food-commerce experiences — with clear technical decisions and honest project scope.</p>
            </div>

            <article className="featured-project" data-reveal>
              <div className="featured-project-copy">
                <div className="project-overline">
                  <span className="project-number">{featuredProject.number}</span>
                  <span className="project-status"><span className="status-pulse" /> {featuredProject.status.toUpperCase()}</span>
                </div>
                <p className="project-category">{featuredProject.category.toUpperCase()}</p>
                <h3>{featuredProject.title}<br /><em>Product storytelling & responsive interface design.</em></h3>
                <p className="project-description">{featuredProject.summary}</p>
                <div className="tag-list">{featuredProject.stack.slice(0, 6).map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div>
                <div className="project-actions">
                  <Link className="text-link" href={"/projects/" + featuredProject.slug}>Explore case study <span aria-hidden="true">↗</span></Link>
                  {featuredProject.githubUrl ? <a className="text-link text-link-muted" href={featuredProject.githubUrl} target="_blank" rel="noreferrer">Frontend source <span aria-hidden="true">↗</span></a> : null}
                  {featuredProject.relatedLinks?.[0] ? <a className="text-link text-link-muted" href={featuredProject.relatedLinks[0].url} target="_blank" rel="noreferrer">Backend API <span aria-hidden="true">↗</span></a> : null}
                </div>
              </div>
              <div className="featured-project-art">
                <div className="featured-art-top"><span><span className="live-indicator" /> SELECTED PROJECT / DIGITAL PAYMENTS</span><span>API / OPERATIONS</span></div>
                <ProjectVisual variant={featuredProject.variant} />
                <div className="featured-art-bottom"><span>WALLET · KYC · TRANSACTIONS</span><span className="featured-art-coords">UI + API</span></div>
              </div>
            </article>

            <div className="projects-subheading" data-reveal>
              <h3>More selected work <span>({String(otherProjects.length).padStart(2, "0")})</span></h3>
              <span>PRODUCTS / INTERFACES / ENGINEERING</span>
            </div>
            <div className="projects-grid" data-stagger>
              {otherProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
            <div className="work-note" data-reveal><span className="work-note-symbol">↳</span><p>Project pages distinguish documented implementation from experiments and next steps. No unverified business metrics or production claims are presented.</p></div>
          </div>
        </section>

        <section className="section stack-section section-grid" id="stack" aria-labelledby="stack-title">
          <div className="stack-grid-overlay" aria-hidden="true" />
          <div className="page-width stack-content">
            <div className="section-heading section-heading-light" data-reveal>
              <div><p className="section-kicker"><span>03</span> / TECHNICAL TOOLKIT</p><h2 className="section-title" id="stack-title">A practical stack.<br /><em>Chosen with purpose.</em></h2></div>
              <p className="section-intro">Backend technologies, databases, frontend tools, and collaboration practices used across my learning and project work.</p>
            </div>
            <div className="skill-groups" data-stagger>
              {skillGroups.map((group, index) => (
                <div className="skill-group" data-stagger-item key={group.title}>
                  <div className="skill-group-index">0{index + 1}</div>
                  <div className="skill-group-content"><h3>{group.title}</h3><div className="skill-chip-list">{group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div></div>
                </div>
              ))}
            </div>
            <div className="stack-footer" data-reveal><span className="stack-footer-line" /><p>Keep learning. Build carefully. Improve continuously.</p></div>
          </div>
        </section>

        <section className="section approach-section" id="approach" aria-labelledby="approach-title">
          <div className="page-width">
            <div className="section-heading" data-reveal>
              <div><p className="section-kicker"><span>04</span> / HOW I APPROACH WORK</p><h2 className="section-title" id="approach-title">Clear thinking.<br /><em>Reliable execution.</em></h2></div>
              <p className="section-intro">I try to understand the workflow first, make deliberate technical decisions, and refine the implementation around reliability and usability.</p>
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
            <div className="about-mark about-portrait-panel" data-reveal>
              <div className="about-portrait-frame">
                <Image
                  src="/images/utsho-portrait.webp"
                  alt="Portrait of Rakibul Hasan Utsho"
                  fill
                  sizes="(max-width: 780px) 90vw, 38vw"
                  className="about-portrait-image"
                />
                <div className="about-portrait-shade" aria-hidden="true" />
                <span className="portrait-corner portrait-corner--tl" aria-hidden="true" />
                <span className="portrait-corner portrait-corner--br" aria-hidden="true" />
              </div>
              <div className="about-mark-caption"><span>RAKIBUL HASAN UTSHO</span><span>BUILDING · LEARNING · REFINING</span></div>
            </div>

            <div className="about-copy" data-reveal>
              <p className="section-kicker"><span>05</span> / A LITTLE ABOUT ME</p>
              <h2 className="section-title" id="about-title">Curious about systems.<br /><em>Focused on useful software.</em></h2>
              <p>I’m an honours student and full-stack developer based in Bangladesh, focused on backend services, REST APIs, and data-driven web applications.</p>
              <p>My project work spans a digital-wallet interface, a full-stack job-tracking application, a bakery storefront prototype, and a digital-agency website. I enjoy troubleshooting, learning new business domains, and working with people to move projects forward.</p>
              <div className="about-education">
                <span className="about-detail-label">EDUCATION</span>
                <span>Bachelor of Honours (1st Year) · National University, Bangladesh · In Progress</span>
              </div>
              <div className="about-values"><span>BUILD WITH PURPOSE</span><span>KEEP LEARNING</span><span>MAKE DETAILS MATTER</span></div>
            </div>
          </div>
          <div className="page-width leadership-wrap" data-reveal>
            <article className="leadership-card">
              <div className="leadership-card-top"><span>LEADERSHIP EXPERIENCE</span><span>2025 — PRESENT</span></div>
              <div className="leadership-card-main">
                <div><h3>Scrum Team Leader & Project Coordinator</h3><p>Agile Software Development Teams</p></div>
                <span className="leadership-mark" aria-hidden="true">↗</span>
              </div>
              <p className="leadership-description">Led regular stand-ups, tracked task progress in Jira and GitHub Projects, documented workflows, helped onboard team members, and coordinated communication between developers, designers, and project mentors.</p>
              <div className="leadership-tags"><span>Agile / Scrum</span><span>Jira</span><span>GitHub Projects</span><span>Team Coordination</span></div>
            </article>
          </div>
        </section>

        <section className="contact-section section-grid" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid-overlay" aria-hidden="true" />
          <div className="page-width contact-content" data-reveal>
            <p className="section-kicker"><span>06</span> / GET IN TOUCH</p>
            <p className="contact-overline">HAVE A GOOD PROBLEM TO SOLVE?</p>
            <h2 id="contact-title">Let’s build<br /><em>something useful.</em></h2>
            <p className="contact-description">Open to connecting with engineering teams, developers, and people building useful products for the web.</p>
            <div className="contact-actions">
              <a className="button button-primary button-large" href={site.emailUrl}>Email me <span aria-hidden="true">↗</span></a>
              <a className="button button-quiet button-large" href={site.linkedinUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
            <a className="contact-email" href={site.emailUrl}>{site.email}</a>
            <div className="contact-orbit contact-orbit--one" aria-hidden="true" /><div className="contact-orbit contact-orbit--two" aria-hidden="true" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
