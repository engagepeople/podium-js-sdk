'use strict'
let PodiumRequest = require('./../podiumRequest/podiumRequest')

module.exports = class Terms extends PodiumRequest {
  constructor (settings) {
    super(settings)
    this.resource = 'terms'
  }

  get () {
    return this.GetRequest(this.resource)
  }

  accept (id) {
    return this.PostRequest(this.resource, {terms_id: id})
  }
}
