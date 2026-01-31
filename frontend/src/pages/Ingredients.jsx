import React from 'react';

const Ingredients = () => {
    const ingredients = [
        { name: 'Hyaluronic Acid', desc: 'A powerful humectant that draws moisture into the skin for deep hydration.' },
        { name: 'Vitamin C', desc: 'A potent antioxidant that brightens tone and protects against environmental damage.' },
        { name: 'Niacinamide', desc: 'Vitamin B3 that helps minimize pores and improves skin texture.' },
        { name: 'Jojoba Oil', desc: 'A biomimetic oil that closely resembles human sebum, balancing oil production.' },
        { name: 'Bakuchiol', desc: 'A gentle, plant-based alternative to retinol that reduces fine lines.' },
        { name: 'Squalane', desc: 'Derived from olives, this lightweight oil locks in moisture properly.' },
    ];

    return (
        <div className="bg-surface min-h-screen pt-28 pb-20">
            <div className="container-custom">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-brand-accent tracking-[0.2em] font-sans text-xs uppercase mb-4 block">Transparency</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Key Ingredients</h1>
                    <p className="text-lg text-gray-600 font-light">
                        We believe you should know exactly what you're putting on your skin. Here are the stars of our formulas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {ingredients.map((ing, idx) => (
                        <div key={idx} className="bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-2xl font-serif text-brand-dark mb-3">{ing.name}</h3>
                            <div className="w-12 h-[2px] bg-brand-accent mb-4"></div>
                            <p className="text-gray-600 leading-relaxed">{ing.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ingredients;
