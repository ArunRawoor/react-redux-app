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
      const { id, name, price } = action.payload; // Include id property
      const existingItemIndex = state.items.findIndex(item => item.id === id); // Check for existing item using id
    
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({ id, name, price, quantity: 1 }); // Add new entry with quantity 1
      }
    },
    
    removeItem: (state, action) => {
      const { id } = action.payload; // Include id property
      const existingItemIndex = state.items.findIndex(item => item.id === id);
    
      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].quantity === 1) {
          state.items.splice(existingItemIndex, 1);
        } else {
          state.items[existingItemIndex].quantity -= 1;
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

