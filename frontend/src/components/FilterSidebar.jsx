import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FilterSidebar = ({
    categories,
    selectedCategories,
    handleCategoryChange,
    priceRange,
    setPriceRange,
    mobileOpen,
    setMobileOpen,
    maxPrice
}) => {
    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar Container */}
            <aside className={`
                fixed lg:static top-0 left-0 z-50 h-full lg:h-auto w-[300px] lg:w-64 bg-surface p-8 lg:p-0 shadow-2xl lg:shadow-none overflow-y-auto transition-transform duration-500 ease-in-out transform
                ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="flex justify-between items-center lg:hidden mb-12">
                    <h3 className="font-serif text-2xl font-bold text-brand-dark">Filter</h3>
                    <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-brand-dark">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Categories Section */}
                <div className="mb-12">
                    <h3 className="font-serif text-lg font-bold mb-6 text-brand-dark border-b border-brand-light pb-2">Categories</h3>
                    <div className="space-y-4">
                        {categories.map(cat => (
                            <label key={cat} className="flex items-center gap-4 cursor-pointer group select-none">
                                <div className="relative flex items-center justify-center w-5 h-5">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => handleCategoryChange(cat)}
                                        className="appearance-none w-5 h-5 border border-brand-dark/30 rounded-sm checked:bg-brand-dark checked:border-brand-dark transition-all"
                                    />
                                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-600 group-hover:text-brand-dark transition-colors font-sans text-sm tracking-wide">{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Range Section */}
                <div className="mb-12">
                    <h3 className="font-serif text-lg font-bold mb-6 text-brand-dark border-b border-brand-light pb-2">Price</h3>
                    <div className="space-y-6">
                        <div className="relative h-1 bg-gray-200 rounded-full mt-4">
                            <div
                                className="absolute h-full bg-brand-dark rounded-full"
                                style={{
                                    left: '0%',
                                    right: `${100 - (priceRange[1] / maxPrice) * 100}%`
                                }}
                            />
                            <input
                                type="range"
                                min="0"
                                max={maxPrice}
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                            />
                            {/* Thumb */}
                            <div
                                className="absolute w-4 h-4 bg-brand-dark rounded-full shadow top-1/2 -translate-y-1/2 pointer-events-none z-10"
                                style={{ left: `${(priceRange[1] / maxPrice) * 100}%`, transform: 'translate(-50%, -50%)' }}
                            />
                        </div>

                        <div className="flex justify-between items-center text-sm text-brand-dark font-medium">
                            <span>$0</span>
                            <span className="bg-white border border-gray-200 px-3 py-1 rounded-md min-w-[60px] text-center">${priceRange[1]}</span>
                        </div>
                    </div>
                </div>

                {/* Clear Filters */}
                {(selectedCategories.length > 0 || priceRange[1] < maxPrice) && (
                    <button
                        onClick={() => {
                            handleCategoryChange(null, true);
                            setPriceRange([0, maxPrice]);
                        }}
                        className="text-xs uppercase tracking-widest text-gray-400 hover:text-brand-accent transition-colors border-b border-gray-300 pb-0.5"
                    >
                        Clear Filters
                    </button>
                )}
            </aside>
        </>
    );
};

export default FilterSidebar;
