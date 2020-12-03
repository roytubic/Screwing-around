const knex = require('knex')
const config = require('./knexfile')
const connection = knex(config.test)

const {getWhales} = require ('./db')

beforeAll(() => connection.migrate.latest())
beforeEach(() => connection.seed.run())

describe('getWhales', () => {
    test('gets whales from database', () => {
        return getWhales(connection).then(whales => {
            expect(whales).toHaveLength(3)
            expect(whales[0].name).toEqual('dolphin1')
            return null
        })
    })
})