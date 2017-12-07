'use strict'
const store = require('store')
const auth = require('./api/auth')
const lrg = require('./api/lrg')
const incentive = require('./api/incentive')
const profile = require('./api/profile')
const terms = require('./api/terms')

class Podium {
  constructor (settings = require('./settings')) {
    store.set(`__podiumSDK__settings`, settings)
  }
}

Podium.prototype.auth = auth
Podium.prototype.lrg = lrg
Podium.prototype.incentive = incentive
Podium.prototype.profile = profile
Podium.prototype.terms = terms

module.exports = Podium
