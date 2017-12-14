'use strict'

let PodiumRequest = require('./../podiumRequest/podiumRequest')

module.exports = class Incentive extends PodiumRequest {
  constructor (settings) {
    super(settings)
    this.resouce = 'balance'
  }

  getBalance () {
    return this.GetRequest(this.resouce).then((response) => {
      return response.data[0]
    })
  }

  getTransactions () {
    return this.GetRequest('points_transactions').then((response) => {
      return response.data
    })
  }
}
