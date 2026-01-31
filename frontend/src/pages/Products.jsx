import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { products as productsData } from '../data/products';
import { useLocation } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState(productsData);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // Filter States
    const [visibleCount, setVisibleCount] = useState(12);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [sortBy, setSortBy] = useState('featured');
    const [searchQuery, setSearchQuery] = useState('');

    // Initialize filters from URLQueryParams
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const category = params.get('category');
        if (category) {
            // Find rough match from categories
            const matchedCategory = [...new Set(productsData.map(p => p.category))].find(
                c => c.toLowerCase().replace(' ', '-') === category.toLowerCase()
            );
            if (matchedCategory) {
                setSelectedCategories([matchedCategory]);
            }
        }
        setLoading(false);
    }, [location.search]);


    // Reset visible count when filters change
    useEffect(() => {
        setVisibleCount(12);
    }, [selectedCategories, priceRange, sortBy, searchQuery]);


    // Derived Data
    const categories = useMemo(() => [...new Set(productsData.map(p => p.category))], []);
    const maxPrice = 200; // Fixed max price for demo

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // 1. Search
        if (searchQuery) {
            result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        // 2. Category
        if (selectedCategories.length > 0) {
            result = result.filter(p => selectedCategories.includes(p.category));
        }

        // 3. Price
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // 4. Sort
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                result.sort((a, b) => b.id - a.id); // Assuming higher ID is newer
                break;
            default: // featured
                result.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
        }

        return result;
    }, [products, searchQuery, selectedCategories, priceRange, sortBy]);

    const handleCategoryChange = (category, reset = false) => {
        if (reset) {
            setSelectedCategories([]);
            return;
        }
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className="bg-surface min-h-screen pt-24">

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-brand-accent tracking-[0.2em] font-sans text-xs uppercase mb-4">Our Collection</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Shop All Products</h1>
                    <div className="w-24 h-[1px] bg-brand-dark/20"></div>
                </div>


                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar */}
                    <div className="lg:w-64 flex-shrink-0">
                        <FilterSidebar
                            categories={categories}
                            selectedCategories={selectedCategories}
                            handleCategoryChange={handleCategoryChange}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            mobileOpen={mobileFiltersOpen}
                            setMobileOpen={setMobileFiltersOpen}
                            maxPrice={maxPrice}
                        />
                    </div>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 pb-6 border-b border-gray-100">

                            {/* Mobile Filter Toggle & Search */}
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <button
                                    onClick={() => setMobileFiltersOpen(true)}
                                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 rounded-full text-sm font-medium transition-colors"
                                >
                                    <Filter className="w-4 h-4" /> Filter
                                </button>
                            </div>

                            <p className="text-gray-500 text-sm hidden md:block">
                                Showing {filteredProducts.length} results
                            </p>

                            {/* Sort */}
                            <div className="flex items-center justify-between w-full md:w-auto gap-6">
                                <div className="relative group">
                                    <div className="flex items-center gap-2 cursor-pointer">
                                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Sort by:</span>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="appearance-none bg-transparent font-serif font-bold text-brand-dark border-none focus:ring-0 cursor-pointer text-base pr-4"
                                        >
                                            <option value="featured">Featured</option>
                                            <option value="newest">Newest</option>
                                            <option value="price-asc">Price: Low to High</option>
                                            <option value="price-desc">Price: High to Low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12"
                            >
                                <AnimatePresence>
                                    {filteredProducts.slice(0, visibleCount).map((product) => (
                                        <motion.div
                                            layout="position"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            key={product.id}
                                        >
                                            <ProductCard product={product} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-500 mb-6">Try adjusting your filters.</p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setPriceRange([0, maxPrice]);
                                        setSelectedCategories([]);
                                    }}
                                    className="btn-primary"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}

                        {/* Load More Button */}
                        {filteredProducts.length > visibleCount && (
                            <div className="mt-16 text-center">
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 12)}
                                    className="btn-secondary"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Products;
