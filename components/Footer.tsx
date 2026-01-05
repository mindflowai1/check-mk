import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">{t.footer.rights}</p>
            <p className="text-gray-600 text-xs mt-2">{t.footer.designed}</p>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-gray-400 hover:text-brand transition-colors text-sm">Home</a>
            <a href="#solutions" className="text-gray-400 hover:text-brand transition-colors text-sm">Soluções</a>
            <a href="#portfolio" className="text-gray-400 hover:text-brand transition-colors text-sm">Portfolio</a>
            <a href="#contact" className="text-gray-400 hover:text-brand transition-colors text-sm">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;