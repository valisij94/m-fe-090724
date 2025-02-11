// import {combineReducers, createStore} from 'redux'
// import { counterReducer } from './reducers/counterReducer';
// import { productsReducer } from './reducers/productsReducer';
// import { filtersReducer } from './reducers/filtersReducer';

// const store = createStore( combineReducers(
//   {
//     counter: counterReducer,
//     products: productsReducer,
//     filters: filtersReducer
//   }
// ) );

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice';
import productsReducer from './slices/productsSlice';
import filterReducer from './slices/filterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    filter: filterReducer
  },
})