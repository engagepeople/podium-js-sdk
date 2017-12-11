'use strict'

let PodiumRequest = require('../podiumRequest/podiumRequest')

exports.getToken = () => {
  if (PodiumRequest.getUser()) {
    return PodiumRequest.getUser().token
  }
  return false
}

exports.basicAuth = (token, programId) => {
  return PodiumRequest.setUser(token, programId)
}

exports.login = (username, password, programId) => {
  return PodiumRequest.Authenticate(username, password, programId)
}

exports.logout = function () {
  return PodiumRequest.Logout()
}
