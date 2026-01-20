"use client";

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/mon-salon/Navigation';
import HeroSection from '@/components/mon-salon/HeroSection';
import ServicesSection from '@/components/mon-salon/ServicesSection';
import GallerySection from '@/components/mon-salon/GallerySection';
import TestimonialsSection from '@/components/mon-salon/TestimonialsSection';
import ContactSection from '@/components/mon-salon/ContactSection';
import Footer from '@/components/mon-salon/Footer';
import BookingModal from '@/components/mon-salon/BookingModal';
import FloatingCTA from '@/components/mon-salon/FloatingCTA';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Set page metadata for SEO
  useEffect(() => {
    document.title = "L'Atelier Coiffure | Salon de Coiffure Paris 8ème - Coupe, Coloration, Soins";

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Salon de coiffure haut de gamme au cœur de Paris 8ème. Coupes sur-mesure, colorations, soins capillaires et coiffures événementielles. Prenez rendez-vous au 06 06 06 06 06.";

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: "L'Atelier Coiffure | Salon de Coiffure Paris" },
      { property: 'og:description', content: "Un moment d'exception vous attend. Nos experts subliment votre style avec passion et savoir-faire." },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'fr_FR' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
  }, []);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookClick={openBooking} />
      <HeroSection onBookClick={openBooking} />
      <ServicesSection onBookClick={openBooking} />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection onBookClick={openBooking} />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      <FloatingCTA onBookClick={openBooking} />
    </div>
  );
}