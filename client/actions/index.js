import { getWhales } from '../apis/whales'

export const SET_WHALES = 'SET_WHALES'

export function setWhales (whales) {
  return {
    type: SET_WHALES,
    whales
  }
}

export function fetchWhales () {
  return dispatch => {
    return getWhales()
      .then(whales => {
        dispatch(setWhales(whales))
        return null
      })
  }
}
