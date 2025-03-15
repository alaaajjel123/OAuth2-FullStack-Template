import React from 'react';

export default function ProductList({ products }: { products: any[] }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
        </div>
      ))}
    </div>
  );
}