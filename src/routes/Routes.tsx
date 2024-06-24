import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductSelection from '../pages/ProductSelection';
import ProductDetail from '../pages/ProductDetail';

const RoutesConfig: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductSelection />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
