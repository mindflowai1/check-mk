import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#fcfdfd] pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <div>
            <a href="#home" className="flex items-center gap-2.5 md:gap-3.5 mb-5 cursor-pointer group">
              <img
                src="/logo.png"
                alt="Check Logo"
                className="h-9 md:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="font-display font-bold text-2xl md:text-[28px] leading-none tracking-tight text-slate-900 select-none whitespace-nowrap">
                CHECK <span className="text-[#62AE88]">MKT</span>
              </div>
            </a>
            <p className="text-slate-600 text-[13.5px] max-w-xs leading-relaxed">
              The #1 Video Marketing strategy designed exclusively to scale high-ticket Real Estate and Construction.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://instagram.com/check.mkt" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#62AE88] hover:text-[#43755C] transition-colors shadow-sm">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#62AE88] hover:text-[#43755C] transition-colors shadow-sm">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:border-[#62AE88] hover:text-[#43755C] transition-colors shadow-sm">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-slate-200 text-[12px] text-slate-500 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Check MKT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;