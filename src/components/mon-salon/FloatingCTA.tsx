"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, X } from 'lucide-react';

interface FloatingCTAProps {
  onBookClick: () => void;
}

export default function FloatingCTA({ onBookClick }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
        >
          {/* Expanded Options */}
          <AnimatePresence>
            {isExpanded && (
              <>
                <motion.a
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  href="tel:+33123456789"
                  className="flex items-center gap-3 px-5 py-3 bg-white shadow-xl text-[#0a0a0a] hover:bg-[#f5f0e8] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#c9a96e]" />
                  <span className="font-medium">06 06 06 06 06</span>
                </motion.a>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, transition: { delay: 0.1 } }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  onClick={() => {
                    onBookClick();
                    setIsExpanded(false);
                  }}
                  className="flex items-center gap-3 px-5 py-3 bg-[#c9a96e] shadow-xl text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Prendre RDV</span>
                </motion.button>
              </>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-14 h-14 shadow-xl flex items-center justify-center transition-all duration-300 ${
              isExpanded
                ? 'bg-[#0a0a0a] text-white rotate-0'
                : 'bg-[#c9a96e] text-[#0a0a0a]'
            }`}
          >
            {isExpanded ? (
              <X className="w-6 h-6" />
            ) : (
              <Calendar className="w-6 h-6" />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}