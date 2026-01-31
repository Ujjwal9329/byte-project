import React from 'react';
import { Leaf, Recycle, Globe } from 'lucide-react';

const Sustainability = () => {
    return (
        <div className="bg-surface min-h-screen pt-28 pb-20">
            <div className="container-custom">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-brand-accent tracking-[0.2em] font-sans text-xs uppercase mb-4 block">Eco-Conscious</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Committed to the Planet</h1>
                    <p className="text-lg text-gray-600 font-light">
                        Sustainability isn't just a buzzword for us; it's the foundation of everything we do.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <div className="text-center p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
                        <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                            <Leaf className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-brand-dark mb-4">Clean Ingredients</h3>
                        <p className="text-gray-600">
                            We source only organic, non-GMO ingredients. No harmful chemicals, no microplastics, just pure nature.
                        </p>
                    </div>
                    <div className="text-center p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
                        <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                            <Recycle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-brand-dark mb-4">Zero Waste Packaging</h3>
                        <p className="text-gray-600">
                            Our bottles are glass, our boxes are recycled paper, and we use soy-based inks. We aim for 100% plastic-free by 2027.
                        </p>
                    </div>
                    <div className="text-center p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
                        <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-brand-dark mb-4">Carbon Neutral</h3>
                        <p className="text-gray-600">
                            We offset 100% of our carbon emissions from shipping and manufacturing through global reforestation projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sustainability;
