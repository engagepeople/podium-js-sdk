'use strict'

let PodiumRequest = require('../podiumRequest/podiumRequest')

exports.get = (redirectUrl) => {
  return PodiumRequest.post('lrg/session', {
    website_back: redirectUrl
  })
}

exports.redirect = (redirectUrl) => {
  this.get(redirectUrl).then((response) => {
    window.location.replace(response.body.redirect_url)
  })
}
