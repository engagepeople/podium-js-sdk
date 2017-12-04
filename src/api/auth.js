'use strict'

let PodiumRequest = require('../podiumRequest/podiumRequest')

exports.getToken = () => {
  if (PodiumRequest.getUser()) {
    return PodiumRequest.getUser().token
  }
  return false
}

exports.login = function (username, password, programId) {
  return PodiumRequest.Authenticate(username, password, programId)
}

exports.getUserId = () => {
  return PodiumRequest.getUser().user_id
}

exports.logout = function () {
  return PodiumRequest.Logout()
}
