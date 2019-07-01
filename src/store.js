import { createStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === 'ADD_TO_TICKET') {
    return {
      ...state,
      order: state.order.concat(action.product)
    }
  }

  return state
}

export default createStore(reducer, { order: [] })