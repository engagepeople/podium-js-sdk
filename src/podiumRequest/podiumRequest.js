'use strict'

const axios = require('axios')
const settings = require('./../utilities/settings')
const convertTime = require('./../utilities/convertTime')

const INVALID_TOKEN = 'INVALID_TOKEN'
const UNACCEPTED_TERMS = 'UNACCEPTED_TERMS'
const STORE_USER_KEY = '__podiumSDK__user'

let PodiumRequest = {}
PodiumRequest._user = {}

let _makeUrl = (path) => {
  return settings.get('endpoint') + path
}

let _makeHeaders = () => {
  return {
    'Authentication': module.exports.getUser().token
  }
}

let _checkError = (error) => {
  if (error.response.status === 400 && error.response.data.apiCode === INVALID_TOKEN) {
    settings.remove(STORE_USER_KEY)
  }

  if (error.response.status === 403 && error.response.data.code === UNACCEPTED_TERMS) {
    console.log(UNACCEPTED_TERMS)
  }
  return Promise.reject(error.response)
}

let _prepareRequest = () => {
  if (!module.exports.getUser()) {
    console.error('PodiumSDK - User is not Authenticated.  Login in first')
    return false
  }
  return true
}

PodiumRequest.Authenticate = (username, password, programId) => {
  let params = {
    'user_account': username,
    'password': password,
    'program_id': programId
  }

  return axios.post(_makeUrl('login'), params)
    .then(function (response) {
      let user = {
        token: response.data.token,
        user_id: response.data.user_id,
        username: username,
        program_id: programId
      }
      settings.set(STORE_USER_KEY, user)
      return user
    })
}

PodiumRequest.getUser = function () {
  return settings.get(STORE_USER_KEY)
}

PodiumRequest.Logout = () => {
  return module.exports.post('logout').then((response) => {
    settings.remove(STORE_USER_KEY)
  })
}

PodiumRequest.get = (resource) => {
  if (!_prepareRequest()) return false
  return axios({
    method: 'get',
    transformResponse: function (data) {
      return convertTime.APIToUTC(JSON.parse(data))
    },
    url: _makeUrl(resource),
    headers: _makeHeaders()
  }).then(function (response) {
    return response.data
  }).catch(_checkError)
}

PodiumRequest.post = (resource, params) => {
  if (!_prepareRequest()) return false
  return axios({
    method: 'post',
    // transformRequest: [function (data, headers) {
    //   return convertTime.UTCtoAPI(data)
    // }],
    transformResponse: function (data) {
      return convertTime.APIToUTC(JSON.parse(data))
    },
    url: _makeUrl(resource),
    data: params,
    headers: _makeHeaders()
  }).then(function (response) {
    return response.data
  }).catch(_checkError)
}

module.exports = PodiumRequest
