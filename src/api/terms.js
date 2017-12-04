'use strict'

let PodiumRequest = require('../podiumRequest/podiumRequest')

exports.get = () => {
  return PodiumRequest.get('terms')
}

exports.accept = (id) => {
  return PodiumRequest.post('terms', {terms_id: id})
}
