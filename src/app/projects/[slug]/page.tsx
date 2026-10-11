import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PortfolioMotion from "@/components/motion/PortfolioMotion";
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

  return (
    <div className="site-shell">
      <PortfolioMotion />
      <Navbar />
      <main className="project-page">
        <div className="page-width project-page-main">
          <Link className="project-back-link" href="/#work">← Back to selected work</Link>
          <div className="project-page-heading" data-reveal>
            <p className="section-kicker"><span>{project.number}</span> / {project.category.toUpperCase()}</p>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="project-overline"><span className="project-status">{project.status.toUpperCase()}</span></div>
          </div>
          <div className="project-page-art" data-reveal><ProjectVisual variant={project.variant} /></div>
          <div className="project-details-grid">
            <section data-reveal>
              <h2>What this project includes</h2>
              <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              {project.contribution ? <div className="project-contribution"><h2>My contribution</h2><p>{project.contribution}</p></div> : null}
              <h2 style={{ marginTop: 38 }}>Next steps</h2>
              <ul>{project.nextSteps.map((step) => <li key={step}>{step}</li>)}</ul>
            </section>
            <aside className="project-detail-aside" data-reveal>
              <h3>Technology</h3>
              <div className="tag-list">{project.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div>
              <h3 style={{ marginTop: 29 }}>Project links</h3>
              {project.githubUrl ? <a className="project-detail-link" href={project.githubUrl} target="_blank" rel="noreferrer">View source on GitHub ↗</a> : null}
              {project.liveUrl ? <a className="project-detail-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live website ↗</a> : null}
              {project.relatedLinks?.map((link) => <a className="project-detail-link" href={link.url} target="_blank" rel="noreferrer" key={link.url}>{link.label} ↗</a>)}
              {!project.githubUrl && !project.liveUrl && !project.relatedLinks?.length ? <p>Public repository and live links will be added when the exact shareable destinations are confirmed.</p> : null}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
