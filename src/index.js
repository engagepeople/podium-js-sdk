'use strict'

const settings = require('./utilities/settings')
const auth = require('./api/auth')
const lrg = require('./api/lrg')
const incentive = require('./api/incentive')
const profile = require('./api/profile')
const terms = require('./api/terms')

class Podium {
  constructor (userSettings = require('./settings')) {
    settings.set('settings', userSettings)
  }
}

Podium.prototype.auth = auth
Podium.prototype.lrg = lrg
Podium.prototype.incentive = incentive
Podium.prototype.profile = profile
Podium.prototype.terms = terms

module.exports = Podium
