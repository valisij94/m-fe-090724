import { COUNTER_ACTIONS } from "../actions/counterActions";

const initialState = 0;

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT: {
      return state + 1;
    }
    case COUNTER_ACTIONS.DECREMENT: {
      return state - 1;
    }
    default: return state;
  }
}