"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Palette, Crown, Clock } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Coupe & Styling',
    description: 'Une coupe sur-mesure qui révèle votre personnalité',
    items: [
      { name: 'Coupe femme', price: '45€', duration: '45 min' },
      { name: 'Coupe homme', price: '28€', duration: '30 min' },
      { name: 'Coupe enfant', price: '20€', duration: '20 min' },
      { name: 'Brushing', price: '25€', duration: '30 min' },
    ],
    image: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Palette,
    title: 'Coloration',
    description: 'Des couleurs vibrantes et durables',
    items: [
      { name: 'Coloration complète', price: '65€', duration: '1h30' },
      { name: 'Mèches / Balayage', price: '85€', duration: '2h' },
      { name: 'Ombré hair', price: '95€', duration: '2h30' },
      { name: 'Retouche racines', price: '40€', duration: '45 min' },
    ],
    image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Sparkles,
    title: 'Soins',
    description: 'Des soins premium pour des cheveux sublimes',
    items: [
      { name: 'Soin profond', price: '35€', duration: '30 min' },
      { name: 'Kératine brésilienne', price: '150€', duration: '2h' },
      { name: 'Botox capillaire', price: '120€', duration: '1h30' },
      { name: 'Massage crânien', price: '20€', duration: '15 min' },
    ],
    image: 'https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Crown,
    title: 'Événements',
    description: 'Soyez sublime pour vos moments précieux',
    items: [
      { name: 'Coiffure mariée', price: '150€', duration: '2h' },
      { name: 'Chignon de soirée', price: '65€', duration: '1h' },
      { name: 'Essai coiffure', price: '50€', duration: '1h' },
      { name: 'Forfait complet', price: '280€', duration: '4h' },
    ],
    image: 'https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

interface ServicesSectionProps {
  onBookClick: () => void;
}

export default function ServicesSection({ onBookClick }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a96e] text-sm tracking-[0.3em]">NOS PRESTATIONS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a0a0a] mt-4 mb-6">
            Services & Tarifs
          </h2>
          <p className="text-[#0a0a0a]/60 max-w-2xl mx-auto">
            Des prestations d'exception réalisées par nos experts passionnés, 
            avec des produits haut de gamme sélectionnés pour sublimer votre beauté.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#c9a96e] flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">{service.title}</h3>
                    <p className="text-sm text-white/70">{service.description}</p>
                  </div>
                </div>
              </div>

              {/* Price List */}
              <div className="p-6">
                <div className="space-y-4">
                  {service.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 border-b border-[#0a0a0a]/10 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#0a0a0a]">{item.name}</span>
                        <span className="flex items-center gap-1 text-xs text-[#0a0a0a]/50">
                          <Clock className="w-3 h-3" />
                          {item.duration}
                        </span>
                      </div>
                      <span className="text-[#c9a96e] font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={onBookClick}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#0a0a0a] text-white font-medium tracking-wider hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-500"
          >
            RÉSERVER VOTRE PRESTATION
            <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}