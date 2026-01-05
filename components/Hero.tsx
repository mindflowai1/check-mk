import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import HeroForm from './HeroForm';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-dark-900 pt-32 pb-10">

      {/* Background Floating Stars */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] text-brand/30 hidden md:block z-0"
      >
        <Star className="w-8 h-8 fill-brand/10" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[10%] text-white/10 hidden md:block z-0"
      >
        <Star className="w-6 h-6 fill-white/5" />
      </motion.div>

      {/* CENTERED GLOW - Behind all content */}
      <motion.div
        animate={{
          opacity: [0.35, 0.65, 0.35],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div className="w-[500px] h-[500px] md:w-[900px] md:h-[900px] bg-brand/30 rounded-full blur-[150px] mix-blend-screen" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left flex-grow justify-center gap-12 lg:gap-16">

        {/* Left Side - Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center lg:items-start max-w-3xl flex-1"
        >
          {/* Subtitle / Tag */}
          <div className="flex items-center gap-4 md:gap-6 mb-8 text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            <span className="hover:text-brand transition-colors cursor-default">{t.hero.tags[0]}</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <span className="hover:text-brand transition-colors cursor-default">{t.hero.tags[1]}</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <span className="hover:text-brand transition-colors cursor-default">{t.hero.tags[2]}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight drop-shadow-2xl relative z-10 text-center lg:text-left">
            <span className="relative inline-block">
              {/* Animated Glow effect behind the first line */}
              <motion.span
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.15, 1],
                  filter: ["blur(40px)", "blur(60px)", "blur(40px)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-brand/50"
              />
              <span className="relative">{t.hero.titlePre}</span>
            </span>
            <br />
            <span className="relative inline-block">
              <motion.span
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.15, 1],
                  filter: ["blur(40px)", "blur(60px)", "blur(40px)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute inset-0 bg-brand/50"
              />
              <span className="relative">{t.hero.titleBreak} </span>
            </span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#82d1aa] to-[#4a8566] cursor-default filter drop-shadow-[0_0_25px_rgba(98,174,136,0.5)]">
                {t.hero.titleHighlight}
              </span>
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed drop-shadow-md relative z-10 font-medium lg:text-left text-center">
            {t.hero.description}
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-3 mb-8 lg:items-start items-center">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-brand/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium">{t.hero.cta === 'Agendar Consultoria Grátis' ? 'Resposta em até 2 horas' : 'Response within 2 hours'}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-brand/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium">{t.hero.cta === 'Agendar Consultoria Grátis' ? 'Consultoria 100% gratuita' : '100% free consultation'}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-brand/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium">{t.hero.cta === 'Agendar Consultoria Grátis' ? 'Sem compromisso' : 'No commitment'}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end flex-shrink-0 lg:self-stretch">
          <HeroForm />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full mt-auto pt-20 pb-10 relative z-10 border-t border-white/5 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-brand mb-2">95%</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Taxa de Retenção</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-brand mb-2">48h</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Entrega Média</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-brand mb-2">500+</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-brand mb-2">3x</div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">ROI Médio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;