// src/redux/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    totalCount: 0,
    totalPrice: 0
  },
  reducers: {
    addProductToCart: (state, action) => {
      const {id, title, price, count = 1} = action.payload;
      if (state.items[id]) {
        state.items[id].count += count;
        state.items[id].totalPrice += count * price;
        state.totalPrice += count * price;
      } else {
        state.items[id] = { id, title, price, count, totalPrice: count * price };
        state.totalPrice += count * price;
        state.totalCount += 1;
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalCount = 0;
      state.totalPrice = 0;
    },
    removeProductFromCart: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.totalCount -= 1;
        state.totalPrice -= state.items[id].totalPrice;
        delete state.items[id];
      }
    },
    removeItemFromCart: (state, action) => {
      const { id, price } = action.payload;
      if (state.items[id]) {
        if (state.items[id].count === 1) {
          state.totalCount -= 1;
          delete state.items[id];
        } else {
          state.items[id].count -= 1;
          state.items[id].totalPrice -= price;
        }
        state.totalPrice -= price;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const {addProductToCart, clearCart, removeItemFromCart, removeProductFromCart} = cartSlice.actions

export default cartSlice.reducer