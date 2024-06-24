import React from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/data.json';

const ProductSelection: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Select Your MacBook Pro</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSelection;
