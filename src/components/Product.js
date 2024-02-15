// // src/components/Product.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addItem } from '../features/cartSlice';

// const Product = ({ id, name, price }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addItem({ id, name, price }));
//     console.log('Add to cart button clicked for product:', { id, name, price });
//   };

//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>Price: ₹{price}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default Product;




// src/components/Product.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem } from '../features/cartSlice';

// const Product = ({ id, name, price }) => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);
//   const itemCount = cartItems.filter(item => item.id === id).length;

//   const handleAddToCart = () => {
//     dispatch(addItem({ id, name, price }));
//     console.log('Add to cart button clicked for product:', { id, name, price });
//   };

//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>Price: ₹{price}</p>
//       <p>Count in cart: {itemCount}</p> {/* Display count of item in cart */}
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default Product;










// src/components/Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

const Product = ({ name, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ name, price }));
    console.log('Add to cart button clicked for product:', { name, price });
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;

