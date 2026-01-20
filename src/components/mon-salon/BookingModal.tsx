"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, Check, Scissors, Palette, Sparkles, Crown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const services = [
  { id: 'coupe-femme', name: 'Coupe Femme', price: '45€', duration: '45 min', icon: Scissors },
  { id: 'coupe-homme', name: 'Coupe Homme', price: '28€', duration: '30 min', icon: Scissors },
  { id: 'coloration', name: 'Coloration complète', price: '65€', duration: '1h30', icon: Palette },
  { id: 'balayage', name: 'Mèches / Balayage', price: '85€', duration: '2h', icon: Palette },
  { id: 'soin', name: 'Soin profond', price: '35€', duration: '30 min', icon: Sparkles },
  { id: 'keratine', name: 'Kératine brésilienne', price: '150€', duration: '2h', icon: Sparkles },
  { id: 'chignon', name: 'Chignon de soirée', price: '65€', duration: '1h', icon: Crown },
  { id: 'mariee', name: 'Coiffure mariée', price: '150€', duration: '2h', icon: Crown },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00',
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setStep(1);
      setFormData({ service: '', date: '', time: '', name: '', phone: '', email: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const selectedService = services.find(s => s.id === formData.service);

  // Generate next 14 days
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date;
  }).filter(date => date.getDay() !== 0); // Exclude Sundays

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#0a0a0a] p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-medium text-white">Prendre rendez-vous</h2>
                <p className="text-sm text-white/60">Étape {step} sur 3</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-[#f5f0e8]">
              <div
                className="h-full bg-[#c9a96e] transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-medium text-[#0a0a0a] mb-2">Réservation confirmée !</h3>
                <p className="text-[#0a0a0a]/60 mb-4">
                  Nous vous avons envoyé un email de confirmation.
                </p>
                <p className="text-sm text-[#0a0a0a]/40">
                  À bientôt chez L'Atelier Coiffure !
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-[#0a0a0a] mb-4">Choisissez votre prestation</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: service.id })}
                            className={`p-4 text-left border-2 transition-all duration-300 ${
                              formData.service === service.id
                                ? 'border-[#c9a96e] bg-[#c9a96e]/10'
                                : 'border-[#0a0a0a]/10 hover:border-[#0a0a0a]/30'
                            }`}
                          >
                            <Icon className={`w-5 h-5 mb-2 ${
                              formData.service === service.id ? 'text-[#c9a96e]' : 'text-[#0a0a0a]/40'
                            }`} />
                            <div className="font-medium text-sm text-[#0a0a0a]">{service.name}</div>
                            <div className="text-xs text-[#0a0a0a]/60 mt-1">
                              {service.price} • {service.duration}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <Button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!formData.service}
                      className="w-full mt-6 bg-[#0a0a0a] hover:bg-[#c9a96e] text-white py-6"
                    >
                      Continuer
                    </Button>
                  </div>
                )}

                {/* Step 2: Date & Time */}
                {step === 2 && (
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-[#0a0a0a] mb-4">Choisissez votre créneau</h3>
                    
                    {selectedService && (
                      <div className="mb-6 p-4 bg-[#f5f0e8] flex items-center gap-4">
                        <selectedService.icon className="w-6 h-6 text-[#c9a96e]" />
                        <div>
                          <div className="font-medium text-[#0a0a0a]">{selectedService.name}</div>
                          <div className="text-sm text-[#0a0a0a]/60">{selectedService.price} • {selectedService.duration}</div>
                        </div>
                      </div>
                    )}

                    <Label className="text-[#0a0a0a]/70 mb-2 block">Date</Label>
                    <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
                      {availableDates.map((date, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setFormData({ ...formData, date: date.toISOString() })}
                          className={`flex-shrink-0 px-4 py-3 border-2 transition-all duration-300 ${
                            formData.date === date.toISOString()
                              ? 'border-[#c9a96e] bg-[#c9a96e]/10'
                              : 'border-[#0a0a0a]/10 hover:border-[#0a0a0a]/30'
                          }`}
                        >
                          <div className="text-xs text-[#0a0a0a]/60 capitalize">
                            {date.toLocaleDateString('fr-FR', { weekday: 'short' })}
                          </div>
                          <div className="font-medium text-[#0a0a0a]">
                            {date.getDate()}
                          </div>
                        </button>
                      ))}
                    </div>

                    <Label className="text-[#0a0a0a]/70 mb-2 block">Heure</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, time })}
                          className={`py-2 text-sm border-2 transition-all duration-300 ${
                            formData.time === time
                              ? 'border-[#c9a96e] bg-[#c9a96e]/10 text-[#0a0a0a]'
                              : 'border-[#0a0a0a]/10 text-[#0a0a0a]/70 hover:border-[#0a0a0a]/30'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1 py-6"
                      >
                        Retour
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!formData.date || !formData.time}
                        className="flex-1 bg-[#0a0a0a] hover:bg-[#c9a96e] text-white py-6"
                      >
                        Continuer
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-[#0a0a0a] mb-4">Vos coordonnées</h3>
                    
                    {/* Summary */}
                    <div className="mb-6 p-4 bg-[#f5f0e8]">
                      <div className="flex items-center gap-2 text-sm text-[#0a0a0a]/70 mb-2">
                        <Calendar className="w-4 h-4" />
                        {formData.date && new Date(formData.date).toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                        })} à {formData.time}
                      </div>
                      <div className="font-medium text-[#0a0a0a]">
                        {selectedService?.name} • {selectedService?.price}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-[#0a0a0a]/70">Nom complet</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Marie Dupont"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-[#0a0a0a]/70">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="06 12 34 56 78"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-[#0a0a0a]/70">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="marie@example.com"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(2)}
                        className="flex-1 py-6"
                      >
                        Retour
                      </Button>
                      <Button
                        type="submit"
                        disabled={!formData.name || !formData.phone || !formData.email}
                        className="flex-1 bg-[#c9a96e] hover:bg-[#0a0a0a] text-[#0a0a0a] hover:text-white py-6"
                      >
                        Confirmer
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}