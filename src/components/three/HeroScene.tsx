"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

export default function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: any;
    let animationFrame = 0;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    let isInViewport = true;
    let scrollTween: gsap.core.Tween | null = null;
    let scene: any;
    let camera: any;
    let group: any;
    let pointerHandler: ((event: PointerEvent) => void) | null = null;
    let pointerLeaveHandler: (() => void) | null = null;
    let visibilityHandler: (() => void) | null = null;
    let pointerX = 0;
    let pointerY = 0;
    const scrollState = { turn: 0 };

    try {
      gsap.registerPlugin(ScrollTrigger);
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
      camera.position.set(0, 0, 6.8);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(host.clientWidth || 520, host.clientHeight || 520, false);
      renderer.setClearColor(0x080c16, 0);
      host.appendChild(renderer.domElement);

      group = new THREE.Group();
      scene.add(group);

      const innerCore = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.02, 2),
        new THREE.MeshBasicMaterial({
          color: 0x10264b,
          transparent: true,
          opacity: 0.62,
        }),
      );
      group.add(innerCore);

      const wireShell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.35, 2),
        new THREE.MeshBasicMaterial({
          color: 0x4b87ff,
          wireframe: true,
          transparent: true,
          opacity: 0.36,
        }),
      );
      group.add(wireShell);

      const innerShell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.9, 1),
        new THREE.MeshBasicMaterial({
          color: 0x61dfe1,
          wireframe: true,
          transparent: true,
          opacity: 0.2,
        }),
      );
      group.add(innerShell);

      const ringOne = new THREE.Mesh(
        new THREE.TorusGeometry(1.79, 0.008, 8, 150),
        new THREE.MeshBasicMaterial({ color: 0x5de1de, transparent: true, opacity: 0.5 }),
      );
      ringOne.rotation.x = 1.12;
      ringOne.rotation.y = 0.32;
      group.add(ringOne);

      const ringTwo = new THREE.Mesh(
        new THREE.TorusGeometry(1.94, 0.006, 8, 150),
        new THREE.MeshBasicMaterial({ color: 0x3b73ee, transparent: true, opacity: 0.45 }),
      );
      ringTwo.rotation.x = 0.36;
      ringTwo.rotation.y = -0.72;
      group.add(ringTwo);

      const nodeCount = 260;
      const nodePositions = new Float32Array(nodeCount * 3);
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      for (let index = 0; index < nodeCount; index += 1) {
        const y = 1 - (index / (nodeCount - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const angle = goldenAngle * index;
        const offset = index * 3;
        nodePositions[offset] = Math.cos(angle) * radius * 1.37;
        nodePositions[offset + 1] = y * 1.37;
        nodePositions[offset + 2] = Math.sin(angle) * radius * 1.37;
      }

      const nodeGeometry = new THREE.BufferGeometry();
      nodeGeometry.setAttribute("position", new THREE.Float32BufferAttribute(nodePositions, 3));
      group.add(new THREE.Points(
        nodeGeometry,
        new THREE.PointsMaterial({
          color: 0x8dc5ff,
          size: 0.026,
          transparent: true,
          opacity: 0.95,
          sizeAttenuation: true,
        }),
      ));

      const linePositions: number[] = [];
      for (let index = 0; index < nodeCount; index += 1) {
        const nextIndex = (index + 13) % nodeCount;
        const currentOffset = index * 3;
        const nextOffset = nextIndex * 3;
        linePositions.push(
          nodePositions[currentOffset],
          nodePositions[currentOffset + 1],
          nodePositions[currentOffset + 2],
          nodePositions[nextOffset],
          nodePositions[nextOffset + 1],
          nodePositions[nextOffset + 2],
        );
      }
      const linksGeometry = new THREE.BufferGeometry();
      linksGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
      group.add(new THREE.LineSegments(
        linksGeometry,
        new THREE.LineBasicMaterial({ color: 0x3d83f5, transparent: true, opacity: 0.12 }),
      ));

      const floorGrid = new THREE.GridHelper(7, 24, 0x23508a, 0x17365f);
      floorGrid.rotation.x = Math.PI / 2;
      floorGrid.position.z = -1.8;
      (floorGrid.material as any).transparent = true;
      (floorGrid.material as any).opacity = 0.24;
      group.add(floorGrid);

      const resize = () => {
        if (!renderer || !camera) return;
        const width = Math.max(host.clientWidth, 1);
        const height = Math.max(host.clientHeight, 1);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        if (reducedMotion && isInViewport && document.visibilityState === "visible") {
          camera.lookAt(0, 0, 0);
          renderer.render(scene, camera);
        }
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);

      if (window.matchMedia("(pointer: fine)").matches && !reducedMotion) {
        pointerHandler = (event: PointerEvent) => {
          const bounds = host.getBoundingClientRect();
          pointerX = ((event.clientX - bounds.left) / Math.max(bounds.width, 1) - 0.5) * 2;
          pointerY = ((event.clientY - bounds.top) / Math.max(bounds.height, 1) - 0.5) * 2;
        };
        pointerLeaveHandler = () => {
          pointerX = 0;
          pointerY = 0;
        };
        host.addEventListener("pointermove", pointerHandler);
        host.addEventListener("pointerleave", pointerLeaveHandler);
      }

      const render = () => {
        animationFrame = 0;
        if (document.visibilityState !== "visible" || !isInViewport) return;

        if (!reducedMotion) {
          group.rotation.y += 0.0018;
          group.rotation.x += (pointerY * 0.16 - group.rotation.x) * 0.025;
          group.rotation.z += (pointerX * 0.08 - group.rotation.z) * 0.025;
          group.rotation.y += scrollState.turn * 0.001;
          camera.position.x += (pointerX * 0.2 - camera.position.x) * 0.02;
          camera.position.y += (-pointerY * 0.16 - camera.position.y) * 0.02;
        }
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
        if (!reducedMotion) {
          animationFrame = window.requestAnimationFrame(render);
        }
      };

      const startRendering = () => {
        if (!animationFrame && document.visibilityState === "visible" && isInViewport) {
          animationFrame = window.requestAnimationFrame(render);
        }
      };

      if ("IntersectionObserver" in window) {
        intersectionObserver = new IntersectionObserver(([entry]) => {
          isInViewport = Boolean(entry?.isIntersecting);
          if (isInViewport) {
            startRendering();
          } else if (animationFrame) {
            window.cancelAnimationFrame(animationFrame);
            animationFrame = 0;
          }
        }, { threshold: 0.01 });
        intersectionObserver.observe(host);
      }

      visibilityHandler = () => {
        if (document.visibilityState === "hidden") {
          if (animationFrame) window.cancelAnimationFrame(animationFrame);
          animationFrame = 0;
        } else {
          startRendering();
        }
      };
      document.addEventListener("visibilitychange", visibilityHandler);

      if (!reducedMotion) {
        gsap.fromTo(group.scale, { x: 0.72, y: 0.72, z: 0.72 }, {
          x: 1, y: 1, z: 1, duration: 1.7, delay: 0.2, ease: "power3.out",
        });
        scrollTween = gsap.to(scrollState, {
          turn: 1,
          ease: "none",
          scrollTrigger: { id: "hero-scene-scroll", trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
        });
      }

      host.dataset.ready = "true";
      startRendering();
    } catch {
      host.dataset.state = "fallback";
    }

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      if (pointerHandler) host.removeEventListener("pointermove", pointerHandler);
      if (pointerLeaveHandler) host.removeEventListener("pointerleave", pointerLeaveHandler);
      if (visibilityHandler) document.removeEventListener("visibilitychange", visibilityHandler);
      ScrollTrigger.getById("hero-scene-scroll")?.kill();
      scrollTween?.kill();
      if (group) gsap.killTweensOf(group.scale);
      scene?.traverse((object: any) => {
        object.geometry?.dispose?.();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material: any) => material?.dispose?.());
        }
      });
      renderer?.dispose?.();
      renderer?.domElement?.remove();
    };
  }, []);

  return (
    <div className="hero-scene-host" ref={hostRef} aria-hidden="true">
      <div className="scene-fallback"><div className="fallback-core" /></div>
    </div>
  );
}
