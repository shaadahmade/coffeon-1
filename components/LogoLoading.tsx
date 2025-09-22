"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LogoLoadingProps {
  onComplete: () => void;
}

export default function LogoLoading({ onComplete }: LogoLoadingProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500); // Wait for fade out
    }, 2500); // Show logo for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="mb-8"
            >
              <h1
                className="text-6xl md:text-7xl font-light text-white tracking-wide"
                style={{
                  fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                  fontWeight: 300,
                  letterSpacing: '-0.02em'
                }}
              >
                CoffeeOn
              </h1>
            </motion.div>

            {/* Loading animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex justify-center items-center space-x-2"
            >
              {/* Loading dots */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              ))}
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-white/60 text-sm mt-6 font-light tracking-wide"
            >
              Loading Experience...
            </motion.p>

            {/* Subtle progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                delay: 0.5,
                ease: "easeOut"
              }}
              className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mt-8 max-w-xs"
            />
          </div>

          {/* Background subtle animation */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 60%, rgba(255,255,255,0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}