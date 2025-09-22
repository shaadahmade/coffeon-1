"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "./Navigation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-light mb-8 tracking-tight"
            style={{
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              letterSpacing: '-0.02em'
            }}
          >
            CoffeeOn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed"
          >
            Your smart barista experience.<br />
            Redefining how you connect with coffee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/showcase"
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              Explore Showcase
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-center mb-16"
          >
            Experience Coffee Differently
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Smart Brewing</h3>
              <p className="text-white/70 leading-relaxed">
                Intelligent systems that understand your preferences and deliver the perfect cup every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Personalized</h3>
              <p className="text-white/70 leading-relaxed">
                Every interaction is tailored to your unique taste profile and brewing preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Premium Quality</h3>
              <p className="text-white/70 leading-relaxed">
                Crafted with precision and attention to detail for the ultimate coffee experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to Experience CoffeeOn?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Discover our interactive showcase and see what makes CoffeeOn special.
          </p>
          <Link
            href="/showcase"
            className="inline-block bg-gradient-to-r from-white to-white/90 text-black px-12 py-5 rounded-full font-medium text-lg hover:from-white/90 hover:to-white/80 transition-all duration-300 transform hover:scale-105"
          >
            View 3D Showcase
          </Link>
        </motion.div>
      </section>

      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none -z-10" />
    </div>
  );
}