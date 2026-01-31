import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const AutoScrollCarousel = () => {
    // Filter for "Shop Favorites" or "New Arrivals" - using featured products
    const displayProducts = products.filter(p => p.featured).slice(0, 8);

    // Duplicate the products to create a seamless loop
    const loopedProducts = [...displayProducts, ...displayProducts];

    return (
        <section className="py-24 bg-brand-light/30 overflow-hidden">
            <div className="container-custom mb-12 text-center">
                <span className="text-brand-accent text-sm tracking-widest uppercase block mb-3">Shop Favorites</span>
                <h2 className="text-3xl md:text-5xl font-serif text-brand-dark">New Arrivals</h2>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-light/30 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-light/30 to-transparent z-10 pointer-events-none"></div>

                {/* Track */}
                <div className="flex w-max animate-scroll hover:pause">
                    {loopedProducts.map((product, index) => (
                        <div
                            key={`${product.id}-${index}`}
                            className="w-[280px] md:w-[320px] mx-4 flex-shrink-0"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default AutoScrollCarousel;
