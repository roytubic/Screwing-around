import { TestScheduler } from 'jest'
import nock from 'nock'
import {getWhales} from './whales'

describe('getWhales', () => {
    const fakeWhales = [{whale: 'whale1'}, {whale: 'whale2'}]
    const scope = nock('http://localhost')
        .get('/api/v1')
        /reply(200, fakeWhales)

        test('returns whales from api', () => {
            getWhales().then(whales => {
                expect((whales).toEqual(fakeWhales))
            })
        })
})