"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TransparentNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-light text-white tracking-wide hover:text-white/80 transition-colors duration-300">
          CoffeeOn
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link
            href="/showcase"
            className="text-white/80 hover:text-white transition-colors duration-300 font-light"
          >
            Showcase
          </Link>
          <Link
            href="/blog"
            className="text-white/80 hover:text-white transition-colors duration-300 font-light"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-white/80 hover:text-white transition-colors duration-300 font-light"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}