import React, { useContext } from "react";
import "./shop.styles.scss";

import { ProductsContext } from "../../contexts/product.contect";
import ProductCard from "../../components/product-card/product-card.component";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
