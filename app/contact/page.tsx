"use client";

import { motion } from "framer-motion";
import FlipLink from "@/components/FlipLink";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-20 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <motion.h1
            className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-white via-amber-100 to-yellow-200 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Let&apos;s Connect
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to brew something extraordinary together? We&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Contact Information */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Location Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-2xl">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-100">Location</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Manhattan, New York<br />
                    Where coffee dreams come to life
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-2xl">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-100">Office Hours</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Monday – Friday<br />
                    11:00 AM – 2:00 PM EST
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500/20 p-3 rounded-2xl">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-amber-100">Email</h3>
                  <a href="mailto:coffeon@studio.com" className="text-gray-300 hover:text-amber-300 transition-colors duration-300 leading-relaxed">
                    coffeon@studio.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dark Mode Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 hover:bg-white/10 transition-all duration-500">
              <div className="w-full h-96 md:h-[450px] rounded-2xl overflow-hidden bg-slate-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.917494176448!2d-73.98715568459396!3d40.74881707932762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a0f3ff%3A0xbaa1d9e0a77e4c3b!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1694445872980!5m2!1sen!2sus&style=feature:all%7Celement:geometry%7Ccolor:0x212121&style=feature:all%7Celement:labels.icon%7Cvisibility:off&style=feature:all%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:all%7Celement:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">Visit us in the heart of Manhattan</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <motion.footer
          className="border-t border-white/20 pt-16 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="grid gap-12 lg:grid-cols-3 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.h3
                className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                CoffeeOn Studio
              </motion.h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Manhattan, New York</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Est. 2025</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-amber-100">Get in Touch</h4>
              <div className="space-y-4">
                <motion.a
                  href="tel:+48762864075"
                  className="flex items-center space-x-3 text-gray-300 hover:text-amber-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(+48) 762 864 075</span>
                </motion.a>
                <motion.a
                  href="mailto:coffeon@studio.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-amber-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>coffeon@studio.com</span>
                </motion.a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6 lg:text-right">
              <h4 className="text-lg font-semibold text-amber-100">Connect With Us</h4>
              <div className="flex gap-6 lg:justify-end justify-start">
                <FlipLink href="#" className="text-gray-300 hover:text-amber-300">
                  Behance
                </FlipLink>
                <FlipLink href="#" className="text-gray-300 hover:text-amber-300">
                  Instagram
                </FlipLink>
                <FlipLink href="#" className="text-gray-300 hover:text-amber-300">
                  LinkedIn
                </FlipLink>
              </div>
              <motion.button
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Work With Us
              </motion.button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 CoffeeOn Studio. Crafted with ☕ and passion.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-amber-300 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
