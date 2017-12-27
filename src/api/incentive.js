'use strict'
let PodiumRequest = require('./../podiumRequest/podiumRequest')

module.exports = class Incentive extends PodiumRequest {
  constructor (settings) {
    super(settings)
    this.resource = 'ledger'
  }

  getBalance () {
    return this.GetRequest(`${this.resource}/balance`)
  }

  getTransactions (paginator) {
    return this.GetRequest(this.resource, paginator.toParams())
  }
}
