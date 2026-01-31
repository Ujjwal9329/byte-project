const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Razorpay = require('razorpay');
const crypto = require('crypto');

// Initialize Razorpay
// NOTE: Using test keys. In production, these should be in .env w/ strict checks
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_1234567890', // Placeholder for demo
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'test_secret',
});

// @desc    Create new order & razorpay order
// @route   POST /api/orders
// @access  Public (for demo)
router.post('/', async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        return res.status(400).json({ message: 'No order items' });
    }

    try {
        // 1. Create Razorpay Order
        const payment_capture = 1;
        const amount = Math.round(totalPrice * 100); // amount in paise
        const currency = 'USD'; // Using USD for consistency with frontend prices, though Razorpay usually INR. 
        // For demo purposes, we'll pretend it's USD but charge the number as if it were a unit.

        const options = {
            amount: amount.toString(),
            currency,
            receipt: crypto.randomBytes(10).toString('hex'),
            payment_capture,
        };

        // For the sake of this demo without valid keys, we might want to mock this part if keys are missing
        let razorpayOrder = { id: 'order_mock_' + Date.now() };
        if (process.env.RAZORPAY_KEY_ID) {
            try {
                razorpayOrder = await razorpay.orders.create(options);
            } catch (e) {
                console.log("Razorpay create failed (expected if no valid keys):", e.message);
            }
        }

        const order = new Order({
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            totalPrice,
            paymentResult: {
                id: razorpayOrder.id,
                status: 'pending'
            }
        });

        const createdOrder = await order.save();
        res.status(201).json({
            order: createdOrder,
            razorpayOrderId: razorpayOrder.id,
            key: process.env.RAZORPAY_KEY_ID || 'test_key'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
