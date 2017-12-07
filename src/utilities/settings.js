'use strict'

module.exports = {
  _data: [],
  setAll: function (settings) {
    this._data = settings
  },
  set: function (key, value) {
    this._data[key] = value
  },
  get: function (key) {
    return this._data[key]
  },
  remove: function (key) {
    return delete this._data[key]
  }
}
