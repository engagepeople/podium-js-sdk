'use strict'

let PodiumRequest = require('../podiumRequest/podiumRequest')

exports.getBalance = () => {
  return PodiumRequest.get('balance').then((response) => {
    return response.data[0]
  })
}

exports.getTransactions = () => {
  return PodiumRequest.get('points_transactions').then((response) => {
    return response.data
  })
}
