import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <section className="relative w-full py-24 lg:py-32 bg-[#fcfdfd] text-slate-900 overflow-hidden">
            {/* Background subtle elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#62AE88]/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#62AE88]/10 blur-[120px] pointer-events-none" />

            <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                {/* ─── Left Column: Image & Accents (Editorial Style) ─── */}
                <div className="w-full lg:w-[45%] relative">
                    {/* Dark/Glass Offset Boxes (matching the reference image's aesthetic) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="absolute -top-8 -right-8 w-32 h-32 bg-white rounded border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] hidden lg:block z-0"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 20, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/60 backdrop-blur-xl border border-[#62AE88]/20 rounded z-20 hidden lg:block"
                        style={{ boxShadow: '0 20px 40px rgba(67,117,92,0.1)' }}
                    />

                    {/* Main Image Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="relative z-10 w-full aspect-[4/5] bg-slate-200 rounded overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541888081622-1bb5920a5add?auto=format&fit=crop&w=800&q=80"
                            alt="Construction site film production"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Luxury Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/5 to-transparent opacity-80" />

                        {/* Badge inside image */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/90 backdrop-blur-md border border-white/40 text-slate-800 text-xs font-bold tracking-wide shadow-sm">
                                🎬 High-end standard
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ─── Right Column: Text & CTA ─── */}
                <div className="w-full lg:w-[55%] flex flex-col items-start text-left lg:pt-8">

                    {/* Subtitle Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#43755C]/5 border border-[#62AE88]/30 text-[#2a553f] text-[10.5px] font-bold tracking-[0.2em] uppercase mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#43755C] animate-pulse"
                            style={{ boxShadow: '0 0 8px rgba(67,117,92,0.6)' }} />
                        The CHECK MKT Difference
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display font-medium text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] leading-[1.05] tracking-tight text-slate-900 mb-8"
                    >
                        More than an agency.<br />
                        <span className="font-bold text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #09090b 20%, #2a553f 80%, #43755C 100%)' }}>
                            We are your film directors.
                        </span>
                    </motion.h2>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed font-normal mb-10 max-w-[600px]"
                    >
                        We avoid <span className="text-slate-900 font-semibold">"generic social media"</span>.
                        We deliver a robust visual structure that makes your construction, landscaping,
                        or real estate business look like a multinational.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.03, boxShadow: '0 6px 30px rgba(67,117,92,0.40)' }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-4 bg-[#43755C] text-white pl-8 pr-2 py-2 rounded-full text-[14px] font-bold transition-all duration-300 group ring-1 ring-[#62AE88]/30 hover:ring-[#62AE88]"
                    >
                        See Our Impact
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-sm">
                            <ArrowRight className="w-4 h-4 text-white group-hover:text-[#43755C] transition-colors" />
                        </div>
                    </motion.button>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
