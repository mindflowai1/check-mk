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
            className="relative h-min group rounded-2xl overflow-hidden bg-dark-800 border border-white/10"
          >
            {/* Video Placeholder with Play Icon */}
            <div className="aspect-video relative bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              
              {/* Camera/Film Icon */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-24 h-24 bg-brand/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-brand/50 group-hover:bg-brand/30 transition-all"
              >
                <Film className="w-12 h-12 text-brand" />
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-brand/20 rounded-lg"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-brand/10 rounded-full"></div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
                <p className="text-brand font-bold mb-1">{t.solutions.imageTag}</p>
                <h3 className="text-2xl font-bold text-white">{t.solutions.imageTitle}</h3>
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