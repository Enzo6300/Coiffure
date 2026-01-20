"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Cliente fidèle depuis 5 ans',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'L\'Atelier a complètement transformé ma routine capillaire. L\'équipe est à l\'écoute et les conseils sont toujours personnalisés. Mon balayage n\'a jamais été aussi lumineux !',
  },
  {
    name: 'Marie Dupont',
    role: 'Mariée en juin 2024',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Pour mon mariage, je voulais être parfaite. L\'équipe a réalisé exactement ce que j\'imaginais. Ma coiffure a tenu toute la journée et la soirée. Merci infiniment !',
  },
  {
    name: 'Camille Bernard',
    role: 'Nouvelle cliente',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Première visite et je suis conquise ! L\'ambiance est apaisante, le service impeccable. Mon soin kératine a redonné vie à mes cheveux. Je recommande à 100% !',
  },
  {
    name: 'Julien Moreau',
    role: 'Client régulier',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Enfin un salon qui comprend les coupes hommes ! Le barbier est un artiste. Je ressors toujours avec une coupe impeccable et des conseils pour l\'entretien.',
  },
  {
    name: 'Léa Rousseau',
    role: 'Cliente depuis 2 ans',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'L\'ombré hair réalisé par Sarah est une pure merveille ! Les dégradés sont parfaits et la couleur tient remarquablement bien. Un vrai travail d\'experte.',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="avis" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a96e] text-sm tracking-[0.3em]">TÉMOIGNAGES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a0a0a] mt-4 mb-6">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#c9a96e] text-[#c9a96e]" />
            ))}
            <span className="ml-3 text-[#0a0a0a]/60">4.9/5 basé sur 500+ avis</span>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white p-8 sm:p-12 shadow-lg"
              >
                <Quote className="w-12 h-12 text-[#c9a96e]/30 mb-6" />
                <p className="text-lg sm:text-xl text-[#0a0a0a]/80 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-[#0a0a0a]">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-[#0a0a0a]/60">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-10 h-10 bg-white shadow-lg flex items-center justify-center hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-10 h-10 bg-white shadow-lg flex items-center justify-center hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#c9a96e] w-8' : 'bg-[#0a0a0a]/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-white shadow-sm">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <img
                  key={i}
                  src={t.image}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-medium text-[#0a0a0a]">+500 clients satisfaits</span>
              <span className="text-[#0a0a0a]/60 ml-1">nous font confiance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}