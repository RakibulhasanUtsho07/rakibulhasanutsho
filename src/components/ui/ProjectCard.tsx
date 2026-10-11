"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import gsap from "gsap";
import type { Project } from "@/data/projects";
import ProjectVisual from "@/components/ui/ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const tiltXTo = useRef<((value: number) => void) | null>(null);
  const tiltYTo = useRef<((value: number) => void) | null>(null);
  const liftTo = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      tiltXTo.current = gsap.quickTo(card, "rotationY", {
        duration: 0.35,
        ease: "power3.out",
      });
      tiltYTo.current = gsap.quickTo(card, "rotationX", {
        duration: 0.35,
        ease: "power3.out",
      });
      liftTo.current = gsap.quickTo(card, "y", {
        duration: 0.3,
        ease: "power3.out",
      });
    }, card);

    return () => {
      context.revert();
      tiltXTo.current = null;
      tiltYTo.current = null;
      liftTo.current = null;
    };
  }, []);

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || !tiltXTo.current || !tiltYTo.current) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / Math.max(bounds.width, 1) - 0.5;
    const normalizedY = (event.clientY - bounds.top) / Math.max(bounds.height, 1) - 0.5;

    event.currentTarget.style.setProperty("--spot-x", (normalizedX + 0.5) * 100 + "%");
    event.currentTarget.style.setProperty("--spot-y", (normalizedY + 0.5) * 100 + "%");
    tiltXTo.current(normalizedX * 4.5);
    tiltYTo.current(-normalizedY * 4.5);
    liftTo.current?.(-5);
  }

  function resetPointer() {
    tiltXTo.current?.(0);
    tiltYTo.current?.(0);
    liftTo.current?.(0);
  }

  return (
    <article
      className="project-card"
      data-stagger-item
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
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
        {project.githubUrl ? <a className="project-card-link" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a> : <Link className="project-card-link" href={"/projects/" + project.slug}>Read case study ↗</Link>}
      </div>
    </article>
  );
}
