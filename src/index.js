'use strict'
const store = require('store')
const auth = require('./api/auth')
const terms = require('./api/terms')
const profile = require('./api/profile')
const incentive = require('./api/incentive')

class Podium {
  constructor (settings = require('./settings')) {
    store.set(`__podiumSDK__settings`, settings)
  }
}

Podium.prototype.auth = auth
Podium.prototype.terms = terms
Podium.prototype.profile = profile
Podium.prototype.incentive = incentive

module.exports = Podium
