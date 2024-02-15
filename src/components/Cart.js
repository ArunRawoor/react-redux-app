// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../features/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.name}>
          <p>{item.name} - Quantity: {item.quantity}</p>
          <button onClick={() => handleRemoveItem(item)}>Remove</button>
        </div>
      ))}
      <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
