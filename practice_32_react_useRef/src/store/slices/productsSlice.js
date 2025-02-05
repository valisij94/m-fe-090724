// src/redux/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isFetching: false,
    error: ''
  },
  reducers: {
    startFetching: (state) => {
      state.error = '';
      state.isFetching = true;
    },
    finishFetching: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    errorFetching: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { startFetching, errorFetching, finishFetching } = productsSlice.actions

export default productsSlice.reducer