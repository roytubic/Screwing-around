import { SET_WHALES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WHALES:
      return action.whales
    default:
      return state
  }
}

export default reducer
