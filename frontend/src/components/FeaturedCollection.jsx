import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const collections = [
    {
        id: 1,
        title: "Face Care",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800",
        link: "/shop/face-care"
    },
    {
        id: 2,
        title: "Body Care",
        image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=800",
        link: "/shop/body-care"
    },
    {
        id: 3,
        title: "Hair Care",
        image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=800",
        link: "/shop/hair-care"
    }
];

const FeaturedCollection = () => {
    return (
        <section className="py-24 bg-surface">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <span className="text-brand-accent text-sm tracking-widest uppercase block mb-3">Our Collections</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">Curated for You</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <Link to={collection.link} key={collection.id} className="group overflow-hidden relative cursor-pointer block h-[500px]">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${collection.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
                            </motion.div>

                            <div className="absolute inset-0 flex flex-col justify-end p-10 items-center text-center">
                                <h3 className="text-3xl font-serif text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{collection.title}</h3>
                                <span className="text-white text-sm uppercase tracking-widest border-b border-white pb-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">View Products</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;
