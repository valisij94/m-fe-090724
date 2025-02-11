// src/redux/slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    category: '',
    priceFrom: null,
    priceTo: null,
    name: ''
  },
  reducers: {
    applyFilters: (state, action) => {
      return {...state, ...action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { applyFilters } = filterSlice.actions

export default filterSlice.reducer