import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="w-full bg-[#09090b] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-16 items-start">
          
          {/* Column 1: Brand Info */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 md:gap-3.5 mb-5 cursor-pointer group">
              <img
                src="/logo%20check%20mkt%20navbar.png"
                alt="Check MKT"
                className="h-10 md:h-12 w-auto object-contain origin-left group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
              />
              <div className="font-display font-bold text-2xl md:text-[28px] leading-none tracking-tight text-white select-none whitespace-nowrap"
                style={{ textShadow: '0 0 30px rgba(255,255,255,0.1) ' }}>
                CHECK <span className="text-[#62AE88]">MKT</span>
              </div>
            </a>
            <p className="text-white/60 text-[13.5px] max-w-xs leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col gap-4 text-[14px]">
            <h4 className="text-white font-bold tracking-[0.1em] text-[11px] uppercase text-[#62AE88]">
              {language === 'pt' ? 'Contato' : 'Contact'}
            </h4>
            
            <div className="flex items-center gap-3 text-white/60 hover:text-[#62AE88] transition-colors group">
              <Phone className="w-4 h-4 text-[#62AE88] shrink-0" />
              <a href="tel:7744466676" className="hover:underline">774 446 6676</a>
            </div>

            <div className="flex items-start gap-3 text-white/60 hover:text-[#62AE88] transition-colors group">
              <MapPin className="w-4 h-4 text-[#62AE88] shrink-0 mt-0.5" />
              <span className="leading-relaxed">67 sea street Hyannis - MA  02601</span>
            </div>

            <div className="flex items-center gap-3 text-white/60 hover:text-[#62AE88] transition-colors group">
              <Mail className="w-4 h-4 text-[#62AE88] shrink-0" />
              <a href="mailto:info@checkmktus.com" className="hover:underline">info@checkmktus.com</a>
            </div>
          </div>

          {/* Column 3: Social Medias */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-[0.1em] text-[11px] uppercase text-[#62AE88]">
              Social
            </h4>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/check.mkt" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:border-[#62AE88] hover:text-[#62AE88] transition-all shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:border-[#62AE88] hover:text-[#62AE88] transition-all shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5 text-[12px] text-white/40 font-medium tracking-wide">
          <p>{t.footer.rights.replace('2025', new Date().getFullYear().toString())}</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;