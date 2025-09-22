"use client";

import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

type FlipLinkProps = {
  href: string;
  children: string;
  className?: string;
};

export default function FlipLink({ href, children, className }: FlipLinkProps) {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`relative inline-block overflow-hidden ${className}`}
    >
      {/* Default Text */}
      <div className="flex">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: i * STAGGER,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* Hover Text */}
      <div className="absolute inset-0 flex">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: "0%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: i * STAGGER,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}
