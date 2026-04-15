import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Aperture, Clapperboard, Target, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import HeroForm from './HeroForm';

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
        title: 'Cinematic Production',
        description: 'Hollywood-grade videography that transforms construction sites into compelling visual stories.',
        icon: <Clapperboard className="w-5 h-5" />,
    },
    {
        title: 'High-end Drone Footage',
        description: 'Breathtaking aerial perspectives that showcase your projects from angles your competitors can\'t match.',
        icon: <Aperture className="w-5 h-5" />,
    },
    {
        title: 'Strategic Content',
        description: 'Designed to generate real business results — not just views, but qualified leads and contracts.',
        icon: <Target className="w-5 h-5" />,
    },
];

/* ─── Component ─────────────────────────────────────────── */
const NewHero: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isTop, setIsTop] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest < 50) {
            setIsTop(true);
            setHidden(false);
        } else {
            setIsTop(false);
            if (latest > previous && latest > 150) {
                if (!isMobileMenuOpen) setHidden(true);
            } else {
                setHidden(false);
            }
        }
    });

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
        <div id="home" className="relative w-full font-sans text-white">

            {/* ── Sticky Video Background ── */}
            <div className="sticky top-0 w-full h-screen overflow-hidden z-0 bg-black">
                <video
                    ref={videoRef}
                    autoPlay muted loop playsInline
                    poster="/poster-hero.jpg"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/videosite.mp4" type="video/mp4" />
                </video>

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/20 z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent z-[2]" />
                <div
                    className="absolute inset-0 z-[4] pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)' }}
                />
                <div
                    className="absolute inset-0 z-[5] pointer-events-none opacity-[0.04]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '150px 150px',
                    }}
                />
            </div>

            {/* ═══════════════ NAVBAR (fora do stacking context z-10) ═══════════════ */}
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: "-100%", opacity: 0 },
                }}
                initial="visible"
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                style={{ backgroundColor: isTop ? 'transparent' : '#09090b' }}
                className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${isTop ? '' : 'border-b border-white/5 shadow-2xl'}`}
            >
                <nav className="flex items-center justify-between px-6 lg:px-12 py-5 max-w-[1440px] mx-auto w-full relative">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2.5 md:gap-3.5 shrink-0 cursor-pointer group">
                        <img
                            src="/logo%20check%20mkt%20navbar.png"
                            alt="Check MKT"
                            className="h-10 md:h-12 w-auto object-contain origin-left group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                        />
                        <div className="font-display font-bold text-2xl md:text-[28px] leading-none tracking-tight text-white select-none whitespace-nowrap"
                            style={{ textShadow: '0 0 30px rgba(255,255,255,0.15)' }}>
                            CHECK <span className="text-[#62AE88]">MKT</span>
                        </div>
                    </a>

                    {/* Nav links */}
                    <div className="hidden md:flex items-center space-x-12 text-[15px] font-semibold tracking-wide">
                        <a href="#home" className="relative text-white pb-1 group">
                            Home
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#62AE88] rounded-full shadow-[0_0_8px_rgba(98,174,136,0.9)]" />
                        </a>
                        {['Portfolio', 'Services', 'About'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`}
                                className="relative text-white/50 hover:text-white/85 transition-colors duration-200 pb-1 group">
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-white/25 rounded-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* CTA button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04, boxShadow: '0 6px 32px rgba(98,174,136,0.55)' }}
                            whileTap={{ scale: 0.97 }}
                            className="hidden md:flex items-center justify-center gap-2 bg-[#43755C] text-white px-7 py-3 rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-[#4e8469]"
                            style={{ boxShadow: '0 4px 24px rgba(67,117,92,0.45)' }}
                        >
                            Book a Call
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>

                        {/* Mobile Hamburger Toggle */}
                        <button
                            className="md:hidden text-white p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </nav>

                {/* ═══════════════ MOBILE MENU OVERLAY ═══════════════ */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, scaleY: 0.9 }}
                            animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
                            exit={{ opacity: 0, height: 0, scaleY: 0.9 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            style={{ backgroundColor: '#09090b' }}
                            className="absolute top-full left-0 w-full border-b border-white/10 z-40 md:hidden overflow-hidden origin-top"
                        >
                            <div className="flex flex-col items-center py-6 w-full h-full">
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setTimeout(() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }), 300);
                                    }}
                                    className="w-full text-center py-5 text-white text-xl font-medium tracking-wide hover:text-[#62AE88] hover:bg-white/5 transition-all border-b border-white/[0.04]"
                                >
                                    Home
                                </button>
                                {['Portfolio', 'Services', 'About'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            const targetId = item.toLowerCase();
                                            setTimeout(() => {
                                                const el = document.getElementById(targetId);
                                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }, 300);
                                        }}
                                        className="w-full text-center py-5 text-white/70 text-xl font-medium tracking-wide hover:text-white hover:bg-white/5 transition-all border-b border-white/[0.04]"
                                    >
                                        {item}
                                    </button>
                                ))}
                                <div className="pt-8 pb-10 w-full flex justify-center px-6">
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setTimeout(() => {
                                                const el = document.getElementById('contact') || document.getElementById('footer');
                                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }, 300);
                                        }}
                                        className="w-full max-w-xs text-center bg-[#43755C] text-white px-9 py-4 rounded-full text-lg font-semibold tracking-wide transition-all shadow-[0_4px_24px_rgba(67,117,92,0.3)] hover:shadow-[0_4px_24px_rgba(67,117,92,0.5)] active:scale-95"
                                    >
                                        Book a Call
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* ── Scrollable Content Layer OVER Sticky Video ── */}
            <div className="relative z-10 w-full flex flex-col -mt-[100vh]">

                {/* 1st Viewport (Navbar + Hero Text + Desktop Features OR Mobile Feature 1) */}
                <div className="w-full h-screen flex flex-col justify-between">

                    {/* Placeholder to prevent layout shift */}
                    <div className="h-[88px] shrink-0 pointer-events-none" />

                    {/* ═══════════════ HERO CONTENT (Split Layout) ═══════════════ */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-12 max-w-[1440px] mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                            {/* Left Column: Messaging */}
                            <div className="flex flex-col items-start text-left max-w-2xl lg:max-w-none">
                                {/* Premium pill badge */}
                                <motion.div
                                    variants={fadeIn} initial="hidden" animate="visible" custom={0}
                                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md text-[10px] tracking-[0.2em] text-white/60 uppercase font-bold"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#62AE88] animate-pulse"
                                        style={{ boxShadow: '0 0 10px rgba(98,174,136,0.8)' }} />
                                    #1 Video Marketing · Massachusetts
                                </motion.div>

                                {/* Main heading */}
                                <motion.div
                                    variants={fadeUp} initial="hidden" animate="visible" custom={1}
                                    className="mb-8 select-none"
                                >
                                    <span className="block font-display font-medium text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] tracking-tight text-white/80 leading-[1.1] mb-2">
                                        The #1 Video Marketing
                                    </span>
                                    <span className="block font-display text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] lg:text-[1.9rem] tracking-wide text-white/40 leading-[1.1] mb-4">
                                        Company for Construction in
                                    </span>
                                    <h1 className="block font-display font-bold text-[3.2rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7rem] leading-[0.9] tracking-tighter text-white drop-shadow-2xl">
                                        Massachusetts<span className="text-[#62AE88]">.</span>
                                    </h1>
                                </motion.div>

                                {/* Green divider line (Left Aligned) */}
                                <motion.div
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: 1, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-16 h-[2px] mb-6"
                                    style={{
                                        background: 'linear-gradient(90deg, #62AE88, transparent)',
                                        boxShadow: '0 0 12px rgba(98,174,136,0.3)',
                                    }}
                                />

                                {/* Subtitle */}
                                <motion.p
                                    variants={fadeUp} initial="hidden" animate="visible" custom={3}
                                    className="max-w-[480px] text-white/50 text-[15px] md:text-[17px] leading-relaxed font-medium"
                                >
                                    We don't just make videos.{' '}
                                    <span className="text-white/90 font-bold border-b border-[#62AE88]/40 pb-0.5">We build your authority.</span>
                                </motion.p>
                            </div>

                            {/* Right Column: High-Conversion Form */}
                            <div className="hidden lg:flex justify-end items-center h-full">
                                <HeroForm />
                            </div>

                            {/* Mobile Form Component (Shows only on Mobile/Tablet below the text) */}
                            <div className="lg:hidden w-full max-w-lg mt-4">
                                <HeroForm />
                            </div>
                        </div>
                    </div>

                    {/* ═══════════════ FEATURES (Bottom of screen) ═══════════════ */}
                    <div className="w-full shrink-0">

                        {/* ── DESKTOP: All 3 Features row ── */}
                        <div
                            className="hidden md:block relative z-20 w-full py-10 border-y border-white/[0.1] bg-[#09090b]"
                        >
                            <div className="max-w-[1200px] mx-auto w-full px-6 flex flex-row items-stretch">
                                {features.map((feature, i) => (
                                    <React.Fragment key={feature.title}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 18 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.9 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                                            whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
                                            className="flex flex-col items-center text-center group cursor-default flex-1 px-6 py-1"
                                        >
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

                                        {i < features.length - 1 && (
                                            <div className="w-px self-stretch flex-shrink-0"
                                                style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.10), transparent)' }} />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* ── MOBILE: Feature 1 only ── */}
                        <div
                            className="md:hidden relative z-20 w-full pt-4 pb-3 border-t border-white/[0.07] overflow-hidden"
                            style={{ background: 'rgba(0,0,0,0.52)', backdropFilter: 'blur(14px)' }}
                        >
                            <div className="px-5 relative z-10 block">
                                <motion.div
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-row items-center text-left group cursor-default py-1"
                                >
                                    <div
                                        className="w-[42px] h-[42px] shrink-0 rounded-full bg-[#43755C] flex items-center justify-center text-white mr-4 ring-1 ring-[#62AE88]/25"
                                        style={{ boxShadow: '0 6px 20px rgba(67,117,92,0.40)' }}
                                    >
                                        <div className="scale-90">
                                            {features[0].icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-[15px] font-bold text-white mb-0.5 tracking-tight">
                                            {features[0].title}
                                        </h3>
                                        <p className="text-white/50 text-[11px] font-medium leading-[1.65]">
                                            {features[0].description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Scroll Indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}
                                className="w-full flex justify-center mt-3 mb-1 animate-bounce relative z-10 cursor-pointer"
                            >
                                <div className="flex flex-col items-center gap-1 text-white/30">
                                    <span className="text-[8px] uppercase font-bold tracking-[0.25em]">Scroll to discover</span>
                                    <ChevronDown className="w-3.5 h-3.5" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* ═══════════════ MOBILE: Scrollable Next Features ═══════════════ */}
                <div className="md:hidden w-full flex flex-col items-stretch">
                    {features.slice(1).map((feature, i) => (
                        <div
                            key={feature.title}
                            className="relative z-20 w-full py-5 border-t border-white/[0.03]"
                            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(20px)' }}
                        >
                            <div className="px-5">
                                <motion.div
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-row items-center text-left group cursor-default py-1"
                                >
                                    <div
                                        className="w-[42px] h-[42px] shrink-0 rounded-full bg-[#43755C] flex items-center justify-center text-white mr-4 ring-1 ring-[#62AE88]/25"
                                        style={{ boxShadow: '0 6px 20px rgba(67,117,92,0.40)' }}
                                    >
                                        <div className="scale-90">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-[15px] font-bold text-white mb-0.5 tracking-tight group-hover:text-[#82d1aa] transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white/50 text-[11px] font-medium leading-[1.65]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}

                    {/* Tiny dark gradient block to fade nicely into the next bright section */}
                    <div className="relative z-20 w-full h-[6vh] bg-gradient-to-b from-black/80 to-transparent" />
                </div>

            </div>
        </div>
    );
};

export default NewHero;
