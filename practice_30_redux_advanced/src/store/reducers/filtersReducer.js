import { FILTER_ACTIONS } from "../actions/filterActions"

const initialState = {
  category: ''
}

export const filtersReducer = (state = initialState, action) => {

  switch(action.type) {
    case FILTER_ACTIONS.APPLY_FILTERS: {
      return {
        ...action.payload
      }
    }
    default: return state;
  }
}