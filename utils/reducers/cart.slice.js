import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  items: [],
};

// Create a slice for the cart
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        // If item already exists in the cart, update its quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If item doesn't exist in the cart, add it
        state.items.push(newItem);
      }
    },
    // Action to remove an item from the cart
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    // Action to clear all items from the cart
    clearCart: state => {
      state.items = [];
    }
  },
});

// Export actions
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = state => state.cart.items;
export const selectCartTotalQuantity = state => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalPrice = state => state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);

// Export reducer
export default cartSlice.reducer;
