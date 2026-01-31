import React from 'react';
import { createPortal } from 'react-dom';
import { X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart }) => {
    if (!isOpen || !product) return null;

    return createPortal(
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 z-20"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors z-30"
                    >
                        <X className="w-6 h-6 text-gray-800" />
                    </button>

                    {/* Image Section */}
                    <div className="bg-gray-100 flex items-center justify-center p-8 min-h-[300px]">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-[300px] md:max-h-[400px] object-contain drop-shadow-xl"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-brand-accent font-medium text-sm tracking-widest uppercase mb-2">{product.category}</span>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{product.name}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-400">Price</span>
                                <span className="text-3xl font-bold text-brand-dark">${product.price}</span>
                            </div>
                            <button
                                onClick={() => {
                                    onAddToCart(product);
                                    onClose();
                                }}
                                className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg transform active:scale-95"
                            >
                                <ShoppingBag className="w-5 h-5" /> Add to Cart
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>,
        document.body
    );
};

export default QuickViewModal;
