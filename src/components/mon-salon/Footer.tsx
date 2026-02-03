"use client";
import React from 'react';
import { Scissors, MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <Scissors className="w-8 h-8 text-[#c9a96e] transform -rotate-45" />
              <div>
                <span className="text-xl font-light tracking-[0.2em] text-white">
                  L'ATELIER
                </span>
                <span className="block text-[10px] tracking-[0.3em] text-[#c9a96e] -mt-1">
                  COIFFURE
                </span>
              </div>
            </a>
            <p className="text-white/60 max-w-sm leading-relaxed mb-6">
              Un salon d'exception au cœur de Paris, où l'art de la coiffure rencontre l'excellence du service. Depuis 2009, nous sublimions votre beauté naturelle.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wider">NAVIGATION</h4>
            <ul className="space-y-3">
              {['Services', 'Galerie', 'Avis', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-[#c9a96e] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6 tracking-wider">CONTACT</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-[#c9a96e] transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>42 Rue du coiffeur<br />75008 Paris</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-3 text-white/60 hover:text-[#c9a96e] transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>06 06 06 06 06</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@latelier-coiffure.fr"
                  className="flex items-center gap-3 text-white/60 hover:text-[#c9a96e] transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>contact@latelier.coiffeur</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} L'Atelier Coiffure. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
