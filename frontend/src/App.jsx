import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Account = lazy(() => import('./pages/Account'));

// Phase 3 Pages
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const OurStory = lazy(() => import('./pages/OurStory'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const Ingredients = lazy(() => import('./pages/Ingredients'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <CartProvider>
                    <Router>
                        <div className="flex flex-col min-h-screen bg-surface transition-colors duration-300">
                            <Navbar />
                            <main className="flex-grow">
                                <Suspense fallback={
                                    <div className="flex justify-center items-center h-screen bg-surface">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
                                    </div>
                                }>
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/products" element={<Products />} />
                                        <Route path="/product/:id" element={<ProductDetail />} />
                                        <Route path="/cart" element={<Cart />} />
                                        <Route path="/checkout" element={<Checkout />} />
                                        <Route path="/order-success" element={<OrderSuccess />} />

                                        {/* Auth Routes */}
                                        <Route path="/login" element={<Login />} />
                                        <Route path="/register" element={<Register />} />
                                        <Route path="/account" element={<Account />} />

                                        {/* Shop Categories */}
                                        <Route path="/shop/:category" element={<CategoryPage />} />

                                        {/* Company Pages */}
                                        <Route path="/about" element={<OurStory />} />
                                        <Route path="/our-story" element={<OurStory />} />
                                        <Route path="/sustainability" element={<Sustainability />} />
                                        <Route path="/ingredients" element={<Ingredients />} />
                                        <Route path="/contact" element={<Contact />} />
                                    </Routes>
                                </Suspense>
                            </main>
                            <Footer />
                        </div>
                    </Router>
                </CartProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
