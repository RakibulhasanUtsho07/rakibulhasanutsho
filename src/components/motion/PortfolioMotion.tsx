"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PortfolioMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
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

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(element, { y: 32, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 0.85,
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

          gsap.fromTo(items, { y: 26, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.11,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          });
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
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".hero-scene-orbit--inner", {
          rotation: -55,
          scale: 0.88,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress__bar" />
    </div>
  );
}
