// app/page.tsx
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroSequence from "../components/IntroSequence";

type ModelItem = { id: number; path: string };

const models: ModelItem[] = [
  { id: 1, path: "/models/model1.glb" },
  { id: 2, path: "/models/model2.glb" },
  { id: 3, path: "/models/model3.glb" },
];

// Dynamic import the Three.js scene with error handling
const ThreeScene = dynamic(
  () => import("../components/ThreeScene").catch(() => ({ default: () => <div>Failed to load 3D Scene</div> })),
  {
    ssr: false
  }
);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMainSite, setShowMainSite] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualControl, setIsManualControl] = useState(false);
  const ACTIVE_SCALE = 1.8;

  const ring = { radius: 0.66 * ACTIVE_SCALE, sx: 1, sz: 1 };

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowMainSite(true);
  };

  // Enhanced click handler for models
  const handleModelClick = useCallback((modelIndex: number) => {
    setActiveIndex(modelIndex);
    setIsManualControl(true);
    setTimeout(() => setIsManualControl(false), 5000); // Resume auto after 5s
  }, []);

  // Autoplay only when not hovered and not in manual control
  useEffect(() => {
    if (isHovered || isManualControl || !showMainSite) return;
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % models.length);
    }, 2000);
    return () => clearInterval(id);
  }, [isHovered, isManualControl, showMainSite]);

  // Keyboard navigation
  useEffect(() => {
    if (!showMainSite) return;

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
  }, [showMainSite]);

  return (
    <AnimatePresence mode="wait">
      {/* Intro Sequence */}
      {showIntro && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <IntroSequence onComplete={handleIntroComplete} />
        </motion.div>
      )}

      {/* Main 3D Showcase Site */}
      {showMainSite && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="h-[100vh] flex flex-col items-center justify-between bg-black text-white relative overflow-hidden"
        >
          <div className="w-full h-[850px] relative z-1 flex items-center justify-center">
            <ThreeScene
              models={models}
              activeIndex={activeIndex}
              setIsHovered={setIsHovered}
              handleModelClick={handleModelClick}
              ACTIVE_SCALE={ACTIVE_SCALE}
              ring={ring}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
