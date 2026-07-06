import React, { useEffect, useState } from 'react';
import { ArrowLeft, Loader2, Monitor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Footer from './Footer';

const BriefingForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col justify-between font-sans selection:bg-[#62AE88]/30 selection:text-white">
      {/* Header */}
      <header className="w-full bg-[#09090b]/80 border-b border-white/5 py-5 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 md:gap-3.5 group">
            <img
              src="/logo check mkt navbar.png"
              alt="Check MKT"
              className="h-10 w-auto object-contain origin-left group-hover:scale-105 transition-transform duration-300"
            />
            <div className="font-display font-bold text-xl md:text-2xl leading-none tracking-tight text-white select-none whitespace-nowrap">
              CHECK <span className="text-[#62AE88]">MKT</span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#62AE88] hover:text-[#62AE88] transition-all text-xs font-semibold uppercase tracking-wider bg-white/5 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.briefing?.backHome || (language === 'pt' ? 'Voltar para Home' : 'Back to Home')}
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[960px] mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col items-center">
        {/* Page Title */}
        <div className="text-center max-w-2xl mb-12 md:mb-16">
          <span className="text-[#62AE88] text-xs font-bold uppercase tracking-[0.2em] bg-[#62AE88]/10 px-4 py-1.5 rounded-full border border-[#62AE88]/20 inline-block mb-4">
            {language === 'pt' ? 'Briefing Online' : 'Online Briefing'}
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-5">
            {t.briefing?.title || (language === 'pt' ? 'Briefing de Criação de Site' : 'Website Briefing Form')}
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            {t.briefing?.subtitle || (language === 'pt' 
              ? 'Preencha as informações abaixo com o máximo de detalhes possível para iniciarmos a estruturação do seu novo site.' 
              : 'Fill out the information below with as much detail as possible so we can start structuring your new website.')}
          </p>
        </div>

        {/* Browser-style Wrapper Container for Iframe */}
        <div className="w-full bg-[#18181b]/40 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden relative group">
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-[#62AE88]/20 to-transparent rounded-2xl opacity-50 blur-sm pointer-events-none group-hover:opacity-75 transition-opacity duration-500"></div>

          {/* Browser Header Bar */}
          <div className="relative bg-[#18181b]/95 border-b border-white/10 px-4 py-3.5 flex items-center justify-between select-none z-20">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 block"></span>
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 block"></span>
              <span className="w-3 h-3 rounded-full bg-[#10b981]/80 block"></span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#09090b]/60 border border-white/5 rounded-md text-[11px] text-white/40 font-mono w-[300px] justify-center truncate">
              docs.google.com/forms/check-mkt/briefing
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Monitor className="w-4 h-4" />
            </div>
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute top-[52px] left-0 right-0 bottom-0 bg-[#09090b] flex flex-col items-center justify-center gap-4 z-10 py-32 rounded-b-2xl">
              <Loader2 className="w-10 h-10 text-[#62AE88] animate-spin" />
              <p className="text-white/60 text-sm tracking-wide animate-pulse">
                {t.briefing?.loading || (language === 'pt' ? 'Carregando formulário...' : 'Loading form...')}
              </p>
            </div>
          )}

          {/* Iframe wrapper */}
          <div className="relative w-full h-[1800px] md:h-[2923px] bg-white overflow-hidden rounded-b-2xl z-0">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSflNcnxAIxtssny876-tFt25We0yBsq21N3VqVFgHutoq_wBA/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              onLoad={() => setIsLoading(false)}
              title="Google Forms Briefing"
              className="w-full h-full border-0 block"
            >
              {language === 'pt' ? 'Carregando…' : 'Loading…'}
            </iframe>
          </div>
        </div>

        {/* Support Note */}
        <div className="mt-8 text-center text-xs md:text-sm text-white/40 flex items-center gap-2">
          <span>{language === 'pt' ? 'Precisa de ajuda?' : 'Need help?'}</span>
          <a href="#contact" className="text-[#62AE88] hover:underline font-medium">
            {language === 'pt' ? 'Fale com nosso suporte' : 'Contact support'}
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BriefingForm;
