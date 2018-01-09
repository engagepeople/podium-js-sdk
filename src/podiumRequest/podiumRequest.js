'use strict'
const axios = require('axios')
const convertTime = require('./../utilities/convertTime')
const PodiumPaginator = require('./../utilities/Paginator')
const INVALID_TOKEN = 'INVALID_TOKEN'
const LOCAL_STORAGE_KEY = '__podiumSDK__'

module.exports = class PodiumRequest {
  constructor (settings) {
    this.settings = settings
  }

  _makeUrl (path) {
    return this.settings.endpoint + path
  }

  _makeHeaders () {
    if (this._getToken()) {
      return {
        'Authentication': this._getToken()
      }
    }
  }

  _hasLocalStorage () {
    return !(typeof localStorage === 'undefined' || localStorage === null)
  }

  _catchError (error, context) {
    let cleanError = {}
    cleanError.status = error.response.status
    cleanError.statusText = error.response.statusText
    cleanError.data = error.response.data

    if (cleanError.status === 400 && cleanError.data.apiCode === INVALID_TOKEN) {
      this._removeToken()
    }
    if (typeof context.settings.catchError === 'function') {
      context.settings.catchError(cleanError)
    }

    throw cleanError
  }

  _setToken (token) {
    this.settings.token = token
    if (this._hasLocalStorage()) {
      return localStorage.setItem(`${LOCAL_STORAGE_KEY}token`, this.settings.token)
    }
    return this.settings.token
  }

  _getToken () {
    if (this._hasLocalStorage()) {
      return localStorage.getItem(`${LOCAL_STORAGE_KEY}token`)
    } else {
      return this.settings.token
    }
  }

  _removeToken () {
    if (this._hasLocalStorage()) {
      localStorage.removeItem(`${LOCAL_STORAGE_KEY}token`)
    }
    this.settings.token = undefined
  }

  GetRequest (resource, params) {
    if (params instanceof PodiumPaginator) {
      params = params.toParams()
    }

    if (!this._getToken()) Promise.reject(INVALID_TOKEN)
    return axios({
      method: 'get',
      params: params,
      transformResponse: function (data) {
        return convertTime.APIToUTC(JSON.parse(data))
      },
      url: this._makeUrl(resource),
      headers: this._makeHeaders()
    })
      .then(function (response) {
        return response.data
      })
      .catch((error) => {
        this._catchError(error, this)
      })
  }

  PostRequest (resource, params) {
    if (!this._getToken()) Promise.reject(INVALID_TOKEN)
    return axios({
      method: 'post',
      // transformRequest: [function (data, headers) {
      //   return convertTime.UTCtoAPI(data)
      // }],
      // transformResponse: function (data) {
      //   return convertTime.APIToUTC(JSON.parse(data))
      // },
      url: this._makeUrl(resource),
      data: params,
      headers: this._makeHeaders()
    })
      .then(function (response) {
        return response.data
      })
      .catch((error) => {
        this._catchError(error, this)
      })
  }

  AuthenticateRequest (params) {
    return axios.post(this._makeUrl('login'), params)
      .then(response => {
        this._setToken(response.data.token)
        return response.data
      }).catch((error) => {
        this._catchError(error, this)
      })
  }
}
