import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const ContactSection: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.company) {
            setStep(2);
        }
    };

    const handlePrev = () => {
        setStep(1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.phone && formData.email) {
            setIsSubmitted(true);
            // Aqui integraria com form backend
        }
    };

    return (
        <section id="contact" className="relative w-full min-h-[66vh] flex items-center justify-center py-20 bg-[#09090b] text-white overflow-hidden border-t border-white/[0.04]">

            {/* Ambient Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#43755C]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[800px] mx-auto w-full px-6 lg:px-12 relative z-10 flex flex-col items-center">

                <div className="mb-12 text-center flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-px bg-white/10" />
                        <span className="text-[#62AE88] text-[10.5px] font-bold tracking-[0.2em] uppercase shrink-0">
                            Ready to scale?
                        </span>
                        <div className="w-8 h-px bg-white/10" />
                    </div>
                    <h2 className="font-display font-medium text-[3rem] md:text-[4rem] leading-[1.05] tracking-tight text-white mb-4">
                        Let's talk <span className="text-white/40">business.</span>
                    </h2>
                </div>

                <div className="relative min-h-[340px] w-full max-w-[500px]">
                    <AnimatePresence mode="wait">

                        {!isSubmitted ? (
                            <motion.div
                                key={`form-step-${step}`}
                                initial={{ opacity: 0, x: step === 1 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: step === 1 ? 20 : -20 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute inset-0 w-full"
                            >
                                <form onSubmit={step === 1 ? handleNext : handleSubmit} className="flex flex-col gap-6">

                                    {/* Step Progress Indicator */}
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step >= 1 ? 'bg-[#62AE88]' : 'bg-white/10'}`} />
                                        <div className={`h-1 flex-1 rounded-full transition-colors duration-500 ${step >= 2 ? 'bg-[#62AE88]' : 'bg-white/10'}`} />
                                    </div>

                                    {step === 1 ? (
                                        <>
                                            {/* STEP 1: Name & Company */}
                                            <div className="flex flex-col gap-2.5">
                                                <label className="text-[10px] font-bold tracking-widest uppercase text-white/40 ml-1">Your Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#62AE88]/50 focus:bg-white/[0.04] transition-all font-sans text-[15px] placeholder:text-white/20"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2.5">
                                                <label className="text-[10px] font-bold tracking-widest uppercase text-white/40 ml-1">Company</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#62AE88]/50 focus:bg-white/[0.04] transition-all font-sans text-[15px] placeholder:text-white/20"
                                                    placeholder="Acme Real Estate"
                                                />
                                            </div>

                                            <button type="submit" className="mt-2 flex items-center justify-between w-full bg-[#43755C] hover:bg-[#4e8469] text-white px-8 py-4 rounded-2xl font-bold tracking-wide transition-colors duration-300 shadow-[0_4px_24px_rgba(67,117,92,0.3)]">
                                                <span className="text-[14px]">Next Step</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            {/* STEP 2: Phone & Email */}
                                            <div className="flex flex-col gap-2.5">
                                                <label className="text-[10px] font-bold tracking-widest uppercase text-white/40 ml-1">Phone Number</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#62AE88]/50 focus:bg-white/[0.04] transition-all font-sans text-[15px] placeholder:text-white/20"
                                                    placeholder="(555) 000-0000"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2.5">
                                                <label className="text-[10px] font-bold tracking-widest uppercase text-white/40 ml-1">Work Email</label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#62AE88]/50 focus:bg-white/[0.04] transition-all font-sans text-[15px] placeholder:text-white/20"
                                                    placeholder="john@acme.com"
                                                />
                                            </div>

                                            <div className="mt-2 flex gap-3">
                                                <button type="button" onClick={handlePrev} className="flex items-center justify-center p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors">
                                                    <ArrowLeft className="w-4 h-4 text-white/60" />
                                                </button>
                                                <button type="submit" className="flex-1 flex items-center justify-between bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-2xl font-bold tracking-wide transition-colors duration-300">
                                                    <span className="text-[14px] uppercase">Submit</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </form>
                            </motion.div>
                        ) : (
                            /* SUCCESS STATE */
                            <motion.div
                                key="success-message"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center bg-white/[0.02] border border-white/10 rounded-3xl p-10"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#43755C]/20 border border-[#62AE88]/30 flex items-center justify-center mb-6 text-[#62AE88]">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-tight">Application Received</h3>
                                <p className="text-white/60 leading-relaxed text-[15px] max-w-sm">
                                    Thanks, {formData.name.split(' ')[0]}! Our production team will contact you shortly to schedule your strategy session.
                                </p>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
