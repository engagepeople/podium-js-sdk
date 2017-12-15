'use strict'

let PodiumRequest = require('./../podiumRequest/podiumRequest')

module.exports = class LRG extends PodiumRequest {
  constructor (settings) {
    super(settings)
    this.resouce = 'lrg/session'
  }

  get (redirectUrl) {
    return this.PostRequest(this.resouce, {
      website_back: redirectUrl
    })
  }

  redirect (redirectUrl) {
    if (!(typeof window === 'undefined' || window === null)) {
      this.get(redirectUrl).then(response => {
        window.location.replace(response.body.redirect_url)
      })
    } else {
      return false
    }
  }
}
