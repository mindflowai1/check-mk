import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t.testimonials.items[0].text,
      author: "Carlos M.",
      company: "CM Construction LLC",
      role: t.testimonials.items[0].role
    },
    {
      text: t.testimonials.items[1].text,
      author: "Fernanda L.",
      company: "Miami Real Estate Group",
      role: t.testimonials.items[1].role
    },
    {
      text: t.testimonials.items[2].text,
      author: "Ricardo S.",
      company: "Green Leaf Landscaping",
      role: t.testimonials.items[2].role
    }
  ];

  return (
    <section className="py-24 bg-dark-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            {t.testimonials.title} <span className="text-brand">{t.testimonials.titleHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-dark-800 p-8 rounded-2xl relative border border-white/5 hover:border-brand/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand/10"
            >
              <Quote className="absolute top-8 right-8 text-brand/20 w-10 h-10" />
              <div className="flex flex-col h-full justify-between">
                <p className="text-gray-300 italic mb-6 text-base md:text-lg relative z-10 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="text-white font-bold">{t.author}</p>
                  <p className="text-brand text-sm">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;