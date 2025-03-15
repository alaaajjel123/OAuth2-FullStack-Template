'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { getProducts } from '../services/product';
import ProductList from '../components/ProductList';
import HelloSection from '../components/HelloSection';

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {isLoggedIn && <HelloSection />}
      <ProductList products={products} />
    </div>
  );
}