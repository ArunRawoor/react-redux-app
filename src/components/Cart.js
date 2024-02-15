// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, clearCart } from '../features/cartSlice';
// import './Cart.css'; // Import CSS file for styling

// // Static imports for product images
// import ProductImageA from '../Images/productA.jpg';
// import ProductImageB from '../Images/productB.jpeg';
// import ProductImageC from '../Images/productC.jpeg';
// import ProductImageD from '../Images/productD.jpeg';
// import ProductImageE from '../Images/productE.jpeg';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);

//   const handleRemoveItem = (item) => {
//     dispatch(removeItem(item));
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

//   // Function to get the image for a specific product
//   function getImageForProduct(product) {
//     switch (product.id) {
//       case 1:
//         return ProductImageA;
//       case 2:
//         return ProductImageB;
//       case 3:
//         return ProductImageC;
//       case 4:
//         return ProductImageD;
//       case 5:
//         return ProductImageE;
//       default:
//         return null; // Return null if image is not found
//     }
//   }

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       <div className="cart-items">
//         {cartItems.map(item => (
//           <div key={item.id} className="cart-item">
//             <img className="cart-item-image" src={getImageForProduct(item)} alt={item.name} />
//             <div className="cart-item-details">
//               <p>{item.name} - Quantity: {item.quantity}</p>
//               <button onClick={() => handleRemoveItem(item)}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
//       <button onClick={handleClearCart}>Clear Cart</button>
//     </div>
//   );
// };

// export default Cart;







// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../features/cartSlice';
import './Cart.css'; // Import CSS file for styling
import ProductImageA from '../Images/productA.jpg';
import ProductImageB from '../Images/productB.jpeg';
import ProductImageC from '../Images/productC.jpeg';
import ProductImageD from '../Images/productD.jpeg';
import ProductImageE from '../Images/productE.jpeg';

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

  // Map the product IDs to their respective static images
  const productImages = {
    1: ProductImageA,
    2: ProductImageB,
    3: ProductImageC,
    4: ProductImageD,
    5: ProductImageE
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => {
          console.log('Item:', item);
          console.log(`Item ID: ${item.id}`);
          console.log(`Image Source: ${productImages[item.id]}`);
          return (
            <div key={index} className="cart-item"> {/* Use index as key */}
              <img className="cart-item-image" src={productImages[item.id]} alt={item.name} /> {/* Use static image */}
              <div className="cart-item-details">
                <p>{item.name} - Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveItem(item)}>Remove</button>
              </div>
            </div>
          );
        })}
      </div>
      <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
