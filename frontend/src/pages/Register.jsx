import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await register(name, email, password);
            navigate('/account');
        } catch (err) {
            setError(err.message || 'Failed to create account.');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen pt-28 pb-12 flex items-center justify-center bg-surface px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white dark:bg-surface-off p-8 shadow-xl rounded-lg border border-gray-100 dark:border-gray-800"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif text-brand-dark mb-2">Create Account</h2>
                    <p className="text-text-secondary text-sm">Join us for exclusive benefits</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-500 text-sm p-3 mb-6 rounded text-center border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 bg-surface border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-brand-dark transition-colors text-text-primary"
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-surface border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-brand-dark transition-colors text-text-primary"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-surface border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-brand-dark transition-colors text-text-primary"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full py-4 flex items-center justify-center gap-2"
                    >
                        {loading ? 'Creating Account...' : (
                            <>
                                <UserPlus className="w-4 h-4" /> Sign Up
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-text-secondary">
                    Already have an account? <Link to="/login" className="text-brand-dark font-semibold hover:text-brand-accent transition-colors">Sign In</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
