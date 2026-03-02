import React, { useRef, useEffect } from 'react';
import { ArrowRight, Aperture, Clapperboard, Target } from 'lucide-react';
import { motion } from 'framer-motion';

/* ─── Animation variants ────────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
        opacity: 1,
        transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
    }),
};

/* ─── Feature data ──────────────────────────────────────── */
const features = [
    {
        title: 'High-end Drone Footage',
        description: 'Breathtaking aerial perspectives that showcase your projects from angles your competitors can\'t match.',
        icon: <Aperture className="w-5 h-5" />,
    },
    {
        title: 'Cinematic Production',
        description: 'Hollywood-grade videography that transforms construction sites into compelling visual stories.',
        icon: <Clapperboard className="w-5 h-5" />,
    },
    {
        title: 'Strategic Content',
        description: 'Designed to generate real business results — not just views, but qualified leads and contracts.',
        icon: <Target className="w-5 h-5" />,
    },
];

/* ─── Component ─────────────────────────────────────────── */
const NewHero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Attempt 1: programmatic play on mount
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay was blocked — listen for FIRST user gesture
                const triggerPlay = () => {
                    video.play();
                    // Clean up all listeners once video starts
                    ['touchstart', 'click', 'scroll'].forEach((evt) =>
                        document.removeEventListener(evt, triggerPlay, { capture: true })
                    );
                };

                ['touchstart', 'click', 'scroll'].forEach((evt) =>
                    document.addEventListener(evt, triggerPlay, { once: true, capture: true, passive: true })
                );
            });
        }
    }, []);

    return (
        <div className="w-full h-screen flex flex-col font-sans text-white overflow-hidden relative">

            {/* ── Video background ── */}
            <video
                ref={videoRef}
                autoPlay muted loop playsInline
                poster="/poster-hero.jpg"
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/videosite.mp4" type="video/mp4" />
            </video>

            {/* ── Layer 1: base dark fill (lighter than before to let edges show) ── */}
            <div className="absolute inset-0 bg-black/20 z-[1]" />

            {/* ── Layer 2: vertical gradient (top & bottom darker for nav/features) ── */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-[2]" />

            {/* ── Layer 3: CENTER VIGNETTE (Option 4) for text legibility ── */}
            <div
                className="absolute inset-0 z-[3] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 75%)',
                }}
            />

            {/* ── Layer 4: subtle edge vignette ── */}
            <div
                className="absolute inset-0 z-[4] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%)',
                }}
            />

            {/* ── Layer 5: film grain / noise texture ── */}
            <div
                className="absolute inset-0 z-[5] pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '150px 150px',
                }}
            />

            {/* ═══════════════ NAVBAR ═══════════════ */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-5 max-w-[1440px] mx-auto w-full shrink-0"
            >
                {/* Logo */}
                <div className="font-display font-bold text-2xl tracking-tight text-white select-none"
                    style={{ textShadow: '0 0 30px rgba(255,255,255,0.15)' }}>
                    CHECK MKT
                </div>

                {/* Nav links */}
                <div className="hidden md:flex items-center space-x-12 text-[15px] font-semibold tracking-wide">
                    <a href="#" className="relative text-white pb-1 group">
                        Home
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#62AE88] rounded-full shadow-[0_0_8px_rgba(98,174,136,0.9)]" />
                    </a>
                    {['Portfolio', 'Services', 'About'].map((item) => (
                        <a key={item} href="#"
                            className="relative text-white/50 hover:text-white/85 transition-colors duration-200 pb-1 group">
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-white/25 rounded-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                {/* CTA button */}
                <motion.button
                    whileHover={{ scale: 1.04, boxShadow: '0 6px 32px rgba(98,174,136,0.55)' }}
                    whileTap={{ scale: 0.97 }}
                    className="hidden md:flex items-center justify-center gap-2 bg-[#43755C] text-white px-7 py-3 rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-[#4e8469]"
                    style={{ boxShadow: '0 4px 24px rgba(67,117,92,0.45)' }}
                >
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
                </motion.button>
            </motion.nav>

            {/* ═══════════════ HERO CONTENT ═══════════════ */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center shrink min-h-0">

                {/* Premium pill badge */}
                <motion.div
                    variants={fadeIn} initial="hidden" animate="visible" custom={0}
                    className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-sm text-[10.5px] tracking-[0.22em] text-white/55 uppercase font-semibold"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#62AE88] animate-pulse"
                        style={{ boxShadow: '0 0 8px rgba(98,174,136,0.9)' }} />
                    #1 in Massachusetts · Video Marketing
                </motion.div>

                {/* Main heading — multi-line hierarchy */}
                <motion.div
                    variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    className="mb-3 select-none"
                >
                    <span className="block font-display font-bold text-[1.6rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-tight text-white/85 leading-tight">
                        The #1 Video Marketing Company
                    </span>
                    <span className="block font-display font-medium text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] tracking-tight text-white/55 leading-tight mt-1">
                        for Construction in
                    </span>
                    <span className="block mt-1 font-display font-bold text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] leading-[0.9] tracking-tight text-white drop-shadow-md">
                        Massachusetts<span className="text-[#62AE88]">.</span>
                    </span>
                </motion.div>

                {/* Green divider line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="w-20 h-px mb-5 mx-auto"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #62AE88, transparent)',
                        boxShadow: '0 0 12px rgba(98,174,136,0.6)',
                    }}
                />

                {/* Subtitle */}
                <motion.p
                    variants={fadeUp} initial="hidden" animate="visible" custom={3}
                    className="max-w-[560px] text-white/60 text-[14px] md:text-[16px] leading-relaxed font-normal"
                >
                    We don't just make videos.{' '}
                    <span className="text-white/90 font-semibold">We build your authority.</span>
                </motion.p>
            </div>

            {/* ═══════════════ FEATURES ═══════════════ */}
            <div
                className="relative z-20 w-full shrink-0 py-5 md:py-7 border-t border-white/[0.07]"
                style={{ background: 'rgba(0,0,0,0.52)', backdropFilter: 'blur(14px)' }}
            >
                <div className="max-w-[1200px] mx-auto w-full px-6 flex flex-col md:flex-row items-stretch">
                    {features.map((feature, i) => (
                        <React.Fragment key={feature.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                                className="flex flex-col items-center text-center group cursor-default flex-1 px-6 py-1"
                            >
                                {/* Icon circle */}
                                <div
                                    className="w-[50px] h-[50px] rounded-full bg-[#43755C] flex items-center justify-center text-white mb-3 ring-1 ring-[#62AE88]/25 group-hover:ring-[#62AE88]/60 transition-all duration-300"
                                    style={{ boxShadow: '0 6px 20px rgba(67,117,92,0.40)' }}
                                >
                                    <div className="group-hover:[filter:drop-shadow(0_0_6px_rgba(98,174,136,0.7))] transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="font-display text-[15px] font-bold text-white mb-1.5 tracking-tight group-hover:text-[#82d1aa] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-white/50 text-[11px] font-medium leading-[1.65] max-w-[270px]">
                                    {feature.description}
                                </p>
                            </motion.div>

                            {/* Vertical divider between columns */}
                            {i < features.length - 1 && (
                                <div className="hidden md:block w-px self-stretch flex-shrink-0"
                                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.10), transparent)' }} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default NewHero;
