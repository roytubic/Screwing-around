import request from 'supertest'
import server from '../server'
import {getWhales} from '../db/db'
import { test } from '../db/knexfile'

let data = [{id:1, name:humpback}]

jest.mock('..db/db', () => ({
    getWhales: jest.fn(() => Promise.resolve(data))
}))

describe ('GET /api/v1', () => {
    test('Get whales', () => {
        return request(server)
        .get('/api/v1')
        .then ((res => {
            expect(getWhales).toHaveBeenCalled()
            expect(res.body.length).toBe(3)
        }))
    }
})