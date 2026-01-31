import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Moon, Sun, User } from 'lucide-react'; // Added user icons
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext'; // Import Theme Context
import { useAuth } from '../context/AuthContext';   // Import Auth Context
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { cartCount } = useCart();
    const { theme, toggleTheme } = useTheme(); // Use Theme hooks
    const { user } = useAuth();                // Use Auth hooks
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const isHome = location.pathname === '/';
    // Navbar background: Transparent on Home (before scroll), Solid otherwise
    const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-surface/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`;

    // Text color: White on Home (before scroll), Dark otherwise
    const textClass = scrolled || !isHome ? 'text-brand-dark' : 'text-white';

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Journal', path: '/journal' }, // Placeholder
    ];

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className={`text-2xl font-serif font-bold tracking-tight ${textClass}`}>
                        BYTE<span className="text-brand-accent">SPARK</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-12 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm uppercase tracking-widest font-medium hover:text-brand-accent transition-colors ${textClass}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className={`flex items-center gap-6 ${textClass}`}>
                        {/* Theme Toggle */}
                        <button onClick={toggleTheme} className="hover:text-brand-accent transition-colors">
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <button className="hover:text-brand-accent transition-colors hidden sm:block">
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Account Link */}
                        <Link to={user ? "/account" : "/login"} className="hover:text-brand-accent transition-colors hidden sm:block">
                            <User className="w-5 h-5" />
                        </Link>

                        <Link to="/cart" className="relative hover:text-brand-accent transition-colors">
                            <ShoppingBag className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden hover:text-brand-accent transition-colors">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-0 left-0 w-full bg-surface z-40 pt-24 px-6 flex flex-col"
                    >
                        <div className="space-y-6 flex flex-col items-center">
                            {links.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-2xl font-serif text-brand-dark"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="w-16 h-[1px] bg-brand-light my-4"></div>

                            {/* Mobile Auth Links */}
                            {user ? (
                                <Link to="/account" className="text-lg text-brand-dark flex items-center gap-2">
                                    My Account
                                </Link>
                            ) : (
                                <Link to="/login" className="text-lg text-brand-dark flex items-center gap-2">
                                    Sign In
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
