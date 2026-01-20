"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Phone, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onBookClick: () => void;
}

export default function HeroSection({ onBookClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Salon de coiffure élégant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-[#0a0a0a]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#c9a96e] text-sm tracking-[0.3em] mb-4">
              BIENVENUE À L'ATELIER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight mb-6"
          >
            Révélez votre
            <span className="block text-[#c9a96e] font-normal italic">
              beauté naturelle
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg"
          >
            Un moment d'exception vous attend. Nos experts subliment votre style 
            avec passion et savoir-faire, dans un cadre raffiné au cœur de Paris.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onBookClick}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#c9a96e] text-[#0a0a0a] font-medium tracking-wider hover:bg-white transition-all duration-500"
            >
              <Calendar className="w-5 h-5" />
              PRENDRE RENDEZ-VOUS
              <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a
              href="tel:+33606060606"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              06 06 06 06 06
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest">DÉCOUVRIR</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-[#c9a96e]/50 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#c9a96e]/50 to-transparent hidden lg:block" />
    </section>
  );
}