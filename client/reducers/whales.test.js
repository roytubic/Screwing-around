import whales from './whales'
import {setWhales} from '../actions/index'

describe('Whale reducer', () => {
    test('SET_WHALES', () => {
        let state = [{id: 1, whale: 'whale1'}, {id:2, whale: 'whale2'}]
        let action = setWhales(state)
        let whalesList = whales(state,action)
        return expect(whalesList.length).toBe(2)
    })
})