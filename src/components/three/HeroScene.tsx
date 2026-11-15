"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type DisposableResource = { dispose: () => void };
type AdjustableMaterial = DisposableResource & { transparent: boolean; opacity: number };
type RendererHandle = {
  domElement: HTMLCanvasElement;
  setPixelRatio: (ratio: number) => void;
  setSize: (width: number, height: number, updateStyle?: boolean) => void;
  setClearColor: (color: number, alpha?: number) => void;
  render: (scene: unknown, camera: unknown) => void;
  dispose: () => void;
};

export default function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: RendererHandle | null = null;
    let frameId = 0;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    let visible = true;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let removeRuntimeListeners = () => {};
    const geometries: DisposableResource[] = [];
    const materials: AdjustableMaterial[] = [];

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
      camera.position.set(0, 0, 6.8);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        powerPreference: "low-power",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(Math.max(host.clientWidth, 1), Math.max(host.clientHeight, 1), false);
      renderer.setClearColor(0x0c0d0f, 0);
      host.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const coreGeometry = new THREE.IcosahedronGeometry(1.02, 2);
      const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x242b17, transparent: true, opacity: 0.7 });
      geometries.push(coreGeometry);
      materials.push(coreMaterial);
      group.add(new THREE.Mesh(coreGeometry, coreMaterial));

      const shellGeometry = new THREE.IcosahedronGeometry(1.35, 2);
      const shellMaterial = new THREE.MeshBasicMaterial({ color: 0xc9f25b, wireframe: true, transparent: true, opacity: 0.42 });
      geometries.push(shellGeometry);
      materials.push(shellMaterial);
      group.add(new THREE.Mesh(shellGeometry, shellMaterial));

      const innerGeometry = new THREE.IcosahedronGeometry(0.9, 1);
      const innerMaterial = new THREE.MeshBasicMaterial({ color: 0xe9f7b6, wireframe: true, transparent: true, opacity: 0.2 });
      geometries.push(innerGeometry);
      materials.push(innerMaterial);
      group.add(new THREE.Mesh(innerGeometry, innerMaterial));

      const outerRingGeometry = new THREE.TorusGeometry(1.79, 0.008, 8, 150);
      const outerRingMaterial = new THREE.MeshBasicMaterial({ color: 0xd8f37a, transparent: true, opacity: 0.48 });
      geometries.push(outerRingGeometry);
      materials.push(outerRingMaterial);
      const outerRing = new THREE.Mesh(outerRingGeometry, outerRingMaterial);
      outerRing.rotation.x = 1.12;
      outerRing.rotation.y = 0.32;
      group.add(outerRing);

      const innerRingGeometry = new THREE.TorusGeometry(1.94, 0.006, 8, 150);
      const innerRingMaterial = new THREE.MeshBasicMaterial({ color: 0x98ad4d, transparent: true, opacity: 0.38 });
      geometries.push(innerRingGeometry);
      materials.push(innerRingMaterial);
      const innerRing = new THREE.Mesh(innerRingGeometry, innerRingMaterial);
      innerRing.rotation.x = 0.36;
      innerRing.rotation.y = -0.72;
      group.add(innerRing);

      const nodeCount = 240;
      const positions = new Float32Array(nodeCount * 3);
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      for (let index = 0; index < nodeCount; index += 1) {
        const y = 1 - (index / (nodeCount - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const angle = goldenAngle * index;
        const offset = index * 3;
        positions[offset] = Math.cos(angle) * radius * 1.37;
        positions[offset + 1] = y * 1.37;
        positions[offset + 2] = Math.sin(angle) * radius * 1.37;
      }
      const pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      const pointsMaterial = new THREE.PointsMaterial({ color: 0xf0f6d9, size: 0.024, transparent: true, opacity: 0.92, sizeAttenuation: true });
      geometries.push(pointsGeometry);
      materials.push(pointsMaterial);
      group.add(new THREE.Points(pointsGeometry, pointsMaterial));

      const linkPositions: number[] = [];
      for (let index = 0; index < nodeCount; index += 1) {
        const next = (index + 13) % nodeCount;
        const a = index * 3;
        const b = next * 3;
        linkPositions.push(
          positions[a], positions[a + 1], positions[a + 2],
          positions[b], positions[b + 1], positions[b + 2],
        );
      }
      const linksGeometry = new THREE.BufferGeometry();
      linksGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linkPositions, 3));
      const linksMaterial = new THREE.LineBasicMaterial({ color: 0x9bbd36, transparent: true, opacity: 0.14 });
      geometries.push(linksGeometry);
      materials.push(linksMaterial);
      group.add(new THREE.LineSegments(linksGeometry, linksMaterial));

      const floorGrid = new THREE.GridHelper(7, 24, 0x3d4722, 0x252b18);
      geometries.push(floorGrid.geometry);
      floorGrid.rotation.x = Math.PI / 2;
      floorGrid.position.z = -1.8;
      const gridMaterials = (Array.isArray(floorGrid.material) ? floorGrid.material : [floorGrid.material]) as AdjustableMaterial[];
      gridMaterials.forEach((material: AdjustableMaterial) => {
        material.transparent = true;
        material.opacity = 0.22;
        materials.push(material);
      });
      group.add(floorGrid);

      const resize = () => {
        if (!renderer) return;
        const width = Math.max(host.clientWidth, 1);
        const height = Math.max(host.clientHeight, 1);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        if (reducedMotion && visible && document.visibilityState === "visible") {
          camera.lookAt(0, 0, 0);
          renderer.render(scene, camera);
        }
      };
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);

      const pointerMove = (event: PointerEvent) => {
        const bounds = host.getBoundingClientRect();
        targetX = ((event.clientX - bounds.left) / Math.max(bounds.width, 1) - 0.5) * 2;
        targetY = ((event.clientY - bounds.top) / Math.max(bounds.height, 1) - 0.5) * 2;
      };
      const pointerLeave = () => { targetX = 0; targetY = 0; };
      if (window.matchMedia("(pointer: fine)").matches && !reducedMotion) {
        host.addEventListener("pointermove", pointerMove);
        host.addEventListener("pointerleave", pointerLeave);
      }

      const render = () => {
        frameId = 0;
        if (!renderer || !visible || document.visibilityState !== "visible") return;
        if (!reducedMotion) {
          pointerX += (targetX - pointerX) * 0.025;
          pointerY += (targetY - pointerY) * 0.025;
          group.rotation.y += 0.0017;
          group.rotation.x += (pointerY * 0.16 - group.rotation.x) * 0.025;
          group.rotation.z += (pointerX * 0.08 - group.rotation.z) * 0.025;
          camera.position.x += (pointerX * 0.18 - camera.position.x) * 0.02;
          camera.position.y += (-pointerY * 0.14 - camera.position.y) * 0.02;
        }
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
        if (!reducedMotion) frameId = window.requestAnimationFrame(render);
      };
      const start = () => {
        if (!frameId && !reducedMotion && document.visibilityState === "visible" && visible) {
          frameId = window.requestAnimationFrame(render);
        } else if (reducedMotion && document.visibilityState === "visible" && visible && renderer) {
          camera.lookAt(0, 0, 0);
          renderer.render(scene, camera);
        }
      };

      if ("IntersectionObserver" in window) {
        intersectionObserver = new IntersectionObserver(([entry]) => {
          visible = Boolean(entry?.isIntersecting);
          if (visible) start();
          else if (frameId) {
            window.cancelAnimationFrame(frameId);
            frameId = 0;
          }
        }, { threshold: 0.01 });
        intersectionObserver.observe(host);
      }

      const visibilityChange = () => {
        if (document.visibilityState === "hidden" && frameId) {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
        } else {
          start();
        }
      };
      document.addEventListener("visibilitychange", visibilityChange);
      removeRuntimeListeners = () => {
        host.removeEventListener("pointermove", pointerMove);
        host.removeEventListener("pointerleave", pointerLeave);
        document.removeEventListener("visibilitychange", visibilityChange);
      };

      host.dataset.ready = "true";
      start();
    } catch {
      host.dataset.state = "fallback";
    }

    return () => {
      removeRuntimeListeners();
      if (frameId) window.cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  return (
    <div className="hero-scene-host" ref={hostRef} aria-hidden="true">
      <div className="scene-fallback"><div className="fallback-core" /></div>
    </div>
  );
}
