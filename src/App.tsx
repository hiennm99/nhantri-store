import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
            </Routes>
        </Router>
    );
};

export default App;