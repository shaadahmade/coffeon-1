"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const texts = [
    "CoffeeOn doesn't vend.",
    "It's your smart barista"
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // First text appears immediately and fades after 1.2s
    timers.push(setTimeout(() => {
      setCurrentText(1);
    }, 1200));

    // Second text fades after 1.2s more
    timers.push(setTimeout(() => {
      setIsVisible(false);
    }, 2400));

    // Complete intro after fade out
    timers.push(setTimeout(() => {
      onComplete();
    }, 3000));

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center px-8">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentText}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide leading-tight"
                style={{
                  fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                  fontWeight: 300,
                  letterSpacing: '-0.02em'
                }}
              >
                {texts[currentText]}
              </motion.h1>
            </AnimatePresence>

            {/* Elegant underline animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: "easeInOut"
              }}
              className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-8 max-w-md"
            />

            {/* Subtle dots indicator */}
            <div className="flex justify-center space-x-2 mt-12">
              {texts.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0.3 }}
                  animate={{
                    opacity: index === currentText ? 1 : 0.3,
                    scale: index === currentText ? 1.2 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-2 h-2 rounded-full ${
                    index === currentText ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Elegant fade overlay for smooth transition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: currentText === 1 ? 0.1 : 0 }}
            className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}