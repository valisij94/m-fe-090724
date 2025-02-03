import { PRODUCTS_ACTIONS } from "../actions/productsActions"

const initialState = {
  products: [],
  isFetching: false,
  error: ''
}

export const productsReducer = (state = initialState, action) => {

  switch(action.type) {
    case PRODUCTS_ACTIONS.START_FETCHING: {
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    }
    case PRODUCTS_ACTIONS.PRODUCTS_FETCHED: {
      return {
        ...state,
        isFetching: false,
        products: action.payload
      }
    }
    case PRODUCTS_ACTIONS.PRODUCTS_FETCH_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    }
    default: return state;
  }
}