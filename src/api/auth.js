'use strict'
let PodiumRequest = require('./../podiumRequest/podiumRequest')

module.exports = class Auth extends PodiumRequest {
  constructor (settings) {
    super(settings)
    this.settings = settings
    this.resouce = 'login'
  }

  getToken () {
    return this._getToken()
  }

  login (username, password, programId) {
    let params = {
      'user_account': username,
      'password': password,
      'program_id': programId
    }
    return this.AuthenticateRequest(this.resouce, params)
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
