import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Clapperboard, Layers, Zap } from 'lucide-react';

const processSteps = [
    {
        id: 'step-1',
        title: '01 / Discovery & Strategy',
        description: 'We don\'t just point and shoot. We start by understanding your ideal buyer, analyzing the property\'s unique selling points, and crafting a strategic blueprint.',
        deliverables: ['Market positioned', 'Creative brief', 'Shoot planning'],
        icon: <Target className="w-5 h-5" />
    },
    {
        id: 'step-2',
        title: '02 / Cinematic Production',
        description: 'Our crew aligns on-site, combining high-end drone aerials and cinema camera ground footage to capture true scale, lifestyle, and architectural details.',
        deliverables: ['Aerial mapping', 'Hollywood lighting', '4K/8K cameras'],
        icon: <Clapperboard className="w-5 h-5" />
    },
    {
        id: 'step-3',
        title: '03 / Premium Post-Production',
        description: 'This is where the magic happens. We stitch the narrative together with dynamic editing, sound design, and commercial color grading that elevates perceived value.',
        deliverables: ['Color grading', 'Sound design', 'Narrative cut'],
        icon: <Layers className="w-5 h-5" />
    },
    {
        id: 'step-4',
        title: '04 / Delivery Ecosystem',
        description: 'You receive a complete video suite. Not just a single film, but optimized vertical cuts to stop the scroll on Instagram, run as Ads, and anchor your website loops.',
        deliverables: ['Main Brand Film', 'Social Media Drops', 'Website Loops'],
        icon: <Zap className="w-5 h-5" />
    }
];

const ServicesSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Tracks the vertical scroll over the container 
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end 80%"]
    });

    return (
        <section id="services" className="relative w-full py-24 lg:py-36 bg-[#09090b] text-white overflow-hidden border-t border-white/[0.04]">

            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#43755C]/10 blur-[130px] rounded-[100%] pointer-events-none" />

            <div className="max-w-[1100px] mx-auto px-6 lg:px-8 relative z-10">

                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center gap-5 mb-20 md:mb-32">
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-8 h-px bg-white/10 hidden md:block" />
                        <span className="text-[#62AE88] text-[10.5px] font-bold tracking-[0.2em] uppercase shrink-0">
                            How We Work
                        </span>
                        <div className="w-8 h-px bg-white/10 hidden md:block" />
                    </div>

                    <h2 className="font-display font-medium text-[2.5rem] md:text-[3.5rem] leading-[1.05] tracking-tight text-white max-w-3xl">
                        A seamless process designed to <span className="text-white/40">drive revenue.</span>
                    </h2>
                </div>

                {/* ── Timeline Container ── */}
                <div ref={containerRef} className="relative w-full mx-auto pb-4">

                    {/* The Background Line (Dimmed) */}
                    <div className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-[2px] bg-white/[0.04] rounded-full" />

                    {/* The Animated Active Line (Green) */}
                    <motion.div
                        className="absolute left-[24px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-[2px] bg-gradient-to-b from-[#62AE88] via-[#43755C] to-transparent origin-top rounded-full"
                        style={{
                            scaleY: scrollYProgress,
                            boxShadow: '0 0 12px rgba(98,174,136,0.6)'
                        }}
                    />

                    {/* Timeline Nodes */}
                    <div className="flex flex-col space-y-16 md:space-y-24">
                        {processSteps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={step.id}
                                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                                >

                                    {/* Icon Milestone (Center on Desktop, Left on Mobile) */}
                                    <div className="absolute left-[0px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#09090b] border-4 border-[#09090b] z-10 flex items-center justify-center transition-all duration-500 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0, backgroundColor: 'rgba(67,117,92,0)' }}
                                            whileInView={{ scale: 1, opacity: 1, backgroundColor: 'rgba(67,117,92,0.15)' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                                            className="w-full h-full flex items-center justify-center text-[#62AE88]"
                                        >
                                            <div className="scale-90">{step.icon}</div>
                                        </motion.div>
                                    </div>

                                    {/* Card Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -30 : 30, y: 15 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        viewport={{ once: true, margin: "-10px" }}
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left' : 'md:pl-16 text-left'}`}
                                    >
                                        <div className="group relative flex flex-col p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 shadow-xl shadow-black/20">

                                            <h3 className="font-display text-[20px] lg:text-[22px] font-bold text-white mb-3 tracking-tight group-hover:text-[#82d1aa] transition-colors duration-400">
                                                {step.title}
                                            </h3>

                                            <p className="text-white/50 text-[14px] leading-[1.7] mb-7">
                                                {step.description}
                                            </p>

                                            {/* Deliverables Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {step.deliverables.map((item) => (
                                                    <span key={item} className="px-3 py-1.5 rounded-full bg-[#121214] border border-white/10 text-[10px] uppercase font-bold text-white/40 tracking-wider">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>
                                    </motion.div>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
