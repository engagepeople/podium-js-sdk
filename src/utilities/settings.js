'use strict'

const store = require('store')

module.exports = {
  _data: [],
  _hasLocalStorage: () => {
    return (localStorage !== undefined)
  },
  set: function (key, value) {
    if (this._hasLocalStorage()) {
      return store.set(key, value)
    } else {
      this._data[key] = value
    }
  },
  get: function (key) {
    if (this._hasLocalStorage()) {
      return store.get(key)
    } else {
      return this._data[key]
    }
  },
  remove: function (key) {
    if (this._hasLocalStorage()) {
      return store.remove(key)
    } else {
      return delete this._data[key]
    }
  }
}
