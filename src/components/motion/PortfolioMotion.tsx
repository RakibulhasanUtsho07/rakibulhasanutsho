"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PortfolioMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const motionPreference = gsap.matchMedia();

    motionPreference.add("(prefers-reduced-motion: no-preference)", () => {
      const cleanups: Array<() => void> = [];
      const context = gsap.context(() => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        intro
          .fromTo("[data-nav-reveal]", { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0)
          .fromTo("[data-hero-eyebrow]", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, 0.15)
          .fromTo("[data-hero-title-line]", { yPercent: 115, opacity: 0 }, {
            yPercent: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.13,
          }, 0.25)
          .fromTo("[data-hero-copy]", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.68)
          .fromTo("[data-hero-actions]", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, 0.82)
          .fromTo("[data-hero-meta]", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, 0.98)
          .fromTo("[data-hero-art]", { y: 24, opacity: 0, scale: 0.97 }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.1,
          }, 0.36);

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((element) => {
          const target = Number(element.dataset.count ?? "0");
          const counter = { value: 0 };
          element.textContent = "00";
          gsap.to(counter, {
            value: target,
            duration: 1.25,
            delay: 1.05,
            ease: "power2.out",
            onUpdate: () => { element.textContent = String(Math.round(counter.value)).padStart(2, "0"); },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(element, { y: 32, opacity: 0, scale: 0.99, filter: "blur(6px)" }, {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");
          if (!items.length) return;

          gsap.fromTo(items, { y: 30, opacity: 0, rotationX: 2, transformPerspective: 900 }, {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.78,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          });

          const projectPreviews = group.querySelectorAll<HTMLElement>(".project-card .project-visual");
          if (projectPreviews.length) {
            gsap.fromTo(projectPreviews, { y: 20, opacity: 0.45, scale: 0.94 }, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.9,
              stagger: 0.13,
              ease: "power3.out",
              scrollTrigger: {
                trigger: group,
                start: "top 82%",
                once: true,
              },
            });
          }
        });

        gsap.to(".scroll-progress__bar", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.25,
          },
        });

        gsap.to(".hero-scene-orbit--outer", {
          rotation: 42,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
        });

        gsap.to(".hero-scene-orbit--inner", {
          rotation: -55,
          scale: 0.88,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
        });

        gsap.to(".about-portrait-frame", {
          y: -12,
          ease: "none",
          scrollTrigger: { trigger: ".about-section", start: "top bottom", end: "bottom top", scrub: 0.8 },
        });

        // Subtle portrait tilt on pointer devices; touch users keep a stable image.
        const portrait = document.querySelector<HTMLElement>(".about-portrait-frame");
        if (portrait && window.matchMedia("(pointer: fine)").matches) {
          gsap.set(portrait, { transformPerspective: 1000, transformStyle: "preserve-3d" });
          const rotateXTo = gsap.quickTo(portrait, "rotationX", { duration: 0.45, ease: "power3.out" });
          const rotateYTo = gsap.quickTo(portrait, "rotationY", { duration: 0.45, ease: "power3.out" });
          const move = (event: PointerEvent) => {
            const bounds = portrait.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / Math.max(bounds.width, 1) - 0.5;
            const y = (event.clientY - bounds.top) / Math.max(bounds.height, 1) - 0.5;
            rotateXTo(-y * 5);
            rotateYTo(x * 5);
          };
          const reset = () => { rotateXTo(0); rotateYTo(0); };
          portrait.addEventListener("pointermove", move);
          portrait.addEventListener("pointerleave", reset);
          cleanups.push(() => {
            portrait.removeEventListener("pointermove", move);
            portrait.removeEventListener("pointerleave", reset);
          });
        }

        // Small magnetic response on primary actions, limited to fine pointers.
        if (window.matchMedia("(pointer: fine)").matches) {
          gsap.utils.toArray<HTMLElement>(".button-primary").forEach((button) => {
            const xTo = gsap.quickTo(button, "x", { duration: 0.35, ease: "power3.out" });
            const yTo = gsap.quickTo(button, "y", { duration: 0.35, ease: "power3.out" });
            const move = (event: PointerEvent) => {
              const bounds = button.getBoundingClientRect();
              xTo(((event.clientX - bounds.left) / Math.max(bounds.width, 1) - 0.5) * 7);
              yTo(((event.clientY - bounds.top) / Math.max(bounds.height, 1) - 0.5) * 5);
            };
            const reset = () => { xTo(0); yTo(0); };
            button.addEventListener("pointermove", move);
            button.addEventListener("pointerleave", reset);
            cleanups.push(() => {
              button.removeEventListener("pointermove", move);
              button.removeEventListener("pointerleave", reset);
            });
          });
        }
      });

      const desktopMotion = gsap.matchMedia();
      desktopMotion.add("(min-width: 900px)", () => {
        const featuredVisual = document.querySelector<HTMLElement>(".featured-project-art .project-visual");
        if (!featuredVisual) return;

        gsap.fromTo(featuredVisual, {
          yPercent: 4,
          scale: 0.96,
          rotationY: -3,
          transformPerspective: 1100,
        }, {
          yPercent: -4,
          scale: 1.025,
          rotationY: 2,
          ease: "none",
          scrollTrigger: { trigger: ".featured-project", start: "top bottom", end: "bottom top", scrub: 0.8 },
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => {
        cleanups.forEach((cleanup) => cleanup());
        context.revert();
        desktopMotion.revert();
      };
    });

    return () => motionPreference.revert();
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress__bar" />
    </div>
  );
}
