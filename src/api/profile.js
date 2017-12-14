'use strict'

let PodiumRequest = require('./../podiumRequest/podiumRequest')

module.exports = class Profile extends PodiumRequest {
  constructor (settings) {
    super(settings)
    this.resouce = 'profile'
  }

  get () {
    return this.GetRequest(this.resouce)
  }
}
