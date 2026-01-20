"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowRight } from 'lucide-react';

const hours = [
  { day: 'Lundi', hours: '10h - 19h' },
  { day: 'Mardi', hours: '10h - 19h' },
  { day: 'Mercredi', hours: '10h - 20h' },
  { day: 'Jeudi', hours: '10h - 20h' },
  { day: 'Vendredi', hours: '10h - 20h' },
  { day: 'Samedi', hours: '9h - 18h' },
  { day: 'Dimanche', hours: 'Fermé' },
];

interface ContactSectionProps {
  onBookClick: () => void;
}

export default function ContactSection({ onBookClick }: ContactSectionProps) {
  const today = new Date().getDay();
  const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const currentDay = dayNames[today];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a96e] text-sm tracking-[0.3em]">NOUS TROUVER</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a0a0a] mt-4 mb-6">
            Informations Pratiques
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map & Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Simple Map Placeholder */}
            <div className="relative h-80 bg-[#f5f0e8] overflow-hidden mb-8">
              <img
                src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quartier du salon"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#c9a96e] rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-[#0a0a0a]">L'Atelier Coiffure</h3>
                  <p className="text-[#0a0a0a]/60">42 Rue du coiffeur</p>
                  <p className="text-[#0a0a0a]/60">75008 Paris</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="tel:+33123456789"
                className="group flex items-center gap-4 p-4 bg-[#f5f0e8] hover:bg-[#c9a96e] transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white flex items-center justify-center group-hover:bg-[#0a0a0a] transition-colors">
                  <Phone className="w-5 h-5 text-[#c9a96e] group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-sm text-[#0a0a0a]/60 group-hover:text-white/70">Appelez-nous</span>
                  <span className="font-medium text-[#0a0a0a] group-hover:text-white">06 06 06 06 06</span>
                </div>
              </a>
              <a
                href="mailto:contact@latelier-coiffure.fr"
                className="group flex items-center gap-4 p-4 bg-[#f5f0e8] hover:bg-[#c9a96e] transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white flex items-center justify-center group-hover:bg-[#0a0a0a] transition-colors">
                  <Mail className="w-5 h-5 text-[#c9a96e] group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-sm text-[#0a0a0a]/60 group-hover:text-white/70">Écrivez-nous</span>
                  <span className="font-medium text-[#0a0a0a] group-hover:text-white text-sm">contact@latelier.coiffeur</span>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-sm text-[#0a0a0a]/60">Suivez-nous :</span>
              <a
                href="#"
                className="w-10 h-10 bg-[#0a0a0a] flex items-center justify-center hover:bg-[#c9a96e] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#0a0a0a] flex items-center justify-center hover:bg-[#c9a96e] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Hours & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Hours */}
            <div className="bg-[#0a0a0a] p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#c9a96e]" />
                <h3 className="text-xl font-medium text-white">Horaires d'ouverture</h3>
              </div>
              <div className="space-y-3">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className={`flex justify-between py-2 border-b border-white/10 last:border-0 ${
                      item.day === currentDay ? 'text-[#c9a96e]' : 'text-white/70'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.day === currentDay && (
                        <span className="w-2 h-2 bg-[#c9a96e] rounded-full animate-pulse" />
                      )}
                      {item.day}
                    </span>
                    <span className={item.hours === 'Fermé' ? 'text-white/40' : ''}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-[#c9a96e] p-8 text-center">
              <h3 className="text-2xl font-light text-[#0a0a0a] mb-4">
                Prêt(e) pour votre transformation ?
              </h3>
              <p className="text-[#0a0a0a]/70 mb-6">
                Réservez votre créneau en quelques clics et laissez nos experts prendre soin de vous.
              </p>
              <button
                onClick={onBookClick}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0a0a0a] text-white font-medium tracking-wider hover:bg-white hover:text-[#0a0a0a] transition-all duration-500"
              >
                PRENDRE RENDEZ-VOUS
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-[#0a0a0a]/60 mt-4">
                ou appelez le <a href="tel:+33606060606" className="underline">06 06 06 06 06</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}