import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    goal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const webhookUrl = 'https://n8n-n8n-start.kof6cn.easypanel.host/webhook/ea66ef53-6913-4e75-aeb7-d8ab498c848c';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSubmitting) {
      setIsSubmitting(true);
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            source: 'Footer Contact Form',
            language: language,
            timestamp: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          const successMsg = language === 'pt' 
            ? 'Mensagem enviada com sucesso! Entraremos em contato.' 
            : 'Message sent successfully! We will get in touch.';
          alert(successMsg);
          setFormData({ name: '', company: '', email: '', phone: '', goal: '' });
        } else {
          throw new Error('Erro ao enviar');
        }
      } catch (error) {
        const errorMsg = language === 'pt'
          ? 'Erro ao enviar mensagem. Tente novamente mais tarde.'
          : 'Error sending message. Please try again later.';
        alert(errorMsg);
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-800 relative overflow-hidden text-white">
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
                  <p className="text-sm text-gray-500">{t.contact.info?.emailLabel || 'Email'}</p>
                  <p className="font-medium">{t.contact.info?.emailValue || 'contato@checkmkt.com'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center border border-white/10 text-brand">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.contact.info?.whatsappLabel || 'WhatsApp'}</p>
                  <p className="font-medium">{t.contact.info?.whatsappValue || '+1 (555) 123-4567'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center border border-white/10 text-brand">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.contact.info?.servingLabel || 'Atendimento'}</p>
                  <p className="font-medium">{t.contact.info?.servingValue || 'USA & Brasil'}</p>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.labels.name}</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.labels.company}</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.labels.email}</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.labels.phone}</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">{t.contact.labels.goal}</label>
                <select 
                  value={formData.goal}
                  onChange={(e) => setFormData({...formData, goal: e.target.value})}
                  className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none"
                >
                  <option value="" disabled>{language === 'pt' ? 'Selecione seu objetivo' : 'Select your goal'}</option>
                  {t.contact.goals.map((goal: string, idx: number) => (
                    <option key={idx} value={goal}>{goal}</option>
                  ))}
                </select>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-brand hover:bg-brand-light text-dark-900 font-bold rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {isSubmitting ? (language === 'pt' ? 'Enviando...' : 'Sending...') : t.contact.labels.submit}
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