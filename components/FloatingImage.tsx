// components/FloatingImage.tsx
"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type FloatingImageProps = {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  rotate?: number;
};

export default function FloatingImage({
  src,
  width = 200,
  height = 200,
  className = "",
  rotate = 0,
}: FloatingImageProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [lastMove, setLastMove] = useState(Date.now());

  // Smooth spring motion
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  // Tilt based on movement
  const rotateX = useTransform(springY, [-50, 50], [10, -10]); // reduced distance
  const rotateY = useTransform(springX, [-50, 50], [-10, 10]); // reduced distance

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = event.clientX - innerWidth / 2;
      const offsetY = event.clientY - innerHeight / 2;

      // Smaller sensitivity (movement distance reduced)
      x.set(offsetX / 40);
      y.set(offsetY / 40);

      setLastMove(Date.now());
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  // Auto floating when mouse not moving
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMove > 1500) {
        // random gentle motion
        x.set(Math.sin(Date.now() / 1000) * 5);
        y.set(Math.cos(Date.now() / 1200) * 5);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [lastMove, x, y]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        rotate,
      }}
      className={`absolute ${className}`}
    >
      <Image
  src={src}
  alt="Floating"
  width={width}
  height={height}
  className="pointer-events-none object-contain"
  priority
/>
    </motion.div>
  );
}
