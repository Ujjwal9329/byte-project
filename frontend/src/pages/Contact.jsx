import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-surface min-h-screen pt-28 pb-20">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <span className="text-brand-accent tracking-[0.2em] font-sans text-xs uppercase mb-4 block">Get in Touch</span>
                        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8">We'd Love to Hear From You</h1>
                        <p className="text-lg text-gray-600 font-light mb-12">
                            Have a question about our products, ingredients, or your order? Our team is here to help you on your journey to better skin.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-light text-brand rounded-full">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-brand-dark text-lg">Email Us</h4>
                                    <p className="text-gray-600">support@bytespark.com</p>
                                    <p className="text-gray-500 text-sm mt-1">We reply within 24 hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-light text-brand rounded-full">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-brand-dark text-lg">Call Us</h4>
                                    <p className="text-gray-600">+1 (800) 123-4567</p>
                                    <p className="text-gray-500 text-sm mt-1">Mon - Fri, 9am - 5pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-light text-brand rounded-full">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-brand-dark text-lg">Headquarters</h4>
                                    <p className="text-gray-600">123 Wellness Blvd, Eco City, NY 10012</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 lg:p-12 border border-gray-100 shadow-xl">
                        <h3 className="font-serif text-2xl text-brand-dark mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-brand-dark mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-surface border border-gray-200 focus:outline-none focus:border-brand-dark" placeholder="Jane" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-dark mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-surface border border-gray-200 focus:outline-none focus:border-brand-dark" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 bg-surface border border-gray-200 focus:outline-none focus:border-brand-dark" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-surface border border-gray-200 focus:outline-none focus:border-brand-dark" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="btn-primary w-full py-4 text-sm">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
