import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.portfolio.items[0].title,
      category: t.portfolio.items[0].category,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
    },
    {
      title: t.portfolio.items[1].title,
      category: t.portfolio.items[1].category,
      image: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920"
    },
    {
      title: t.portfolio.items[2].title,
      category: t.portfolio.items[2].category,
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920"
    },
    {
      title: t.portfolio.items[3].title,
      category: t.portfolio.items[3].category,
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-4xl font-bold text-white mb-2">{t.portfolio.title}</h2>
            <p className="text-gray-300">{t.portfolio.subtitle}</p>
          </div>
          <a href="#contact" className="hidden md:block text-brand font-bold hover:underline underline-offset-4 decoration-brand">
            {t.portfolio.link}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-white/10"
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-brand/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-white ml-1 fill-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand text-xs font-bold uppercase tracking-wider">{project.category}</span>
                <h3 className="font-display text-xl font-semibold text-white mt-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#contact" className="text-brand font-bold border-b border-brand pb-1">
                {t.portfolio.link}
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;