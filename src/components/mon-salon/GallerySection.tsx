"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    before: 'https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Transformation Balayage',
    category: 'Coloration',
  },
  {
    before: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Coupe Structurée',
    category: 'Coupe',
  },
  {
    before: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Chignon Mariée',
    category: 'Événement',
  },
  {
    before: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Ombré Hair',
    category: 'Coloration',
  },
  {
    before: 'https://images.pexels.com/photos/3993441/pexels-photo-3993441.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Soin Réparateur',
    category: 'Soins',
  },
  {
    before: 'https://images.pexels.com/photos/3993435/pexels-photo-3993435.jpeg?auto=compress&cs=tinysrgb&w=600',
    after: 'https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Coupe Homme Tendance',
    category: 'Coupe',
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAfter, setShowAfter] = useState<Record<number, boolean>>({});

  const toggleBeforeAfter = (index: number) => {
    setShowAfter((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="galerie" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a96e] text-sm tracking-[0.3em]">NOTRE TRAVAIL</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mt-4 mb-6">
            Galerie Avant / Après
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Découvrez nos transformations et laissez-vous inspirer pour votre prochaine visite.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              onClick={() => toggleBeforeAfter(index)}
            >
              {/* Before Image */}
              <img
                src={item.before}
                alt={`${item.title} - Avant`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  showAfter[index] ? 'opacity-0' : 'opacity-100'
                }`}
              />
              {/* After Image */}
              <img
                src={item.after}
                alt={`${item.title} - Après`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  showAfter[index] ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[#c9a96e] text-xs tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>

              {/* Before/After Toggle */}
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-block px-3 py-1 text-xs tracking-wider transition-all duration-300 ${
                    showAfter[index]
                      ? 'bg-[#c9a96e] text-[#0a0a0a]'
                      : 'bg-white/20 text-white backdrop-blur-sm'
                  }`}
                >
                  {showAfter[index] ? 'APRÈS' : 'AVANT'}
                </span>
              </div>

              {/* Tap Indicator */}
              <div className="absolute bottom-3 right-3 text-white/50 text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Cliquez pour basculer
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10"
        >
          {[
            { value: '15+', label: 'Années d\'expérience' },
            { value: '10K+', label: 'Clients satisfaits' },
            { value: '25', label: 'Experts coiffeurs' },
            { value: '50+', label: 'Récompenses' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-light text-[#c9a96e] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}