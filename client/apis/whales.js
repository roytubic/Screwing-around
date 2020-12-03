import request from 'superagent'

const rootUrl = '/api/v1'

export function getWhales () {
  return request.get(rootUrl + '/whales')
    .then(res => {
      return res.body.whales
    })
}
