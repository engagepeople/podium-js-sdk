'use strict'
let PodiumRequest = require('./../podiumRequest/podiumRequest')

module.exports = class Auth extends PodiumRequest {
  constructor (settings) {
    super(settings)
    this.settings = settings
  }

  getToken () {
    return this._getToken()
  }

  login (username, password, programSlug) {
    let params = {
      'user_account': username,
      'password': password,
      'program_slug': programSlug
    }
    return this.AuthenticateRequest(params)
  }

  basicAuth (token) {
    this._setToken(token)
  }

  logout () {
    return this.PostRequest('logout').finally(rsp => {
      this._removeToken()
    })
  }
}
