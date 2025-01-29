import {combineReducers, createStore} from 'redux'
import { counterReducer } from './reducers/counterReducer';

const store = createStore( combineReducers(
  {
    counter: counterReducer
  }
) );

export default store;