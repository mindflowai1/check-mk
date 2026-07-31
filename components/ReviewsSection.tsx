import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: 'Michael Carter',
        role: 'CEO, Horizon Builders',
        content: '"CHECK MKT completely transformed how we pitch our $10M+ projects. The drone footage and storytelling made investors practically line up. It\'s not social media, it\'s corporate cinema."',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        role: 'Marketing Dir, Prime Real Estate',
        content: '"We stopped competing on price the moment our new video portfolio went live. We look like a multinational firm now. Their attention to lighting and rhythm is unmatched in this industry."',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
        id: 3,
        name: 'David Rossi',
        role: 'Founder, Rossi Landscaping',
        content: '"I thought our work spoke for itself until I saw how they framed it. They took dirt, machines, and sweat, and turned it into an absolute masterpiece. Best ROI we\'ve had all year."',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    },
    {
        id: 4,
        name: 'Elena Rostova',
        role: 'VP of Sales, Apex Towers',
        content: '"The difference is in the details. They don\'t just point a camera; they direct a narrative. Our luxury condo pre-sales jumped 40% immediately after launching their campaign."',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    },
];

const ReviewsSection: React.FC = () => {
    return (
        <section className="relative w-full py-24 lg:py-32 bg-[#fcfdfd] text-slate-900 overflow-hidden border-t border-slate-200/50">
            {/* Very Subtle Background Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#62AE88]/10 via-[#62AE88]/5 to-transparent rounded-full blur-[100px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-tr from-[#2a553f]/10 to-transparent rounded-full blur-[100px] opacity-30 pointer-events-none" />

            <div className="max-w-[1100px] mx-auto px-6 lg:px-8 relative z-10">

                {/* Header (Centered minimalist) */}
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <span className="text-slate-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
                        Testimonials
                    </span>

                    <h2 className="font-display font-medium text-[2.2rem] md:text-[3rem] leading-[1.05] tracking-tight text-slate-900 mb-5">
                        Trusted by industry leaders.
                    </h2>
                    <p className="text-slate-500 font-medium text-[14px] max-w-[450px] leading-relaxed">
                        Don't just take our word for it. Let the companies whose authority we've built speak for the results.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="flex flex-col justify-between bg-white/60 backdrop-blur-sm p-6 lg:p-7 rounded-2xl border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 relative group"
                        >
                            {/* Top Element: Stars */}
                            <div className="flex items-center gap-1 mb-5">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-[#82d1aa] fill-[#82d1aa]" />
                                ))}
                            </div>

                            {/* Quote Content */}
                            <p className="text-slate-600 text-[13px] leading-relaxed italic mb-8 flex-grow relative z-10">
                                {review.content}
                            </p>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-slate-100 mb-6 group-hover:bg-[#62AE88]/20 transition-colors duration-300" />

                            {/* Client Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#43755C]/10 border border-[#43755C]/20 flex items-center justify-center shrink-0 group-hover:bg-[#43755C] transition-all duration-300">
                                    <span className="font-display font-bold text-[14px] text-[#43755C] group-hover:text-white transition-colors">
                                        {review.name.charAt(0)}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-display font-medium text-slate-900 text-[14px] leading-tight mb-0.5 group-hover:text-[#43755C] transition-colors">
                                        {review.name}
                                    </h4>
                                    <span className="text-slate-500 text-[11px] font-medium tracking-wide">
                                        {review.role}
                                    </span>
                                </div>
                            </div>

                            {/* Subtle Decoration Element (Quote Mark watermark) */}
                            <div className="absolute top-6 right-5 text-slate-50 font-display text-[60px] leading-none opacity-50 pointer-events-none group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                                "
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ReviewsSection;
