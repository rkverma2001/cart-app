import { useState } from "react";
import ProductList from "./ProductsList";
import Cart from "./Cart";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [products] = useState([
    { id: 1, name: "Product-1", price: 100 },
    { id: 2, name: "Product-2", price: 200 },
    { id: 3, name: "Product-3", price: 300 },
  ]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  return (
    <div className="shopping-cart">
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemove}
      />
      <Cart cart={cart} removeFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default ShoppingCart;
