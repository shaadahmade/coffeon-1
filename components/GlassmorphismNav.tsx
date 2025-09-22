"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function GlassmorphismNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Showcase", href: "/showcase" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glassmorphism-nav px-8 py-4 rounded-full">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-light text-lg tracking-wide hover:text-white/80 transition-colors duration-300"
          >
            CoffeeOn
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-light transition-all duration-300 ${
                  pathname === item.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white/60"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .glassmorphism-nav {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .glassmorphism-nav:hover {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </motion.nav>
  );
}