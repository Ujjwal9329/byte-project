import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Cart = () => {
    const { cart, updateQty, removeFromCart, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-surface px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <div className="w-20 h-20 bg-surface-off rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100">
                        <ShoppingBag className="w-8 h-8 text-brand-light-gold text-brand-accent/50" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-3">Your cart is empty</h2>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto font-light">
                        Looks like you haven't added anything yet. Discover our collection of luxury skincare.
                    </p>
                    <Link to="/products" className="btn-primary inline-flex items-center gap-2">
                        Start Shopping
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-surface min-h-screen pt-28 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-dark/10 pb-6">
                    <div>
                        <h1 className="text-4xl font-serif font-bold text-brand-dark mb-2">Shopping Cart</h1>
                        <p className="text-gray-500 text-sm tracking-wide">You have {cart.reduce((a, c) => a + c.qty, 0)} items in your cart</p>
                    </div>
                    <Link to="/products" className="hidden md:flex items-center text-sm text-brand hover:text-brand-dark transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Continue Shopping
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-8 space-y-8">
                        {cart.map((item) => (
                            <div key={item.id} className="flex gap-6 sm:gap-8 py-6 border-b border-gray-100 first:pt-0 last:border-0 hover:bg-white/50 transition-colors rounded-xl px-4 -mx-4">
                                <Link to={`/product/${item.id}`} className="w-24 h-32 bg-surface-off flex-shrink-0 flex items-center justify-center border border-gray-100 hover:border-brand-accent transition-colors">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover p-2" />
                                </Link>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-serif font-bold text-xl text-brand-dark hover:text-brand transition-colors">
                                                <Link to={`/product/${item.id}`}>{item.name}</Link>
                                            </h3>
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2">{item.category}</div>
                                    </div>

                                    <div className="flex justify-between items-end">
                                        <div className="flex items-center border border-gray-200 px-3 py-1 bg-white">
                                            <button onClick={() => updateQty(item.id, item.qty - 1)} className="p-1 hover:text-brand text-gray-500"><Minus className="w-3 h-3" /></button>
                                            <span className="mx-4 text-sm font-medium w-4 text-center tabular-nums">{item.qty}</span>
                                            <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-1 hover:text-brand text-gray-500"><Plus className="w-3 h-3" /></button>
                                        </div>
                                        <div className="font-serif font-bold text-lg text-brand-dark">${(item.price * item.qty).toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="md:hidden pt-4">
                            <Link to="/products" className="flex items-center text-sm text-brand hover:text-brand-dark transition-colors font-medium justify-center">
                                <ArrowLeft className="w-4 h-4 mr-2" /> Continue Shopping
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="bg-white p-8 border border-gray-100 sticky top-28 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                            <h3 className="font-serif font-bold text-xl text-brand-dark mb-6 border-b border-gray-100 pb-4">Order Summary</h3>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600 font-light">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 font-light">
                                    <span>Shipping</span>
                                    <span className="text-brand-accent">Free</span>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex justify-between font-serif font-bold text-xl text-brand-dark">
                                    <span>Total</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/checkout')}
                                className="w-full btn-primary py-4 flex items-center justify-center gap-2"
                            >
                                Proceed to Checkout <ArrowRight className="w-4 h-4" />
                            </button>

                            <div className="mt-6 text-center text-xs text-gray-400">
                                <p>Secure Checkout - SSL Encrypted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
