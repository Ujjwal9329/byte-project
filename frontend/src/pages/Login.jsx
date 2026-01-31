import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            navigate('/account'); // Redirect to dashboard
        } catch (err) {
            setError('Failed to login. Please check your credentials.');
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
                    <h2 className="text-3xl font-serif text-brand-dark mb-2">Welcome Back</h2>
                    <p className="text-text-secondary text-sm">Sign in to access your account</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-500 text-sm p-3 mb-6 rounded text-center border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-medium text-brand-dark">Password</label>
                            <Link to="#" className="text-xs text-brand-accent hover:underline">Forgot password?</Link>
                        </div>
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
                        {loading ? 'Signing In...' : (
                            <>
                                <LogIn className="w-4 h-4" /> Sign In
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-text-secondary">
                    Don't have an account? <Link to="/register" className="text-brand-dark font-semibold hover:text-brand-accent transition-colors">Create Account</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
