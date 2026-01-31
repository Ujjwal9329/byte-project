import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState('shipping'); // shipping, payment, success
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call and Payment processing
        setTimeout(() => {
            setLoading(false);
            setStep('success');
            clearCart();
            setTimeout(() => {
                navigate('/');
            }, 5000);
        }, 2000);
    };

    if (step === 'success') {
        return (
            <div className="min-h-screen bg-surface flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full border border-gray-100"
                >
                    <div className="w-24 h-24 bg-brand-light/30 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-dark">
                        <CheckCircle className="w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Order Confirmed</h2>
                    <p className="text-gray-600 mb-8">Thank you for your purchase. Your order has been received and is being processed.</p>
                    <Link to="/" className="btn-primary inline-block">Return to Home</Link>
                </motion.div>
            </div>
        );
    }

    if (cart.length === 0 && step !== 'success') {
        navigate('/cart');
        return null;
    }

    return (
        <div className="bg-surface min-h-screen pt-28 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/cart" className="inline-flex items-center text-sm text-gray-500 hover:text-brand mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Cart
                </Link>

                <h1 className="text-4xl font-serif font-bold text-brand-dark mb-12">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Shipping Form */}
                    <div className="lg:col-span-7">
                        <form id="checkout-form" onSubmit={handlePayment} className="space-y-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-serif font-bold text-brand-dark mb-6 border-b border-gray-100 pb-4">Shipping Address</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Address</label>
                                        <input
                                            required
                                            type="text"
                                            name="address"
                                            onChange={handleChange}
                                            className="w-full bg-surface-off border-0 border-b-2 border-gray-200 focus:border-brand ring-0 focus:ring-0 px-0 py-3 transition-colors placeholder-gray-400"
                                            placeholder="123 Wellness St"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">City</label>
                                            <input
                                                required
                                                type="text"
                                                name="city"
                                                onChange={handleChange}
                                                className="w-full bg-surface-off border-0 border-b-2 border-gray-200 focus:border-brand ring-0 focus:ring-0 px-0 py-3 transition-colors placeholder-gray-400"
                                                placeholder="New York"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Postal Code</label>
                                            <input
                                                required
                                                type="text"
                                                name="postalCode"
                                                onChange={handleChange}
                                                className="w-full bg-surface-off border-0 border-b-2 border-gray-200 focus:border-brand ring-0 focus:ring-0 px-0 py-3 transition-colors placeholder-gray-400"
                                                placeholder="10001"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Country</label>
                                        <input
                                            required
                                            type="text"
                                            name="country"
                                            onChange={handleChange}
                                            className="w-full bg-surface-off border-0 border-b-2 border-gray-200 focus:border-brand ring-0 focus:ring-0 px-0 py-3 transition-colors placeholder-gray-400"
                                            placeholder="United States"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-serif font-bold text-brand-dark mb-6 border-b border-gray-100 pb-4">Payment Method</h2>
                                <div className="flex items-center gap-4 p-4 border border-brand-accent/30 bg-brand-light/10 rounded-lg">
                                    <Lock className="w-5 h-5 text-brand-dark" />
                                    <span className="font-medium text-brand-dark">Secure Credit Card Payment (Simulated)</span>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-5">
                        <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 sticky top-28">
                            <h2 className="text-xl font-serif font-bold text-brand-dark mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
                            <div className="space-y-4 mb-8 max-h-80 overflow-y-auto pr-2">
                                {cart.map(item => (
                                    <div key={item.id} className="flex gap-4 py-2">
                                        <div className="w-16 h-20 bg-surface-off border border-gray-100 flex items-center justify-center flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover p-1" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-serif font-bold text-gray-900 text-sm leading-tight mb-1">{item.name}</h4>
                                            <p className="text-xs text-gray-500 mb-1">Qty: {item.qty}</p>
                                            <p className="text-sm font-medium text-brand-dark">${(item.price * item.qty).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 pt-6 border-t border-gray-100 mb-8">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-brand-accent font-medium">Free</span>
                                </div>
                                <div className="flex justify-between font-serif font-bold text-xl text-brand-dark pt-2">
                                    <span>Total</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                form="checkout-form"
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Processing...' : <><Lock className="w-4 h-4" /> Pay ${cartTotal.toFixed(2)}</>}
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                                <Lock className="w-3 h-3" /> 256-bit SSL Secure Checkout
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
