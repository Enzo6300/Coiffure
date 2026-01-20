"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onBookClick: () => void;
}

export default function Navigation({ onBookClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#avis', label: 'Avis' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <Scissors className="w-8 h-8 text-[#c9a96e] transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
              <div>
                <span className="text-xl font-light tracking-[0.2em] text-white">
                  L'ATELIER
                </span>
                <span className="block text-[10px] tracking-[0.3em] text-[#c9a96e] -mt-1">
                  COIFFURE
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm tracking-wider text-white/80 hover:text-[#c9a96e] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a96e] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+33606060606"
                className="flex items-center gap-2 text-white/80 hover:text-[#c9a96e] transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm tracking-wide">06 06 06 06 06</span>
              </a>
              <button
                onClick={onBookClick}
                className="px-6 py-2.5 bg-[#c9a96e] text-[#0a0a0a] text-sm font-medium tracking-wider hover:bg-white transition-all duration-300"
              >
                RÉSERVER
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl tracking-wider text-white/80 hover:text-[#c9a96e] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-4 mt-8"
              >
                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-3 text-[#c9a96e]"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg tracking-wide">06 06 06 06 06</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="px-8 py-3 bg-[#c9a96e] text-[#0a0a0a] font-medium tracking-wider"
                >
                  PRENDRE RENDEZ-VOUS
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}