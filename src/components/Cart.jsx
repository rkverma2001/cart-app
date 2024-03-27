const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!cart.length) {
    return <p>No Products added to the cart</p>;
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>
            Quantity: {item.quantity} x &#8377;{item.price}
          </p>
          <button className="button-78" role="button" onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <p className="total">Total: &#8377;{totalPrice}</p>
    </div>
  );
};

export default Cart;
