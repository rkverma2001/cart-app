import React from "react";
import Product from "./Product";

const ProductList = ({ products, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
