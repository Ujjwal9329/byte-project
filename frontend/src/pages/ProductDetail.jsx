import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Heart, Truck, ShieldCheck, Leaf, ShoppingBag, Plus, Minus, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import AddToCartModal from '../components/AddToCartModal';
import { products } from '../data/products';
import ProductCarousel from '../components/ProductCarousel';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [qty, setQty] = useState(1);
    const [activeImage, setActiveImage] = useState('');
    const [showAddCart, setShowAddCart] = useState(false);
    const { addToCart } = useCart();

    useEffect(() => {
        // Simulate fetch
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setActiveImage(foundProduct.image);
        }
        setLoading(false);
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div></div>;
    if (!product) return <div className="min-h-screen flex items-center justify-center text-xl font-serif">Product not found. <Link to="/products" className="ml-2 text-brand underline">Return to Shop</Link></div>;

    // Simulate gallery since we only have single images in our data
    const gallery = [product.image, product.image, product.image];

    return (
        <div className="bg-surface min-h-screen pt-28 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/products" className="inline-flex items-center text-sm text-gray-500 hover:text-brand mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">

                    {/* Left: Gallery */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="aspect-[4/5] bg-surface-off overflow-hidden flex items-center justify-center relative border border-gray-100"
                        >
                            <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 z-10">
                                <button className="p-3 bg-white hover:bg-brand hover:text-white rounded-full shadow-lg transition-all duration-300">
                                    <Heart className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-4 gap-4">
                            {gallery.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    className={`aspect-square overflow-hidden border-b-2 transition-all ${activeImage === img ? 'border-brand opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="flex flex-col pt-4">
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-xs">{product.category}</span>
                                <div className="w-12 h-[1px] bg-brand-accent"></div>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mt-2 mb-6 leading-tight">{product.name}</h1>

                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                                <div className="flex text-brand-accent">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                                </div>
                                <span className="border-b border-gray-300 pb-0.5">24 Verified Reviews</span>
                            </div>

                            <p className="text-gray-600 leading-7 text-lg font-light mb-10">{product.description}</p>

                            <div className="text-3xl font-serif text-brand-dark mb-10">${product.price}.00</div>
                        </div>

                        {/* Actions */}
                        <div className="border-t border-b border-gray-100 py-8 mb-8">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="flex items-center border border-gray-200 px-4 py-3">
                                    <button onClick={() => setQty(q => Math.max(1, q - 1))} className="p-1 hover:text-brand"><Minus className="w-4 h-4" /></button>
                                    <span className="mx-6 font-medium w-6 text-center">{qty}</span>
                                    <button onClick={() => setQty(q => q + 1)} className="p-1 hover:text-brand"><Plus className="w-4 h-4" /></button>
                                </div>
                                <button
                                    onClick={() => {
                                        addToCart(product, qty);
                                        setShowAddCart(true);
                                    }}
                                    className="flex-1 btn-primary py-4 text-sm"
                                >
                                    Add to Cart - ${(product.price * qty).toFixed(2)}
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-xs tracking-widest uppercase text-gray-500">
                                <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-brand-dark" /> Free Shipping over $50</div>
                                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-dark" /> 30-Day Return Policy</div>
                            </div>
                        </div>

                        {/* Ingredients */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-3 flex items-center gap-2">Key Ingredients</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Enriched with Vitamin E, Jojoba Oil, and organic extracts sourced directly from nature. Free from parabens, sulfates, and artificial fragrances.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="border-t border-gray-100 pt-24">
                    <ProductCarousel title="You May Also Like" filterCategory={product.category} />
                </div>
            </div>

            <AddToCartModal
                isOpen={showAddCart}
                onClose={() => setShowAddCart(false)}
                product={product}
            />
        </div>
    );
};

export default ProductDetail;
