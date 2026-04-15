import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroForm: React.FC = () => {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
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
      // Handle the form submission
      alert('Obrigado! Entraremos em contato em breve.');
      setFormData({ name: '', company: '', email: '', phone: '' });
      setStep(1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-md h-full flex items-center justify-center"
    >
      <div className="relative bg-white/[0.04] backdrop-blur-2xl rounded-[24px] border border-white/10 p-8 md:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] w-full">
        
        {/* Glow effect slightly visible behind the form */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#62AE88]/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

        <div className="relative z-10">
          
          {/* Header section matching reference */}
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#62AE88] uppercase">
                {language === 'pt' ? 'Pronto para escalar?' : 'Ready to scale?'}
              </span>
              <div className="h-px w-8 bg-white/10" />
            </div>

            <h3 className="font-display text-[2.5rem] md:text-[3rem] font-bold text-white leading-tight tracking-tight">
              {language === 'pt' ? 'Vamos fazer ' : 'Let\'s talk '}
              <span className="text-white/30">{language === 'pt' ? 'negócios.' : 'business.'}</span>
            </h3>
          </div>

          {/* Simple Minimal Progress Bar */}
          <div className="flex gap-2 w-full mb-8">
            <motion.div 
              className="h-[3px] rounded-full bg-[#62AE88]"
              initial={{ width: "50%" }}
              animate={{ width: step === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.4 }}
              style={{ minWidth: step === 1 ? "50%" : "0%" }}
            />
            {step === 1 && <div className="h-[3px] flex-1 bg-white/10 rounded-full" />}
          </div>

          {/* Form Steps */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative overflow-hidden min-h-[260px]">
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
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.1em] text-white/50 uppercase mb-2 ml-1">
                        {language === 'pt' ? 'Seu Nome' : 'Your Name'}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#62AE88]/80 focus:bg-white/[0.03] transition-colors text-[15px] font-medium"
                        placeholder={language === 'pt' ? 'Ex: João Silva' : 'John Doe'}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.1em] text-white/50 uppercase mb-2 ml-1">
                        {language === 'pt' ? 'Sua Empresa' : 'Company'}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#62AE88]/80 focus:bg-white/[0.03] transition-colors text-[15px] font-medium"
                        placeholder={language === 'pt' ? 'Acme Construtora' : 'Acme Real Estate'}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!formData.name}
                      className={`w-full py-4 rounded-xl font-bold text-[15px] flex items-center justify-between px-6 transition-all mt-6 ${
                        formData.name
                          ? 'bg-[#559172] text-white hover:bg-[#62AE88] hover:-translate-y-0.5 shadow-[0_0_15px_rgba(98,174,136,0.2)] hover:shadow-[0_0_25px_rgba(98,174,136,0.4)]'
                          : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
                      }`}
                    >
                      <span>{language === 'pt' ? 'Próximo Passo' : 'Next Step'}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
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
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.1em] text-white/50 uppercase mb-2 ml-1">
                        {language === 'pt' ? 'E-mail Comercial' : 'Work Email'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#62AE88]/80 focus:bg-white/[0.03] transition-colors text-[15px] font-medium"
                        placeholder={language === 'pt' ? 'voce@empresa.com' : 'you@company.com'}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.1em] text-white/50 uppercase mb-2 ml-1">
                        {language === 'pt' ? 'Telefone / WhatsApp' : 'Phone / WhatsApp'}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#62AE88]/80 focus:bg-white/[0.03] transition-colors text-[15px] font-medium"
                        placeholder={language === 'pt' ? '+1 (555) 000-0000' : '+1 (555) 000-0000'}
                        required
                      />
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-4 bg-white/5 border border-white/10 text-white/70 rounded-xl font-bold text-[15px] hover:bg-white/10 hover:text-white transition-all flex items-center justify-center shrink-0 backdrop-blur-sm"
                      >
                        {language === 'pt' ? 'Voltar' : 'Back'}
                      </button>
                      <button
                        type="submit"
                        disabled={!formData.email || !formData.phone}
                        className={`flex-1 py-4 rounded-xl font-bold text-[15px] flex items-center justify-between px-6 transition-all ${
                          formData.email && formData.phone
                            ? 'bg-[#559172] text-white hover:bg-[#62AE88] hover:-translate-y-0.5 shadow-[0_0_15px_rgba(98,174,136,0.2)] hover:shadow-[0_0_25px_rgba(98,174,136,0.4)]'
                            : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'
                        }`}
                      >
                        <span>{language === 'pt' ? 'Finalizar' : 'Complete'}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>

        </div>
      </div>
    </motion.div>
  );
};

export default HeroForm;
