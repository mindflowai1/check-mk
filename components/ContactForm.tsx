import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              {t.contact.title} <span className="text-brand">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center border border-white/10 text-brand">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">contato@checkmkt.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center border border-white/10 text-brand">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center border border-white/10 text-brand">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Atendimento</p>
                  <p className="font-medium">USA & Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 bg-dark-900 p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl shadow-black/50"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.labels.name}</label>
                  <input type="text" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.labels.company}</label>
                  <input type="text" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.labels.email}</label>
                  <input type="email" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.labels.phone}</label>
                  <input type="tel" className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.labels.goal}</label>
                <select className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none">
                  {t.contact.goals.map((goal: string, idx: number) => (
                     <option key={idx}>{goal}</option>
                  ))}
                </select>
              </div>

              <button type="button" className="w-full py-4 bg-brand hover:bg-brand-light text-dark-900 font-bold rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-brand/20">
                <Send className="w-5 h-5" />
                {t.contact.labels.submit}
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                {t.contact.labels.secure}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;