import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const OrderSuccess = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-surface">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg border border-gray-100"
            >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Order Confirmed!</h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Thank you for your purchase. We have received your order and are preparing it for shipment. You will receive an email confirmation shortly.
                </p>
                <Link to="/" className="w-full block bg-brand hover:bg-brand-dark text-white py-4 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
                    Continue Shopping
                </Link>
            </motion.div>
        </div>
    );
};

export default OrderSuccess;
