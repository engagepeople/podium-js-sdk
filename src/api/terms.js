'use strict'

let PodiumRequest = require('./../podiumRequest/podiumRequest')

module.exports = class Terms extends PodiumRequest {
  constructor (settings) {
    super(settings)
    this.resouce = 'terms'
  }

  get () {
    return this.GetRequest(this.resouce)
  }

  accept (id) {
    return this.PostRequest(this.resouce, {terms_id: id})
  }
}
