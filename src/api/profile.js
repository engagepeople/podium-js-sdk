'use strict'

let PodiumRequest = require('../podiumRequest/podiumRequest')

exports.get = () => {
  return PodiumRequest.get('profile')
}
