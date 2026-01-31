import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const CategoryPage = () => {
    const { category } = useParams();

    // Mapping slugs to Display Text
    const categoryDetails = {
        'face-care': {
            title: 'Face Care Collection',
            description: 'Unveil your natural radiance with our scientifically formulated face care essentials.',
            dbCategory: 'Face Care'
        },
        'body-care': {
            title: 'Body Care Rituals',
            description: 'Indulge in luxurious textures and calming scents for total body rejuvenation.',
            dbCategory: 'Body Care'
        },
        'hair-care': {
            title: 'Hair Wellness',
            description: 'Nourish your scalp and strengthen your strands with our botanical blends.',
            dbCategory: 'Hair Care'
        },
        'gift-sets': {
            title: 'Curated Gift Sets',
            description: 'The perfect gift for yourself or a loved one. Thoughtfully assembled for complete care.',
            dbCategory: 'Gift Sets'
        }
    };

    const details = categoryDetails[category];

    // If category info exists, filter products. Otherwise show all or redirect (handled by "not found" state).
    const filteredProducts = details
        ? products.filter(p => p.category === details.dbCategory)
        : [];

    if (!details) {
        return (
            <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center bg-surface px-4">
                <h2 className="text-3xl font-serif text-brand-dark mb-4">Category Not Found</h2>
                <Link to="/products" className="btn-primary">Browse All Products</Link>
            </div>
        );
    }

    return (
        <div className="bg-surface min-h-screen">
            {/* Header */}
            <div className="pt-32 pb-16 bg-brand-light/30 text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <span className="text-brand-accent tracking-[0.2em] font-sans text-xs uppercase mb-4 block">Shop Category</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-brand-dark mb-6">{details.title}</h1>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">{details.description}</p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        <p>No products found in this category yet.</p>
                        <Link to="/products" className="text-brand-dark font-semibold mt-4 inline-block hover:text-brand-accent">View All Products</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
