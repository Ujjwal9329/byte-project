import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductCarousel = ({ title, filterCategory }) => {
    const carouselRef = useRef(null);
    const [width, setWidth] = useState(0);

    // Filter products if a category is provided, otherwise show featured
    const displayProducts = filterCategory
        ? products.filter(p => p.category === filterCategory)
        : products.filter(p => p.featured).slice(0, 8); // Grab first 8 featured

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [displayProducts]);

    return (
        <section className="py-24 bg-brand-light/30 overflow-hidden">
            <div className="container-custom">
                <div className="flex justify-between items-end mb-12 px-4">
                    <div>
                        <span className="text-brand-accent text-sm tracking-widest uppercase block mb-3">Shop Favorites</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-brand-dark">{title || "New Arrivals"}</h2>
                    </div>

                    <div className="flex gap-2">
                        {/* Simple arrows could go here if we implemented manual slide control, 
                             for now we depend on drag/scroll which feels more modern */}
                    </div>
                </div>

                <motion.div
                    className="cursor-grab overflow-hidden"
                    ref={carouselRef}
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-8 px-4"
                    >
                        {displayProducts.map((product) => (
                            <div key={product.id} className="min-w-[280px] md:min-w-[350px]">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductCarousel;
