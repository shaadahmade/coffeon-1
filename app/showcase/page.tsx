// app/showcase/page.tsx
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import Navigation from "../../components/Navigation";

type ModelItem = { id: number; path: string };

const models: ModelItem[] = [
  { id: 1, path: "/models/model1.glb" },
  { id: 2, path: "/models/model2.glb" },
  { id: 3, path: "/models/model3.glb" },
];

// Dynamic import the Three.js scene with error handling
const ThreeScene = dynamic(
  () => import("../../components/ThreeScene").catch(() => ({ default: () => <div>Failed to load 3D Scene</div> })),
  {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center text-white">Loading 3D Scene...</div>
  }
);

function RingGlow({ radius, sx, sz }: { radius: number; sx: number; sz: number }) {
  if (!radius) return null;
  return (
    <group
      position={[0, -0.995, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[sx, 1, sz]}
      renderOrder={10}
    >
      <mesh>
        <ringGeometry args={[radius * 0.985, radius * 1.0, 256]} />
        <meshBasicMaterial
          color={"#ffe14a"}
          transparent
          opacity={0.9}
          toneMapped={false}
          side={DoubleSide}
        />
      </mesh>
      <mesh>
        <ringGeometry args={[radius * 1.0, radius * 1.04, 256]} />
        <meshBasicMaterial
          color={"#ffe14a"}
          transparent
          opacity={0.12}
          toneMapped={false}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}

function CameraController() {
  const { camera } = useThree();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { position } = useSpring({
    position: isTransitioning ? [0, 3, 8] : [0, 2, 6],
    config: { mass: 1, tension: 120, friction: 30 },
  });

  useFrame(() => {
    camera.position.set(position.get()[0], position.get()[1], position.get()[2]);
  });

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        setIsTransitioning(!isTransitioning);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTransitioning]);

  return null;
}

export default function ShowcasePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragIntensity, setDragIntensity] = useState(0);
  const [isManualControl, setIsManualControl] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ACTIVE_SCALE = 1.8;

  const ring = { radius: 0.66 * ACTIVE_SCALE, sx: 1, sz: 1 };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Enhanced click handler for models
  const handleModelClick = useCallback((modelIndex: number) => {
    setActiveIndex(modelIndex);
    setIsManualControl(true);
    setTimeout(() => setIsManualControl(false), 5000); // Resume auto after 5s
  }, []);

  // Autoplay only when not hovered and not in manual control
  useEffect(() => {
    if (isHovered || isManualControl) return;
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % models.length);
    }, 2000);
    return () => clearInterval(id);
  }, [isHovered, isManualControl]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setActiveIndex((p) => (p - 1 + models.length) % models.length);
        setIsManualControl(true);
        setTimeout(() => setIsManualControl(false), 3000);
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((p) => (p + 1) % models.length);
        setIsManualControl(true);
        setTimeout(() => setIsManualControl(false), 3000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="h-[100vh] flex flex-col items-center justify-between bg-black text-white relative overflow-hidden">
      <Navigation />

      <div className="w-full h-[850px] relative z-1 flex items-center justify-center mt-20">
        {isMounted ? (
          <ThreeScene
            models={models}
            activeIndex={activeIndex}
            setIsHovered={setIsHovered}
            handleModelClick={handleModelClick}
            ACTIVE_SCALE={ACTIVE_SCALE}
            ring={ring}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white bg-black">
            Loading 3D Scene...
          </div>
        )}
      </div>
    </div>
  );
}