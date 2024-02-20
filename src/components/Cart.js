import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { removeItem, clearCart } from '../features/cartSlice';
import ConfirmationModal from '../components/ConfirmationModal';
import './Cart.css';
import products from '../data/products'; // Import products data

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [showCartItems, setShowCartItems] = useState(false);
  const [showRemoveConfirmationModal, setShowRemoveConfirmationModal] = useState(false);
  const [showClearConfirmationModal, setShowClearConfirmationModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleRemoveItem = (item) => {
    setItemToRemove(item);
    setShowRemoveConfirmationModal(true);
  };

  const handleConfirmRemove = () => {
    dispatch(removeItem(itemToRemove));
    setShowRemoveConfirmationModal(false);
  };

  const handleClearCart = () => {
    if (cartItems.length === 0) {
      return; // No need to clear an empty cart
    }
    setShowClearConfirmationModal(true);
  };

  const handleConfirmClearCart = () => {
    dispatch(clearCart());
    setShowClearConfirmationModal(false);
  };

  const handleCloseModal = () => {
    setShowRemoveConfirmationModal(false);
    setShowClearConfirmationModal(false);
  };

  const handleCartIconClick = () => {
    setShowCartItems(!showCartItems); // Toggle showCartItems state
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <div className="cart-icon-container" onClick={handleCartIconClick}>
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">{totalQuantity}</span>
      </div>
      {cartItems.length === 0 ? (
        <p>No items in the cart. Please add Some items to your cart 😊.</p>
      ) : (
        <div className="cart-items-overlay" style={{ display: showCartItems ? 'block' : 'none' }}>
          <div className="cart-items">
            {cartItems.map((item, index) => {
              const product = products.find(p => p.id === item.id);
              return (
                <div key={index} className="cart-item">
                  <img className="cart-item-image" src={product.image} alt={item.name} />
                  <div className="cart-item-details">
                    <p>{item.name} - Quantity: {item.quantity}</p>
                    <button onClick={() => handleRemoveItem(item)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-footer">
            <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        </div>
      )}
      <ConfirmationModal
        isOpen={showRemoveConfirmationModal || showClearConfirmationModal}
        onClose={handleCloseModal}
        onConfirm={showRemoveConfirmationModal ? handleConfirmRemove : handleConfirmClearCart}
        itemName={itemToRemove ? itemToRemove.name : ''}
      />
    </div>
  );
};

export default Cart;

