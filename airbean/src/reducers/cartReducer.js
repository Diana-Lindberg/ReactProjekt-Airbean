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
    increaseQuantity(state, action) {
      state.cartItem.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem.quantity++; // Öka med 1
          }
        });
       
    },
    decreaseQuantity(state, action) {
      state.cartItem.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem.quantity--; // Minska med 1
        }
      });
    },
        
    },
    removeProduct(state, action) {
      const newCart = state.cartItem.filter((cartItem) => {
        if (cartItem.id !== action.payload) {
          return cartItem; // Returnera alla produkter förutom den produkten vars id vi skickar med
        }
      });

      return newCart;
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
