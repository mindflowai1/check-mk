import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, User, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroForm: React.FC = () => {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleNext = () => {
    if (step === 1 && formData.name) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.phone) {
      console.log('Form submitted:', formData);
      // Aqui você pode integrar com sua API
      alert('Obrigado! Entraremos em contato em breve.');
      // Reset form
      setFormData({ name: '', email: '', phone: '' });
      setStep(1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-lg h-full flex items-center"
    >
      {/* Card Container */}
      <div className="relative bg-dark-800/60 backdrop-blur-2xl rounded-3xl border border-brand/20 p-10 shadow-2xl w-full">
        {/* Animated Glow Effect */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -inset-[2px] bg-gradient-to-r from-brand/30 via-brand/10 to-brand/30 rounded-3xl blur-2xl"
        ></motion.div>
        
        <div className="relative z-10">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3 flex-1">
              <motion.div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  step >= 1 ? 'bg-brand text-dark-900 shadow-lg shadow-brand/30' : 'bg-dark-700 text-gray-400'
                }`}
                animate={{ 
                  scale: step === 1 ? 1.1 : 1,
                  rotate: step > 1 ? 360 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                {step > 1 ? <Check className="w-5 h-5" /> : '1'}
              </motion.div>
              <motion.div 
                className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-brand' : 'bg-dark-700'}`}
                animate={{ scaleX: step >= 2 ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              ></motion.div>
              <motion.div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  step >= 2 ? 'bg-brand text-dark-900 shadow-lg shadow-brand/30' : 'bg-dark-700 text-gray-400'
                }`}
                animate={{ scale: step === 2 ? 1.1 : 1 }}
              >
                2
              </motion.div>
            </div>
          </div>

          {/* Form Title */}
          <div className="mb-8 text-center">
            <motion.h3 
              className="font-display text-3xl font-bold text-white mb-3"
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {language === 'pt' ? '⚡ Consultoria Gratuita' : '⚡ Free Consultation'}
            </motion.h3>
            <p className="text-gray-300 text-base font-medium">
              {language === 'pt' ? 'Preencha e receba contato em 2h' : 'Fill and get contacted in 2h'}
            </p>
          </div>

          {/* Form Steps */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative overflow-hidden min-h-[200px]">
              <AnimatePresence initial={false} custom={step} mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-3">
                        {language === 'pt' ? 'Seu Nome Completo' : 'Your Full Name'}
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand transition-colors" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-dark-900/80 border-2 border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand focus:bg-dark-900 transition-all text-base"
                          placeholder={language === 'pt' ? 'Ex: João Silva' : 'Ex: John Doe'}
                          required
                        />
                      </div>
                    </div>

                    <motion.button
                      type="button"
                      onClick={handleNext}
                      disabled={!formData.name}
                      whileHover={{ scale: formData.name ? 1.02 : 1 }}
                      whileTap={{ scale: formData.name ? 0.98 : 1 }}
                      className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all ${
                        formData.name
                          ? 'bg-brand text-dark-900 hover:bg-brand-light shadow-xl shadow-brand/30'
                          : 'bg-dark-700 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {language === 'pt' ? 'Continuar' : 'Continue'}
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={2}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-3">
                        {language === 'pt' ? 'Seu Email' : 'Your Email'}
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand transition-colors" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-dark-900/80 border-2 border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand focus:bg-dark-900 transition-all text-base"
                          placeholder={language === 'pt' ? 'seu@email.com' : 'your@email.com'}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-3">
                        {language === 'pt' ? 'WhatsApp / Telefone' : 'WhatsApp / Phone'}
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand transition-colors" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-dark-900/80 border-2 border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand focus:bg-dark-900 transition-all text-base"
                          placeholder={language === 'pt' ? '+1 (555) 000-0000' : '+1 (555) 000-0000'}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <motion.button
                        type="button"
                        onClick={() => setStep(1)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-dark-700 text-white rounded-xl font-bold text-base hover:bg-dark-600 transition-all border border-white/10"
                      >
                        {language === 'pt' ? '← Voltar' : '← Back'}
                      </motion.button>
                      <motion.button
                        type="submit"
                        disabled={!formData.email || !formData.phone}
                        whileHover={{ scale: formData.email && formData.phone ? 1.02 : 1 }}
                        whileTap={{ scale: formData.email && formData.phone ? 0.98 : 1 }}
                        className={`flex-1 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all ${
                          formData.email && formData.phone
                            ? 'bg-brand text-dark-900 hover:bg-brand-light shadow-xl shadow-brand/30'
                            : 'bg-dark-700 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {language === 'pt' ? 'Agendar Agora ✓' : 'Schedule Now ✓'}
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>

          {/* Trust Badge */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
                <span className="font-medium">{language === 'pt' ? '100% Seguro' : '100% Secure'}</span>
              </div>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand" />
                <span className="font-medium">{language === 'pt' ? 'Dados Protegidos' : 'Data Protected'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand/5 rounded-full blur-3xl -z-10"></div>
    </motion.div>
  );
};

export default HeroForm;
