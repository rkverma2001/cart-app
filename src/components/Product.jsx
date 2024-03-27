import { useState } from "react";

const Product = ({ product, onAddToCart, onRemoveFromCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
    onAddToCart(product);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onRemoveFromCart(product);
    }
  };

  return (
    <div className="product">
      <p>{product.name}</p>
      <p>&#8377;{product.price}</p>
      <div className="quantity-control">
        <button onClick={handleRemoveFromCart}>-</button>
        <span>{quantity}</span>
        <button onClick={handleAddToCart}>+</button>
      </div>
    </div>
  );
};

export default Product;
