import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Package, User, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Account = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) {
        navigate('/login');
        return null; // Start redirect, render nothing
    }

    return (
        <div className="min-h-screen pt-28 pb-12 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-dark/10 pb-6">
                    <div>
                        <h1 className="text-4xl font-serif text-brand-dark mb-2">My Account</h1>
                        <p className="text-text-secondary">Welcome back, {user.name}</p>
                    </div>
                    <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 mt-4 md:mt-0 font-medium transition-colors">
                        <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* User Info Card */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-surface-off p-8 shadow-sm border border-gray-100 dark:border-gray-800 rounded-lg h-fit">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-brand-light dark:bg-brand-dark rounded-full flex items-center justify-center text-brand">
                                <User className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-lg text-brand-dark">{user.name}</h3>
                                <p className="text-sm text-text-secondary">{user.email}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 p-4 bg-surface rounded border border-gray-100 dark:border-gray-700">
                                <MapPin className="w-5 h-5 text-brand-accent mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-bold text-brand-dark">Default Address</h4>
                                    <p className="text-sm text-text-secondary mt-1">
                                        123 Luxury Lane, Suite 100<br />
                                        Beverly Hills, CA 90210
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Order History */}
                    <div className="lg:col-span-2">
                        <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">Order History</h3>

                        <div className="space-y-4">
                            {/* Mock Order 1 */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-surface-off p-6 shadow-sm border border-gray-100 dark:border-gray-800 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-light dark:bg-brand-dark rounded text-brand">
                                        <Package className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-dark">Order #ORD-2024-001</h4>
                                        <p className="text-sm text-text-secondary">Placed on Jan 25, 2026</p>
                                        <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-[10px] uppercase tracking-wider font-bold rounded">Delivered</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-serif font-bold text-lg text-brand-dark">$145.00</p>
                                    <p className="text-xs text-text-secondary">3 Items</p>
                                </div>
                            </motion.div>

                            {/* Mock Order 2 */}
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-surface-off p-6 shadow-sm border border-gray-100 dark:border-gray-800 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-light dark:bg-brand-dark rounded text-brand">
                                        <Package className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-dark">Order #ORD-2023-892</h4>
                                        <p className="text-sm text-text-secondary">Placed on Dec 12, 2025</p>
                                        <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-700 text-[10px] uppercase tracking-wider font-bold rounded">Delivered</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-serif font-bold text-lg text-brand-dark">$82.50</p>
                                    <p className="text-xs text-text-secondary">2 Items</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
