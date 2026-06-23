import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronDown, Film } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { portfolioVideos, VideoItem } from './portfolioData';

const categories: ('all' | 'construction' | 'landscaping' | 'real-estate' | 'ads')[] = [
    'all',
    'construction',
    'landscaping',
    'real-estate',
    'ads'
];

const PortfolioSection: React.FC = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<'all' | 'construction' | 'landscaping' | 'real-estate' | 'ads'>('all');
    const [showAll, setShowAll] = useState(false);
    const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    const fallbackThumbnails = {
        construction: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
        landscaping: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=80',
        'real-estate': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
        ads: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80'
    };

    // Escape key listener to close video modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveVideo(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Filter items based on active category
    const filteredItems = portfolioVideos.filter(
        item => activeCategory === 'all' || item.category === activeCategory
    );

    // Limit shown items to 6 initially, or show all if showAll is true
    const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

    // Google Drive direct embed converter
    const getEmbedUrl = (url: string) => {
        const driveRegex = /(?:drive\.google\.com\/file\/d\/|drive\.google\.com\/open\?id=)([a-zA-Z0-9_-]+)/;
        const match = url.match(driveRegex);
        if (match && match[1]) {
            return `https://drive.google.com/file/d/${match[1]}/preview`;
        }
        return url;
    };

    return (
        <section id="portfolio" className="relative w-full py-24 lg:py-32 bg-[#fcfdfd] text-slate-900 overflow-hidden border-t border-slate-100">
            {/* Ambient gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#62AE88]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#43755C]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-5 mb-6"
                >
                    <span className="text-slate-400 text-[10.5px] font-bold tracking-[0.2em] uppercase shrink-0">
                        {t.portfolio.title || 'Portfolio'}
                    </span>
                    <div className="flex-1 h-px bg-slate-200" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display font-medium text-[2.8rem] md:text-[4rem] leading-[1.04] tracking-[-0.025em] text-slate-900 mb-4"
                >
                    {t.portfolio.title || 'Our Realizations'}
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-slate-500 text-[15px] font-medium max-w-xl mb-12 md:mb-16 leading-relaxed"
                >
                    {t.portfolio.subtitle || 'Explore our cinematic video catalog divided by project type.'}
                </motion.p>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-hide"
                >
                    {categories.map((cat) => {
                        const label = t.portfolio.categories?.[cat] || cat;
                        const count = cat === 'all' ? portfolioVideos.length : portfolioVideos.filter(item => item.category === cat).length;
                        
                        return (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setShowAll(false);
                                }}
                                className={`relative text-[11px] font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 px-5 py-2.5 rounded-full flex items-center gap-2 ${activeCategory === cat
                                    ? 'text-white bg-[#43755C] shadow-md ring-1 ring-[#43755C]/20'
                                    : 'text-slate-500 bg-white hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'
                                    }`}
                            >
                                <span>{label}</span>
                                <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${activeCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-10">
                    <AnimatePresence mode="popLayout">
                        {visibleItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{
                                    duration: 0.45,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    delay: Math.min(index * 0.05, 0.3),
                                }}
                                className="group cursor-pointer flex flex-col w-full bg-white rounded-xl overflow-hidden border border-slate-150 shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.06)] hover:border-[#62AE88]/30 transition-all duration-300"
                                onClick={() => setActiveVideo(item)}
                            >
                                {/* Thumbnail Container */}
                                <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
                                    <img
                                        src={imageErrors[item.id] ? fallbackThumbnails[item.category] : item.thumbnail}
                                        alt={item.title}
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                        onError={() => setImageErrors(prev => ({ ...prev, [item.id]: true }))}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    
                                    {/* Vignette Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                    
                                    {/* Play Button Glow Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div 
                                            whileHover={{ scale: 1.15 }}
                                            className="w-14 h-14 rounded-full bg-[#62AE88] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(98,174,136,0.6)] group-hover:bg-[#4a8566]"
                                        >
                                            <Play className="w-5 h-5 fill-white ml-0.5 text-white" />
                                        </motion.div>
                                    </div>

                                    {/* Aspect Ratio Badge (Vertical vs Horizontal indicator) */}
                                    {item.isVertical && (
                                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 flex items-center gap-1.5 text-[9px] font-bold text-white tracking-wider uppercase">
                                            <Film className="w-3 h-3 text-[#62AE88]" />
                                            <span>Reel / Ad</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Details */}
                                <div className="flex flex-col p-5 flex-grow">
                                    <span className="text-[#43755C] text-[9.5px] font-bold tracking-[0.15em] uppercase mb-2">
                                        {t.portfolio.categories?.[item.category] || item.category}
                                    </span>
                                    
                                    <h3 className="font-display text-[16px] font-bold text-slate-800 mb-1 leading-snug group-hover:text-[#43755C] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-slate-450 text-[12.5px] leading-relaxed line-clamp-2">
                                        {t.portfolio.subtitle ? `${t.portfolio.categories?.[item.category]} project` : `Cinematic video for ${item.title.toLowerCase()}`}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View More Buttons */}
                {filteredItems.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex justify-center mt-8 pt-8 border-t border-slate-100"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group flex items-center gap-3 text-slate-500 hover:text-[#43755C] transition-all duration-300 text-[11px] font-bold uppercase tracking-[0.16em]"
                        >
                            {showAll ? (t.portfolio.viewLess || 'View Less') : (t.portfolio.viewMore || 'View More Works')}
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

            {/* Cinematic Lightbox Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-6"
                        onClick={() => setActiveVideo(null)}
                    >
                        {/* Close button: bottom center on mobile, top right on desktop */}
                        <button
                            className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0 md:top-6 md:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-6 py-2.5 md:p-3 rounded-full border border-white/10 transition-colors z-50 shadow-lg flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                            onClick={() => setActiveVideo(null)}
                        >
                            <X className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="md:hidden">{t.portfolio.close || 'Close'}</span>
                        </button>

                        {/* Modal & Metadata Container */}
                        <div 
                            className="flex flex-col items-center justify-center w-full max-h-[80vh] md:max-h-[85vh] select-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Video Container */}
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className={`relative bg-black rounded-xl overflow-hidden shadow-2xl border border-white/5 w-full ${
                                    activeVideo.isVertical
                                        ? 'max-w-[360px] aspect-[9/16]'
                                        : 'max-w-[1000px] aspect-video'
                                }`}
                            >
                                {/* Video Playback */}
                                <iframe
                                    src={getEmbedUrl(activeVideo.videoUrl)}
                                    title={activeVideo.title}
                                    className="w-full h-full border-0 rounded-xl"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>
                            
                            {/* Metadata below the video container */}
                            <div className="mt-4 text-center px-4 max-w-xl pointer-events-none">
                                <span className="text-[#62AE88] text-[10px] font-bold uppercase tracking-[0.15em] block mb-1">
                                    {t.portfolio.categories?.[activeVideo.category] || activeVideo.category}
                                </span>
                                <h4 className="text-white font-bold text-[16px] md:text-lg leading-snug">
                                    {activeVideo.title}
                                </h4>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
};

export default PortfolioSection;
