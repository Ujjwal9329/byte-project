const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
            default: 'Bytespark',
        },
        category: {
            type: String,
            required: true,
        },
        gallery: [{
            type: String,
        }],
        featured: {
            type: Boolean,
            default: false,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        countInStock: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
