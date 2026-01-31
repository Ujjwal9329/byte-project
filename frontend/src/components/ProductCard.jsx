import React, { useState } from 'react';
import { Eye, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import QuickViewModal from './QuickViewModal';
import AddToCartModal from './AddToCartModal';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showQuickView, setShowQuickView] = useState(false);
    const [showAddCart, setShowAddCart] = useState(false);
    const { addToCart } = useCart();

    return (
        <>
            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="group relative bg-white overflow-hidden cursor-pointer"
            >
                {/* Image Area */}
                <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden mb-4 bg-[#F5F5F5]">
                    {product.featured && (
                        <div className="absolute top-4 left-4 z-20">
                            <span className="text-[10px] uppercase tracking-widest bg-brand text-white px-3 py-1">New</span>
                        </div>
                    )}

                    <motion.img
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                    />

                    {/* Action Buttons - Slide up on hover */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                addToCart(product);
                                setShowAddCart(true);
                            }}
                            className="bg-white text-brand-dark p-3 shadow-lg hover:bg-brand hover:text-white transition-colors"
                            title="Add to Cart"
                        >
                            <ShoppingCart className="w-4 h-4" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowQuickView(true);
                            }}
                            className="bg-white text-brand-dark p-3 shadow-lg hover:bg-brand hover:text-white transition-colors"
                            title="Quick View"
                        >
                            <Eye className="w-4 h-4" />
                        </button>
                    </div>
                </Link>

                {/* Details */}
                <div className="text-center px-2">
                    <div className="text-[10px] tracking-widest text-gray-500 uppercase mb-2">{product.category}</div>
                    <Link to={`/product/${product.id}`} className="block">
                        <h3 className="font-serif text-lg text-brand-dark mb-1 group-hover:text-brand-accent transition-colors duration-300">{product.name}</h3>
                    </Link>
                    <div className="text-sm font-medium text-brand-dark">${product.price}.00</div>
                </div>
            </motion.div>

            <QuickViewModal
                isOpen={showQuickView}
                onClose={() => setShowQuickView(false)}
                product={product}
                onAddToCart={(p) => {
                    addToCart(p);
                    setShowQuickView(false);
                    setShowAddCart(true);
                }}
            />

            <AddToCartModal
                isOpen={showAddCart}
                onClose={() => setShowAddCart(false)}
                product={product}
            />
        </>
    );
};

export default ProductCard;
