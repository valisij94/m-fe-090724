import {combineReducers, createStore} from 'redux'
import { counterReducer } from './reducers/counterReducer';
import { productsReducer } from './reducers/productsReducer';
import { filtersReducer } from './reducers/filtersReducer';

const store = createStore( combineReducers(
  {
    counter: counterReducer,
    products: productsReducer,
    filters: filtersReducer
  }
) );

export default store;