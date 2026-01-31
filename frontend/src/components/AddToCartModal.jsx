import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingBag, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddToCartModal = ({ isOpen, onClose, product }) => {
    const navigate = useNavigate();

    if (!isOpen || !product) return null;

    return createPortal(
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 10 }}
                    className="relative bg-white shadow-2xl w-full max-w-[340px] rounded-xl overflow-hidden z-20"
                >
                    <div className="p-5">
                        <div className="flex justify-between items-start mb-5">
                            <div className="flex items-center gap-2 text-brand-dark">
                                <div className="w-5 h-5 rounded-full bg-brand-dark flex items-center justify-center text-white">
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="font-serif font-bold text-base">Added to Cart</span>
                            </div>
                            <button onClick={onClose} className="text-gray-400 hover:text-brand-dark transition-colors">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Product Preview */}
                        <div className="flex gap-4 mb-6">
                            <div className="w-16 h-20 bg-surface-off flex items-center justify-center border border-gray-100 flex-shrink-0 rounded">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-sm" />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-brand-dark text-sm leading-tight mb-1">{product.name}</h4>
                                <p className="text-[10px] tracking-widest text-brand-accent uppercase mb-1">{product.category}</p>
                                <p className="text-gray-900 font-medium text-sm">${product.price}.00</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-3">
                            <button
                                onClick={() => {
                                    onClose();
                                    navigate('/cart');
                                }}
                                className="btn-primary w-full py-3 flex items-center justify-center gap-2 text-xs"
                            >
                                View Cart <ArrowRight className="w-3 h-3" />
                            </button>
                            <button
                                onClick={onClose}
                                className="btn-secondary w-full py-3 text-xs"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>,
        document.body
    );
};

export default AddToCartModal;
