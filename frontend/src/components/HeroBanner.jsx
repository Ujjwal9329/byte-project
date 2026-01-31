import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroBanner = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            {/* Background Video with Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&q=80&w=2000"
                >
                    <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white/90 text-sm md:text-base font-sans tracking-[0.2em] uppercase mb-4"
                >
                    Premium Skin Care
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
                >
                    Natural Beauty, <br />
                    <span className="italic font-light">Elevated.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-white/80 text-lg md:text-xl font-light max-w-2xl mb-10 leading-relaxed"
                >
                    Discover the essence of pure botanicals mixed with modern science.
                    Ethically sourced, dermatologically tested, and designed for you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link to="/products" className="btn-primary border-transparent bg-white text-brand-dark hover:bg-brand-accent hover:text-white">
                        Shop Collection
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-slide-up"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroBanner;
