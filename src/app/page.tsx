'use client'

import React, { useEffect, useState } from 'react';
import { Product } from '@/redux/interface';
import ProductCard from '@/components/ProductCard';


const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;
