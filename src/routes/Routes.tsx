import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductSelection from '../pages/ProductSelection';
import ProductDetail from '../pages/ProductDetail';
import Header from '../components/Header';

const RoutesConfig: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ProductSelection />} />
                <Route path="/product/:id/:color/:inch" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
};

export default RoutesConfig;
