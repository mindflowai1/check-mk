import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#09090b] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
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

          <div className="flex items-center gap-4">
            <a href="https://instagram.com/check.mkt" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:border-[#62AE88] hover:text-[#62AE88] transition-all shadow-sm">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:border-[#62AE88] hover:text-[#62AE88] transition-all shadow-sm">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:border-[#62AE88] hover:text-[#62AE88] transition-all shadow-sm">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5 text-[12px] text-white/40 font-medium tracking-wide">
          <p>{t.footer.rights.replace('2025', new Date().getFullYear().toString())}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;