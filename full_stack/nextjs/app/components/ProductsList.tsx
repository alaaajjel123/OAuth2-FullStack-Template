import { useEffect, useState } from "react";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}