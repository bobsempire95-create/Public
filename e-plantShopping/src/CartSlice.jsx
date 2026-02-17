import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // payload is expected to be a plant object
      const plant = action.payload;
      const existing = state.items.find(item => item.name === plant.name);
      if (existing) {
        // increment quantity if it's already in the cart
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        // add new entry with quantity defaulting to 1
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // action.payload should contain identifying info (name)
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      // payload: { name, quantity }
      const { name, quantity } = action.payload;
      const existing = state.items.find(item => item.name === name);
      if (existing) {
        existing.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
