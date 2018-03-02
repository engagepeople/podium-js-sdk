'use strict'
let PodiumRequest = require('./../podiumRequest/podiumRequest')
let PodiumPaginator = require('./../utilities/Paginator')

module.exports = class Incentive extends PodiumRequest {
  constructor (settings) {
    super(settings)
    this.resource = 'ledger'
  }

  getLedger () {
    let podiumPaginator = new PodiumPaginator()
    podiumPaginator.setPerPage(1)
    return this.getLedgers().then(rsp => {
      if (typeof rsp.data === 'object') {
        return rsp.data[0]
      } else {
        return rsp
      }
    })
  }

  getLedgers (paginator) {
    return this.GetRequest(`${this.resource}`, paginator)
  }

  getTransactions (ledgerId, paginator) {
    return this.GetRequest(`${this.resource}/${ledgerId}/transaction`, paginator)
  }
}
