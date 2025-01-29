export const COUNTER_ACTIONS = {
  INCREMENT: 'COUNTER/INCREMENT',
  DECREMENT: 'COUNTER/DECREMENT'
}

export const incrementAction = () => {
  return {
    type: COUNTER_ACTIONS.INCREMENT
  }
}

export const decrementAction = () => {
  return {
    type: COUNTER_ACTIONS.DECREMENT
  }
}