import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectVisual from "@/components/ui/ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card" data-stagger-item>
      <Link href={"/projects/" + project.slug} aria-label={"Read the " + project.title + " case study"}>
        <ProjectVisual variant={project.variant} compact />
      </Link>
      <div className="project-card-head">
        <span>{project.number} / {project.category.toUpperCase()}</span>
        <Link className="project-card-arrow" href={"/projects/" + project.slug} aria-label={"Open " + project.title}>↗</Link>
      </div>
      <h3><Link href={"/projects/" + project.slug}>{project.title}</Link></h3>
      <p className="project-card-description">{project.summary}</p>
      <div className="project-card-stack">{project.stack.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}</div>
      <div className="project-card-footer">
        <span className="project-card-status">{project.status}</span>
        <Link className="project-card-link" href={"/projects/" + project.slug}>Read case study ↗</Link>
      </div>
    </article>
  );
}
