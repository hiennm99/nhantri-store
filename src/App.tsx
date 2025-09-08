// src/App.tsx - Updated
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { CartProvider } from './contexts/CartContext';
import { ShoppingCart } from './components/cart/ShoppingCart';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';

const App: React.FC = () => {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductPage />} />
                </Routes>
                <ShoppingCart />
            </Router>
        </CartProvider>
    );
};

export default App;