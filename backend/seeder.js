const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

// Helper to get random item from array
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Helper to generate random price
const randomPrice = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

// Data Pools
const adjectives = [
    'Hydrating', 'Revitalizing', 'Soothing', 'Intense', 'Daily', 'Nightly',
    'Organic', 'Deep', 'Gentle', 'Silky', 'Radiant', 'Glow', 'Repair',
    'Nourishing', 'Exfoliating', 'Brightening', 'Calming', 'Restorative', 'Pure'
];

const categories = [
    {
        name: 'Face Care',
        types: ['Serum', 'Face Wash', 'Toner', 'Moisturizer', 'Night Cream', 'Sunscreen', 'Face Mask', 'Eye Cream'],
        images: ['/images/product-face-wash.png', '/images/product-serum.png']
    },
    {
        name: 'Body Care',
        types: ['Body Lotion', 'Body Wash', 'Scrub', 'Butter', 'Oil', 'Soap Bar', 'Hand Cream'],
        images: ['/images/product-lotion.png', '/images/product-soap.png', '/images/product-scrub.png']
    },
    {
        name: 'Hair Care',
        types: ['Shampoo', 'Conditioner', 'Hair Oil', 'Scalp Scrub', 'Hair Mask', 'Serum'],
        images: ['/images/product-shampoo.png']
    }
];

const brands = ['Bytespark', 'Lumina', 'Botanics', 'PureEssence', 'GlowLab'];

const generateProducts = () => {
    let products = [];

    categories.forEach(cat => {
        for (let i = 0; i < 30; i++) { // 30 products per category

            const adj = sample(adjectives);
            const type = sample(cat.types);
            const name = `${adj} ${type}`;
            const image = sample(cat.images);

            products.push({
                name: name,
                image: image,
                description: `Experience the power of our ${name}. Enriched with natural ingredients for a ${adj.toLowerCase()} effect. Perfect for your daily routine.`,
                brand: sample(brands),
                category: cat.name,
                price: Number(randomPrice(10, 80)),
                countInStock: Math.floor(Math.random() * 50) + 5,
                featured: Math.random() < 0.2, // 20% chance of being featured
                gallery: [image, image]
            });
        }
    });

    return products;
};

const importData = async () => {
    try {
        await Product.deleteMany();
        console.log('Existing products cleared.');

        const products = generateProducts();
        await Product.insertMany(products);

        console.log(`Successfully imported ${products.length} products!`);
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
