import React, { Suspense, lazy } from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedCollection from '../components/FeaturedCollection';
import AutoScrollCarousel from '../components/AutoScrollCarousel'; // updated import
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-surface overflow-x-hidden">
            <HeroBanner />
            <FeaturedCollection />

            {/* Mission Statement */}
            {/* Mission / Philosophy Section */}
            <section className="py-20 bg-brand-dark/5 border-y border-brand-dark/10">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800"
                                alt="Laboratory"
                                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="order-1 md:order-2 text-center md:text-left">
                            <span className="text-brand-accent text-xs tracking-[0.2em] uppercase block mb-4">The Philosophy</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-6">Purity in Every Drop</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                "We believe beauty should be pure, authentic, and kind to the planet. Our formulas are crafted with intention, using only the finest botanicals to nourish your skin from within."
                            </p>
                            <a href="/our-story" className="text-brand-dark font-bold border-b border-brand-dark hover:text-brand-accent hover:border-brand-accent transition-colors pb-1 inline-block">
                                Read Our Story
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Auto Looping Carousel */}
            <AutoScrollCarousel />

            {/* Testimonials Parallax or Simple Clean Layout */}
            <section className="py-24 bg-white">
                <div className="container-custom text-center">
                    <span className="text-brand-accent text-sm tracking-widest uppercase block mb-3">Testimonials</span>
                    <h2 className="text-4xl font-serif text-brand-dark mb-16">Loved by Thousands</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { text: "The most luxurious serum I've ever used. My skin has never looked better.", author: "Sarah M.", role: "Verified Buyer" },
                            { text: "Incredible attention to detail in the packaging and quality. A true delight.", author: "James T.", role: "Skincare Enthusiast" },
                            { text: "Finally, organic products that actually work and feel amazing.", author: "Elena R.", role: "Verified Buyer" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-10 bg-surface-off border border-gray-100"
                            >
                                <div className="flex justify-center mb-6">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-brand-accent text-brand-accent" />)}
                                </div>
                                <p className="text-gray-600 italic mb-6 leading-relaxed">"{item.text}"</p>
                                <h4 className="font-serif font-bold text-lg text-brand-dark">{item.author}</h4>
                                <span className="text-xs text-gray-400 uppercase tracking-widest">{item.role}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
