const connection = require('./connection')

function getWhales (db = connection) {
  return db('whales').select()
}

module.exports = {
  getWhales
}
