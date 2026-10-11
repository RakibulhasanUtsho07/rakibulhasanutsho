"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="hero-scene-host" aria-hidden="true">
      <div className="scene-fallback">
        <div className="fallback-core" />
      </div>
    </div>
  ),
});

export default function HeroSceneLoader() {
  return <HeroScene />;
}
