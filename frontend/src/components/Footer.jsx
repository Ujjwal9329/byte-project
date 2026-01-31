import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-3xl font-serif font-bold tracking-tight text-white mb-6 block">BYTESPARK.</Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Elevating your daily ritual with pure, organic botanicals. Experience the perfect harmony of nature and science.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-brand-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-white hover:text-brand-accent transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-white hover:text-brand-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-brand-accent">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link to="/shop/face-care" className="hover:text-white transition-colors">Face Care</Link></li>
                            <li><Link to="/shop/body-care" className="hover:text-white transition-colors">Body Care</Link></li>
                            <li><Link to="/shop/hair-care" className="hover:text-white transition-colors">Hair Care</Link></li>
                            <li><Link to="/shop/gift-sets" className="hover:text-white transition-colors">Gift Sets</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-brand-accent">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                            <li><Link to="/ingredients" className="hover:text-white transition-colors">Ingredients</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-brand-accent">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="flex flex-col gap-3">
                            <input type="email" placeholder="Enter your email" className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent placeholder-gray-500" />
                            <button className="bg-brand-accent text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-colors">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Bytespark Personal Care. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
