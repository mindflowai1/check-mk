import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="relative w-full min-h-[66vh] flex items-center py-16 lg:py-20 bg-[#fcfdfd] text-slate-900 overflow-hidden">
            {/* Background subtle elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#62AE88]/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#62AE88]/10 blur-[120px] pointer-events-none" />

            <div className="max-w-[900px] mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center relative z-10">
                {/* ─── Conceptual Text Center ─── */}

                {/* Subtitle Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#43755C]/5 border border-[#62AE88]/30 text-[#2a553f] text-[9.5px] font-bold tracking-[0.2em] uppercase mb-6"
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
                    className="font-display font-medium text-[2.2rem] md:text-[3rem] lg:text-[4.2rem] leading-[1.05] tracking-tight text-slate-900 mb-8"
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
                    className="text-slate-600 text-[16px] md:text-[17px] lg:text-[19px] leading-relaxed font-normal mb-10 max-w-[600px] mx-auto"
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
                    className="flex items-center gap-3 bg-[#43755C] text-white pl-7 pr-1.5 py-1.5 rounded-full text-[13.5px] font-bold transition-all duration-300 group ring-1 ring-[#62AE88]/30 hover:ring-[#62AE88] mx-auto"
                >
                    See Our Impact
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-sm">
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-[#43755C] transition-colors" />
                    </div>
                </motion.button>
            </div>
        </section>
    );
};

export default AboutSection;
