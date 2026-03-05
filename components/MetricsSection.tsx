import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, useScroll, useTransform } from 'framer-motion';

interface CounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, prefix = "", suffix = "" }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView && ref.current) {
            const controls = animate(0, value, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(val) {
                    if (ref.current) {
                        ref.current.textContent = Math.round(val).toLocaleString();
                    }
                }
            });
            return () => controls.stop();
        }
    }, [value, inView]);

    return (
        <div className="flex items-baseline justify-center font-display font-medium text-[2.2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[4.2rem] leading-none text-white tracking-tighter">
            {prefix && <span className="text-[#62AE88] mr-1">{prefix}</span>}
            <span ref={ref}>0</span>
            {suffix && <span className="text-[#62AE88] ml-1">{suffix}</span>}
        </div>
    );
};

const TOTAL_FRAMES = 21;
const SCROLL_SENSITIVITY = 50; // px of wheel delta per frame

const ScrollSequence: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const isLockedRef = useRef(false);
    const doneRef = useRef(false);
    const progressRef = useRef(0);
    const savedScrollYRef = useRef(0);

    // Preload images once
    useEffect(() => {
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = `/ezgif-23369d605bdc141e-png-split/ezgif-frame-${String(i).padStart(3, '0')}.png`;
        }
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const lockScroll = () => {
            if (isLockedRef.current || doneRef.current) return;
            isLockedRef.current = true;
            savedScrollYRef.current = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${savedScrollYRef.current}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';
        };

        const unlockScroll = () => {
            if (!isLockedRef.current) return;
            isLockedRef.current = false;
            doneRef.current = true;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            window.scrollTo({ top: savedScrollYRef.current, behavior: 'instant' as ScrollBehavior });
        };

        // Precise scroll listener: lock exactly when section center hits viewport center
        const handleScrollDetect = () => {
            if (isLockedRef.current || doneRef.current) return;
            const rect = section.getBoundingClientRect();
            const sectionCenterY = rect.top + rect.height / 2;
            const viewportCenterY = window.innerHeight / 2;

            if (sectionCenterY <= viewportCenterY) {
                progressRef.current = 0;
                setCurrentFrame(1);
                lockScroll();
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (!isLockedRef.current) return;
            e.preventDefault();
            e.stopPropagation();

            progressRef.current += e.deltaY / SCROLL_SENSITIVITY;
            progressRef.current = Math.max(0, Math.min(TOTAL_FRAMES - 1, progressRef.current));

            const frame = Math.round(progressRef.current) + 1;
            setCurrentFrame(frame);

            if (progressRef.current >= TOTAL_FRAMES - 1) {
                unlockScroll();
            }
        };

        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            if (!isLockedRef.current) return;
            e.preventDefault();
            const delta = touchStartY - e.touches[0].clientY;
            touchStartY = e.touches[0].clientY;

            progressRef.current += delta / SCROLL_SENSITIVITY;
            progressRef.current = Math.max(0, Math.min(TOTAL_FRAMES - 1, progressRef.current));
            setCurrentFrame(Math.round(progressRef.current) + 1);

            if (progressRef.current >= TOTAL_FRAMES - 1) {
                unlockScroll();
            }
        };

        window.addEventListener('scroll', handleScrollDetect, { passive: true });
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener('scroll', handleScrollDetect);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            unlockScroll();
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative w-full h-32 md:h-44 flex items-center justify-center pointer-events-none overflow-hidden rounded-xl bg-black/20">
            <img
                src={`/ezgif-23369d605bdc141e-png-split/ezgif-frame-${String(currentFrame).padStart(3, '0')}.png`}
                alt="Animation Frame"
                className="relative z-10 w-full h-full object-cover scale-[1.8] origin-center"
            />
        </div>
    );
};

const metrics = [
    {
        value: 450,
        suffix: "+",
        label: "Cinematic Projects",
        description: "Delivered strictly for elite developers and real estate agencies."
    },
    {
        value: 850,
        prefix: "$",
        suffix: "M+",
        label: "In Real Estate Sold",
        description: "Directly accelerated by our high-end visual campaigns."
    },
    { isAnimation: true },
    {
        value: 1200,
        suffix: "h",
        label: "Drone Flight Hours",
        description: "Safe, legal, and capturing impossible cinematic angles."
    },
    {
        value: 10,
        suffix: "y",
        label: "Years of Expertise",
        description: "Pioneering the construction marketing space since day one."
    }
];

const MetricsSection: React.FC = () => {
    return (
        <section className="relative w-full py-8 md:py-16 lg:py-20 bg-[#000000] overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-12 xl:gap-4 divide-y xl:divide-y-0 xl:divide-x divide-white/5">
                    {metrics.map((metric, idx) => {
                        if (metric && 'isAnimation' in metric) {
                            return (
                                <div key={`animation-${idx}`} className="hidden xl:flex items-center justify-center xl:py-0 xl:px-6">
                                    <ScrollSequence />
                                </div>
                            );
                        }

                        const m = metric as any;
                        if (!m) return null;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: idx * 0.15 }}
                                className={`flex flex-col items-center text-center ${idx !== 0 ? 'pt-6 md:pt-12 xl:pt-0' : 'pt-0'} xl:px-6`}
                            >
                                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />

                                <h4 className="text-white/90 font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase mt-3 md:mt-5 mb-1.5 md:mb-2.5">
                                    {m.label}
                                </h4>

                                <p className="text-white/40 text-[11px] md:text-[13px] max-w-[220px] leading-relaxed">
                                    {m.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MetricsSection;
