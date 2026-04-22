import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

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
const FRAME_DURATION = 80; // ms per frame — smooth auto-play speed

const ScrollSequence: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const hasPlayedRef = useRef(false);
    const rafRef = useRef<number | null>(null);

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

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasPlayedRef.current) {
                    hasPlayedRef.current = true;
                    // Auto-play the frame sequence
                    let frame = 1;
                    let lastTime = performance.now();

                    const playFrames = (now: number) => {
                        const elapsed = now - lastTime;
                        if (elapsed >= FRAME_DURATION) {
                            frame++;
                            lastTime = now;
                            setCurrentFrame(Math.min(frame, TOTAL_FRAMES));
                        }
                        if (frame < TOTAL_FRAMES) {
                            rafRef.current = requestAnimationFrame(playFrames);
                        }
                    };
                    rafRef.current = requestAnimationFrame(playFrames);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
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
        value: 100,
        suffix: "+",
        label: "Construction Companies",
        description: "Powered by high-end visual content"
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
