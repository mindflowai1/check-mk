import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Film, RefreshCw, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PainPoints: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Rocket className="w-8 h-8 text-black" />,
      title: t.pain.steps[0].title,
      desc: t.pain.steps[0].desc
    },
    {
      icon: <Film className="w-8 h-8 text-black" />,
      title: t.pain.steps[1].title,
      desc: t.pain.steps[1].desc
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-black" />,
      title: t.pain.steps[2].title,
      desc: t.pain.steps[2].desc
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="pain" className="py-32 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
            >
                <span className="text-brand font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                    {t.pain.tag}
                </span>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                    {t.pain.title} <br />
                    <span className="text-brand underline decoration-brand/30 underline-offset-8">{t.pain.titleHighlight}</span>
                </h2>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:w-1/3 flex flex-col justify-end h-full"
            >
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {t.pain.description}
                </p>
                <motion.a 
                    href="#contact" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex w-fit items-center justify-center px-8 py-4 bg-brand text-dark-900 font-bold text-sm uppercase tracking-wider rounded-lg shadow-[0_0_20px_rgba(98,174,136,0.4)] hover:shadow-[0_0_30px_rgba(98,174,136,0.6)] transition-all duration-300"
                >
                    {t.pain.cta}
                </motion.a>
            </motion.div>
        </div>

        {/* Steps Flow */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-3 gap-12"
        >
            {/* Connecting Arrows (Desktop) */}
            <div className="hidden md:block absolute top-[3rem] left-[16%] w-[68%] h-px bg-white/10 z-0">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                    <ArrowRight className="w-4 h-4 text-brand/50" />
                </div>
                <div className="absolute top-0 left-1/3 translate-x-8 -translate-y-1/2">
                     <ArrowRight className="w-4 h-4 text-brand/50" />
                </div>
            </div>

            {steps.map((step, index) => (
                <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center group"
                >
                    {/* Icon Circle */}
                    <div className="mb-8 relative">
                        <div className="absolute inset-0 bg-brand blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                        <motion.div 
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            className="relative w-24 h-24 bg-brand rounded-full flex items-center justify-center shadow-lg shadow-black/50 border-4 border-dark-900 z-10"
                        >
                            {step.icon}
                        </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl font-semibold text-white mb-4 group-hover:text-brand transition-colors duration-300">
                        {step.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                        {step.desc}
                    </p>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;