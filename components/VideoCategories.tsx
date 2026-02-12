import React from 'react';
import { motion } from 'framer-motion';
import { Home, Hammer, Flower2, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VideoCategories: React.FC = () => {
    const { t } = useLanguage();

    const categories = [
        {
            icon: Home,
            title: t.videoCategories.items[0].title,
            image: "https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: Hammer,
            title: t.videoCategories.items[1].title,
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: Flower2,
            title: t.videoCategories.items[2].title,
            image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: Building2,
            title: t.videoCategories.items[3].title,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className="py-32 bg-dark-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
            
            {/* Decorative Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display text-3xl md:text-5xl font-bold text-white text-center mb-16"
                >
                    {t.videoCategories.title}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                            >
                                {/* Image Background */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${category.image})` }}
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300" />

                                {/* Glass Border */}
                                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-brand/40 rounded-2xl transition-colors duration-300"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                    {/* Icon with Animation */}
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-6 p-4 bg-gradient-to-br from-brand/30 to-brand/10 backdrop-blur-sm rounded-2xl border border-brand/30 group-hover:bg-brand/40 group-hover:shadow-lg group-hover:shadow-brand/30 transition-all duration-300"
                                    >
                                        <IconComponent className="w-10 h-10 text-brand" />
                                    </motion.div>
                                    
                                    {/* Title */}
                                    <h3 className="font-display text-xl font-bold text-white leading-tight transform group-hover:scale-105 transition-transform duration-300">
                                        {category.title}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default VideoCategories;
