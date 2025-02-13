// src/redux/slices/counterSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const resp = await fetch('https://dummyjson.com/products');
  if (!resp.ok) {
    throw new Error('Failed to fetch! ' + resp.statusText);
  }
  const data = await resp.json();
  return data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isFetching: false,
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      })
  }
});

export default productsSlice.reducer