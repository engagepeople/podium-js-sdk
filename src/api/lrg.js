'use strict'

let PodiumRequest = require('../podiumRequest/podiumRequest')

exports.get = (redirectUrl) => {
  const user = PodiumRequest.getUser()
  return PodiumRequest.post('lrg/session', {
    user_id: user.user_id,
    program_id: user.program_id,
    website_back: redirectUrl
  })
}

exports.redirect = (redirectUrl) => {
  this.get(redirectUrl).then((response) => {
    window.location.replace(response.body.redirect_url)
  })
}
