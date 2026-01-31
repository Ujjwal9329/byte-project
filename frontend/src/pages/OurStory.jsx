import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
    return (
        <div className="bg-surface min-h-screen pt-28 pb-20">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-brand-accent tracking-[0.2em] font-sans text-xs uppercase mb-4 block">About Us</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-8">Our Philosophy</h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            Bytespark was born from a desire to reconnect with nature in its purest form.
                            We believe that skincare should be a ritual of self-love, powered by the earth's most potent botanicals.
                        </p>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="aspect-video w-full overflow-hidden mb-16"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
                            alt="Our Lab"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-serif prose-headings:text-brand-dark text-gray-600 mx-auto">
                        <h3>Rooted in Science, Inspired by Nature</h3>
                        <p>
                            Our journey began in a small botanical lab, where we spent years researching the synergistic effects of plant extracts.
                            We found that when nature is respected and understood, it yields results that synthetic alternatives simply cannot match.
                        </p>
                        <h3>Ethical & Sustainable</h3>
                        <p>
                            Beauty shouldn't come at a cost to the planet. That's why every ingredient we source is traceable, sustainable, and cruelty-free.
                            From our recyclable glass packaging to our carbon-neutral shipping, we are committed to leaving a lighter footprint.
                        </p>
                        <h3>The Bytespark Promise</h3>
                        <p>
                            No fillers, no parabens, no compromises. Just pure, effective skincare designed to help you glow from the inside out.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
