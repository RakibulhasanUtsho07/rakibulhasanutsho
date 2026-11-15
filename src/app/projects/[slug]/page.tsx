import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PortfolioMotion from "@/components/motion/PortfolioMotion";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title + " | Utsho.dev",
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const relatedProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <div className="site-shell">
      <PortfolioMotion />
      <Navbar />
      <main className="project-page project-page-v2">
        <div className="page-width project-page-main">
          <Link className="project-back-link" href="/#work">← Back to selected work</Link>

          <header className="project-detail-hero" data-reveal>
            <div className="project-detail-heading">
              <p className="section-kicker"><span>{project.number}</span> / {project.category}</p>
              <h1>{project.title}</h1>
              <p className="project-detail-summary">{project.summary}</p>
            </div>
            <div className="project-detail-status-panel">
              <span className="project-detail-status"><i />{project.status}</span>
              <span className="project-detail-type">{project.projectType}</span>
              <span className="project-detail-owner">CASE STUDY / {project.number}</span>
            </div>
          </header>

          <div className="project-detail-meta" data-reveal>
            <div><span>PROJECT</span><strong>{project.projectType}</strong></div>
            <div><span>STATUS</span><strong>{project.status}</strong></div>
            <div><span>FOCUS</span><strong>{project.category}</strong></div>
          </div>

          <figure className="project-detail-visual" data-reveal>
            <div className="project-detail-visual-label"><span>PROJECT VISUAL</span><span>ILLUSTRATIVE PREVIEW</span></div>
            <ProjectVisual variant={project.variant} />
            <figcaption>Stylised visual preview for this case study — not a screenshot or a claim that every pictured element is live.</figcaption>
          </figure>

          <div className="project-details-grid project-details-grid-v2">
            <div className="project-detail-main">
              <section className="project-detail-section" data-reveal>
                <p className="section-kicker"><span>01</span> / OVERVIEW</p>
                <h2>What this project is</h2>
                <p>{project.description}</p>
              </section>

              <section className="project-detail-section" data-reveal>
                <p className="section-kicker"><span>02</span> / DOCUMENTED SCOPE</p>
                <h2>What’s included</h2>
                <div className="project-highlight-grid">
                  {project.highlights.map((highlight, index) => (
                    <article className="project-highlight-card" key={highlight}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{highlight}</p>
                    </article>
                  ))}
                </div>
              </section>

              {project.contribution ? (
                <section className="project-detail-contribution" data-reveal>
                  <p className="section-kicker"><span>03</span> / CONTRIBUTION</p>
                  <h2>My contribution</h2>
                  <p>{project.contribution}</p>
                </section>
              ) : null}

              <section className="project-detail-notes" data-reveal>
                <p className="section-kicker"><span>04</span> / SCOPE & LIMITATIONS</p>
                <h2>Important implementation notes</h2>
                <p>{project.projectNotes}</p>
              </section>

              <section className="project-detail-next" data-reveal>
                <p className="section-kicker"><span>05</span> / CONTINUED DEVELOPMENT</p>
                <h2>Next steps</h2>
                <ul>
                  {project.nextSteps.map((step) => <li key={step}>{step}</li>)}
                </ul>
              </section>
            </div>

            <aside className="project-detail-aside project-detail-aside-v2" data-reveal>
              <div className="project-aside-block">
                <p className="project-aside-kicker">TECHNICAL PROFILE</p>
                <h3>Technology</h3>
                <div className="project-tech-list">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>

              <div className="project-aside-block">
                <p className="project-aside-kicker">EXPLORE THE PROJECT</p>
                <h3>Project links</h3>
                <div className="project-detail-links">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <span><small>LIVE / DEMO</small>{project.status === "Live website" ? "Visit website" : "Open live demo"}</span>
                      <b>↗</b>
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <span><small>SOURCE CODE</small>View on GitHub</span>
                      <b>↗</b>
                    </a>
                  ) : null}
                  {project.relatedLinks?.map((link) => (
                    <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                      <span><small>RELATED RESOURCE</small>{link.label}</span>
                      <b>↗</b>
                    </a>
                  ))}
                </div>
                {!project.liveUrl && !project.githubUrl && !project.relatedLinks?.length ? (
                  <p className="project-links-empty">Public links will be added when the exact shareable destinations are confirmed.</p>
                ) : null}
              </div>

              <div className="project-aside-note">
                <span>DOCUMENTATION STANDARD</span>
                <p>Capabilities are described from the available project source or public website. Unverified metrics and production claims are intentionally excluded.</p>
              </div>
            </aside>
          </div>

          <section className="project-related-section" data-reveal>
            <div className="project-related-heading">
              <div><p className="section-kicker"><span>06</span> / MORE WORK</p><h2>Explore other projects</h2></div>
              <Link href="/#work">All selected work ↗</Link>
            </div>
            <div className="project-related-grid">
              {relatedProjects.map((item) => <ProjectCard key={item.slug} project={item} />)}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
