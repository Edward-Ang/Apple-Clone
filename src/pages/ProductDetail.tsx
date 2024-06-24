import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/data.json';
import useStore from '../state/store';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = data.products.find((prod) => prod.id === id);
  const setSelectedProduct = useStore((state) => state.setSelectedProduct);

  useEffect(() => {
    if (product) {
      setSelectedProduct(product);
    }
  }, [product, setSelectedProduct]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetail;