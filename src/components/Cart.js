// // src/components/Cart.js
// import React from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, clearCart } from '../features/cartSlice';
// import './Cart.css'; // Import CSS file for styling
// import ProductImageA from '../Images/productA.jpg';
// import ProductImageB from '../Images/productB.jpeg';
// import ProductImageC from '../Images/productC.jpeg';
// import ProductImageD from '../Images/productD.jpeg';
// import ProductImageE from '../Images/productE.jpeg';
// import ProductImageF from '../Images/productF.jpeg';


// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);

//   const handleRemoveItem = (item) => {
//     if (window.confirm(`Are you sure you want to remove ${item.name} from the cart?`)) {
//       dispatch(removeItem(item));
//       toast.error(`${item.name} removed from cart!`);
//     }
//   };
  

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

//   // Map the product IDs to their respective static images
//   const productImages = {
//     1: ProductImageA,
//     2: ProductImageB,
//     3: ProductImageC,
//     4: ProductImageD,
//     5: ProductImageE,
//     6: ProductImageF

//   };

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       <div className="cart-items">
//         {cartItems.map((item, index) => {
//           console.log('Item:', item);
//           console.log(`Item ID: ${item.id}`);
//           console.log(`Image Source: ${productImages[item.id]}`);
//           return (
//             <div key={index} className="cart-item"> {/* Use index as key */}
//               <img className="cart-item-image" src={productImages[item.id]} alt={item.name} /> {/* Use static image */}
//               <div className="cart-item-details">
//                 <p>{item.name} - Quantity: {item.quantity}</p>
//                 <button onClick={() => handleRemoveItem(item)}>Remove</button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <p >Total Price : ₹ &nbsp;{totalPrice.toFixed(2)}</p>
//       <button onClick={handleClearCart}>Clear Cart</button>
//     </div>
//   );
// };

// export default Cart;


// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, clearCart } from '../features/cartSlice';
// import ConfirmationModal from '../components/ConfirmationModal'; // Import ConfirmationModal
// import './Cart.css'; // Import CSS file for styling
// import ProductImageA from '../Images/productA.jpg';
// import ProductImageB from '../Images/productB.jpeg';
// import ProductImageC from '../Images/productC.jpeg';
// import ProductImageD from '../Images/productD.jpeg';
// import ProductImageE from '../Images/productE.jpeg';
// import ProductImageF from '../Images/productF.jpeg';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
//   const [itemToRemove, setItemToRemove] = useState(null);

//   const handleRemoveItem = (item) => {
//     setItemToRemove(item);
//     setShowConfirmationModal(true);
//   };

//   const handleConfirmRemove = () => {
//     dispatch(removeItem(itemToRemove));
//     toast.error(`${itemToRemove.name} removed from cart!`);
//     setShowConfirmationModal(false);
//   };

//   const handleCloseModal = () => {
//     setShowConfirmationModal(false);
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

//   const productImages = {
//     1: ProductImageA,
//     2: ProductImageB,
//     3: ProductImageC,
//     4: ProductImageD,
//     5: ProductImageE,
//     6: ProductImageF
//   };

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       <div className="cart-items">
//         {cartItems.map((item, index) => (
//           <div key={index} className="cart-item">
//             <img className="cart-item-image" src={productImages[item.id]} alt={item.name} />
//             <div className="cart-item-details">
//               <p>{item.name} - Quantity: {item.quantity}</p>
//               <button onClick={() => handleRemoveItem(item)}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
//       <button onClick={handleClearCart}>Clear Cart</button>
//       <ConfirmationModal
//         isOpen={showConfirmationModal}
//         onClose={handleCloseModal}
//         onConfirm={handleConfirmRemove}
//         itemName={itemToRemove ? itemToRemove.name : ''}
//       />
//     </div>
//   );
// };

// export default Cart;




import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../features/cartSlice';
import ConfirmationModal from '../components/ConfirmationModal'; // Import ConfirmationModal
import './Cart.css'; // Import CSS file for styling
import ProductImageA from '../Images/productA.jpg';
import ProductImageB from '../Images/productB.jpeg';
import ProductImageC from '../Images/productC.jpeg';
import ProductImageD from '../Images/productD.jpeg';
import ProductImageE from '../Images/productE.jpeg';
import ProductImageF from '../Images/productF.jpeg';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [showRemoveConfirmationModal, setShowRemoveConfirmationModal] = useState(false);
  const [showClearConfirmationModal, setShowClearConfirmationModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleRemoveItem = (item) => {
    setItemToRemove(item);
    setShowRemoveConfirmationModal(true);
  };

  const handleConfirmRemove = () => {
    dispatch(removeItem(itemToRemove));
    toast.error(`${itemToRemove.name} removed from cart!`);
    setShowRemoveConfirmationModal(false);
  };

  const handleClearCart = () => {
    if (cartItems.length === 0) {
      toast.error('There are no items in the cart to clear!');
    } else {
      setShowClearConfirmationModal(true);
    }
  };

  const handleConfirmClearCart = () => {
    dispatch(clearCart());
    toast.error('Cart cleared!');
    setShowClearConfirmationModal(false);
  };

  const handleCloseModal = () => {
    setShowRemoveConfirmationModal(false);
    setShowClearConfirmationModal(false);
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const productImages = {
    1: ProductImageA,
    2: ProductImageB,
    3: ProductImageC,
    4: ProductImageD,
    5: ProductImageE,
    6: ProductImageF
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart Please add if you Need.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img className="cart-item-image" src={productImages[item.id]} alt={item.name} />
              <div className="cart-item-details">
                <p>{item.name} - Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveItem(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <>
          <p>Total Price: ₹ {totalPrice.toFixed(2)}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
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



