import React, { useEffect, useRef } from 'react';
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
        <section className="relative w-full flex items-center py-8 md:py-16 lg:py-20 bg-[#09090b] overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#62AE88]/[0.03] blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                    {metrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            className={`flex flex-col items-center text-center ${idx !== 0 ? 'pt-6 md:pt-12 lg:pt-0' : 'pt-0'} lg:px-6`}
                        >
                            <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />

                            <h4 className="text-white/90 font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase mt-3 md:mt-5 mb-1.5 md:mb-2.5">
                                {metric.label}
                            </h4>

                            <p className="text-white/40 text-[11px] md:text-[13px] max-w-[220px] leading-relaxed">
                                {metric.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MetricsSection;
