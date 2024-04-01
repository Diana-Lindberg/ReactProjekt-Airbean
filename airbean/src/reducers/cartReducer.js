import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log('State är: ', state);
      console.log('Action är: ', action);
      state.cartItem.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;