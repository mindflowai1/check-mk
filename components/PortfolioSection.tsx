import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const categories = ['All', 'High-End Homes', 'Commercial', 'Drone Footage'];

const portfolioItems = [
    {
        id: 1,
        title: 'Modern Luxury Estate',
        category: 'High-End Homes',
        description: 'Cinematic tour of a $5M property, highlighting architectural details and lighting.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=85',
    },
    {
        id: 2,
        title: 'Downtown Skyscraper',
        category: 'Commercial',
        description: 'Dynamic FPV drone shots weaving through an active commercial construction site.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=85',
    },
    {
        id: 3,
        title: 'Coastal Villa Aerials',
        category: 'Drone Footage',
        description: 'Breathtaking sunset aerial tracking shots showcasing property boundaries and views.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=85',
    },
    {
        id: 4,
        title: 'Boutique Hotel Renovation',
        category: 'Commercial',
        description: 'Fast-paced transformation reel capturing the essence of the new interior design.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=85',
    },
    {
        id: 5,
        title: 'Industrial Complex',
        category: 'Commercial',
        description: 'Detail-oriented showcase of modern industrial facilities mixing ground and drone work.',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=85',
    },
];

const PortfolioSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const filteredItems = portfolioItems.filter(
        item => activeCategory === 'All' || item.category === activeCategory
    );

    const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 3);

    return (
        <section id="portfolio" className="relative w-full py-24 lg:py-32 bg-[#fcfdfd] text-slate-900">
            <div className="max-w-[1100px] mx-auto px-6 lg:px-8">

                {/* Header — eyebrow + extending rule */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-5 mb-6"
                >
                    <span className="text-slate-400 text-[10.5px] font-bold tracking-[0.2em] uppercase shrink-0">
                        Gallery
                    </span>
                    <div className="flex-1 h-px bg-slate-200" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display font-medium text-[2.8rem] md:text-[4rem] leading-[1.04] tracking-[-0.025em] text-slate-900 mb-12 md:mb-16"
                >
                    Our Realizations
                </motion.h2>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-hide"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setShowAll(false);
                            }}
                            className={`relative text-[11px] font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 px-5 py-2.5 rounded-full ${activeCategory === category
                                ? 'text-white bg-[#43755C] shadow-md ring-1 ring-[#43755C]/20'
                                : 'text-slate-500 bg-white hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-x-10 md:gap-y-16 pb-10">
                    <AnimatePresence mode="popLayout">
                        {visibleItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    delay: index * 0.1,
                                }}
                                className="group cursor-pointer flex flex-col w-full"
                            >
                                {/* Image Container (Square on Mobile like IG, 3/2 on Desktop) */}
                                <div className="relative w-full aspect-square md:aspect-[3/2] bg-slate-100 overflow-hidden md:mb-6 rounded-none md:rounded-md shadow-sm">

                                    {/* Index number — hidden on mobile for cleaner IG look */}
                                    <span className="hidden md:block absolute top-3.5 left-4 z-10 text-[11px] font-bold text-white/70 tracking-[0.12em] tabular-nums select-none drop-shadow-md">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Hover Arrow for Desktop */}
                                    <div className="hidden absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white backdrop-blur-md shadow-lg border border-slate-100 md:flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                        <ArrowUpRight className="w-4 h-4 text-slate-800" />
                                    </div>

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-all duration-700 ease-out md:group-hover:scale-[1.05]"
                                    />

                                    {/* Mobile Only: Inner Overlay Text mimicking Reels/TikTok covers */}
                                    <div className="absolute xl:hidden inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex md:hidden flex-col justify-end p-3 pointer-events-none">
                                        <span className="text-[#62AE88] text-[8.5px] font-bold tracking-[0.15em] uppercase mb-1 drop-shadow-md">
                                            {item.category}
                                        </span>
                                        <h3 className="font-display text-[13.5px] font-bold text-white leading-tight drop-shadow-md">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Persistent bottom vignette on Desktop to keep contrast if needed */}
                                    <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                                </div>

                                {/* Content — Desktop Only */}
                                <div className="hidden md:flex flex-col flex-grow px-1.5">

                                    {/* Category row with expanding line */}
                                    <div className="flex items-center gap-3 mb-3.5">
                                        <span className="text-[#43755C] text-[10px] font-bold tracking-[0.14em] uppercase shrink-0">
                                            {item.category}
                                        </span>
                                        <div className="flex-1 h-px bg-slate-200" />
                                    </div>

                                    <h3 className="font-display text-[17px] font-bold text-slate-900 mb-2.5 leading-snug tracking-[-0.015em] group-hover:text-[#43755C] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-[13.5px] leading-relaxed line-clamp-2 pr-4">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View More */}
                {filteredItems.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full flex justify-center mt-2 pt-12 border-t border-slate-200"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group flex items-center gap-3 text-slate-500 hover:text-[#43755C] transition-all duration-300 text-[11px] font-bold uppercase tracking-[0.16em]"
                        >
                            {showAll ? 'View Less' : 'View More Works'}
                            <div
                                className="w-9 h-9 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center group-hover:border-[#43755C]/30 group-hover:bg-slate-50 transition-all duration-300"
                                style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            >
                                <ChevronDown className="w-4 h-4" />
                            </div>
                        </button>
                    </motion.div>
                )}

            </div>
        </section >
    );
};

export default PortfolioSection;
