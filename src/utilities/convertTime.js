'use strict'
/* eslint-disable no-useless-escape */
const _loopNestedObj = (obj, method) => {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object' && !(obj[key] instanceof Date)) _loopNestedObj(obj[key], method)
    else {
      if ((method === 'toUTC') && (typeof obj[key] === 'string')) {
        obj[key] = _toUTC(obj[key])
      }
      if ((method === 'toAPI') && (obj[key] instanceof Date)) {
        obj[key] = _toAPI(obj[key])
      }
    }
  })
  return obj
}

const _toUTC = (key) => {
  let n = /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/g
  if (n.test(key)) {
    key = new Date(key.replace(' ', 'T') + 'Z')
  }
  return key
}

const _toAPI = (key) => {
  return `${key.getUTCFullYear()}-${strPad(key.getUTCMonth() + 1)}-${strPad(key.getUTCDate())} ${strPad(key.getUTCHours())}:${strPad(key.getUTCMinutes())}:${strPad(key.getUTCSeconds())}`
}

const strPad = (n) => {
  return String('00' + n).slice(-2)
}

module.exports = {
  APIToUTC: function (data) {
    if (typeof data !== 'object') return data
    return _loopNestedObj(data, 'toUTC')
  },
  UTCtoAPI: function (data) {
    if (typeof data !== 'object') return data
    return _loopNestedObj(data, 'toAPI')
  }
}
