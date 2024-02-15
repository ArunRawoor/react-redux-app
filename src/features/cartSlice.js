// // src/features/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//       console.log('Item added to cart:', action.payload);
//     },
//   },
// });

// export const { addItem } = cartSlice.actions;
// export default cartSlice.reducer;
















// src/features/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [], // Initialize items as an empty array
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       const { id, name, price } = action.payload;
//       const existingItem = state.items.find(item => item.id === id);

//       if (existingItem) {
//         existingItem.quantity += 1; // Increment quantity if item already exists
//       } else {
//         state.items.push({ id, name, price, quantity: 1 }); // Add new entry with quantity 1
//       }
//     },
//   },
// });

// export const { addItem } = cartSlice.actions;
// export default cartSlice.reducer;










// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store cart items with quantities
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, price } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.name === name && item.price === price);

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({ name, price, quantity: 1 }); // Add new entry with quantity 1
      }
    },
    removeItem: (state, action) => {
      const { name, price } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.name === name && item.price === price);

      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].quantity === 1) {
          state.items.splice(existingItemIndex, 1); // Remove item if quantity is 1
        } else {
          state.items[existingItemIndex].quantity -= 1; // Decrement quantity if more than 1
        }
      }
    },
    clearCart: (state) => {
      state.items = []; // Clear all items from the cart
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

