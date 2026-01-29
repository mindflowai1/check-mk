import React from 'react';
import { motion } from 'framer-motion';
import { Video, Award, Target, Layout, Film } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t.solutions.items[0].title,
      desc: t.solutions.items[0].desc,
      icon: <Video className="w-6 h-6" />
    },
    {
      title: t.solutions.items[1].title,
      desc: t.solutions.items[1].desc,
      icon: <Target className="w-6 h-6" />
    },
    {
      title: t.solutions.items[2].title,
      desc: t.solutions.items[2].desc,
      icon: <Award className="w-6 h-6" />
    },
    {
      title: t.solutions.items[3].title,
      desc: t.solutions.items[3].desc,
      icon: <Layout className="w-6 h-6" />
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand font-bold tracking-widest uppercase text-sm">{t.solutions.tag}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            {t.solutions.title} <span className="text-brand">{t.solutions.titleHighlight}</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {t.solutions.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[350px] md:h-full group rounded-2xl overflow-hidden bg-dark-800 border border-white/10"
          >
            {/* Decorative background texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-700 to-dark-900">
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute top-1/4 -right-10 w-48 h-48 bg-brand/10 rounded-full blur-[80px]"></div>

            {/* Icon - Repositioned and more elegant */}
            <div className="absolute top-8 right-8 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:-mt-8">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-20 h-20 md:w-32 md:h-32 bg-brand/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-brand/20 transition-all duration-500"
              >
                <Film className="w-10 h-10 md:w-16 md:h-16 text-brand drop-shadow-[0_0_15px_rgba(46,204,113,0.3)]" />
              </motion.div>
            </div>

            {/* Content area with better legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-[2px] bg-brand"></div>
                  <p className="text-brand font-bold text-xs uppercase tracking-widest leading-none">{t.solutions.imageTag}</p>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                    {t.solutions.imageTitle}
                </h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-dark-800 p-6 rounded-xl border border-white/5 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10 transition-all duration-300 flex items-start gap-4 group/card"
              >
                <div className="bg-brand/10 p-3 rounded-lg text-brand shrink-0 group-hover/card:bg-brand/20 group-hover/card:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;