import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'High-End Homes', 'Commercial', 'Drone Footage'];

const portfolioItems = [
    {
        id: 1,
        title: 'Modern Luxury Estate',
        category: 'High-End Homes',
        description: 'Cinematic tour of a $5M property, highlighting architectural details and lighting.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 2,
        title: 'Downtown Skyscraper',
        category: 'Commercial',
        description: 'Dynamic FPV drone shots weaving through an active commercial construction site.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 3,
        title: 'Coastal Villa Aerials',
        category: 'Drone Footage',
        description: 'Breathtaking sunset aerial tracking shots showcasing property boundaries and views.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 4,
        title: 'Boutique Hotel Renovation',
        category: 'Commercial',
        description: 'Fast-paced transformation reel capturing the essence of the new interior design.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 5,
        title: 'Industrial Complex',
        category: 'Commercial',
        description: 'Detail-oriented showcase of modern industrial facilities mixing ground and drone work.',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80',
    },
];

const PortfolioSection: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const filteredItems = portfolioItems.filter(
        item => activeCategory === 'All' || item.category === activeCategory
    );

    // Se "showAll" for falso, pegamos no máximo 3. Senão pegamos todos.
    const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 3);

    return (
        <section className="relative w-full py-32 lg:py-48 bg-[#121214] text-white">
            <div className="max-w-[1100px] mx-auto px-6 lg:px-8">

                {/* Header (Stacked Left, exactly like image) */}
                <span className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
                    Gallery
                </span>

                <h2 className="font-display font-medium text-[2.8rem] md:text-[3.8rem] leading-tight tracking-tight text-white mb-10 md:mb-14">
                    Our Realizations
                </h2>

                {/* Filters (Aligned left, active state with square border) */}
                <div className="flex items-center gap-4 overflow-x-auto pb-6 mb-12 scrollbar-hide">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setShowAll(false); // reseta ao trocar de categoria
                            }}
                            className={`relative text-[13px] font-medium whitespace-nowrap transition-all duration-300 px-5 py-2 ${activeCategory === category
                                ? 'text-white border border-white/30'
                                : 'text-white/40 hover:text-white/80 border border-transparent'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Portfolio Display - 3 cards per row exactly like the image grid size */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 pb-10">
                    <AnimatePresence mode='popLayout'>
                        {visibleItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="group cursor-pointer flex flex-col w-full"
                            >
                                {/* Video Thumbnail (Square aspect ratio matching image) */}
                                <div className="relative w-full aspect-square bg-[#27272a] overflow-hidden mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] opacity-80 group-hover:opacity-100"
                                    />


                                </div>

                                {/* Content Below Thumbnail */}
                                <div className="flex flex-col flex-grow text-left">
                                    <div className="mb-4">
                                        <span className="text-[#62AE88] text-[11px] font-medium pb-[3px] border-b border-[#62AE88]">
                                            {item.category}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-[1.1rem] md:text-[18px] font-medium text-white mb-2 leading-snug group-hover:text-white/80 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/40 text-[13px] leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More Button (Minimalist, only shows if there's more to show) */}
                {filteredItems.length > 3 && (
                    <div className="w-full flex justify-center mt-2">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-300 text-[13px] font-medium uppercase tracking-[0.1em]"
                        >
                            {showAll ? 'View Less' : 'View More Works'}
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                                <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${showAll ? '-rotate-90' : 'rotate-90'}`} />
                            </div>
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default PortfolioSection;
