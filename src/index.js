'use strict'

const settings = require('./utilities/settings')
const auth = require('./api/auth')
const terms = require('./api/terms')
const profile = require('./api/profile')
const incentive = require('./api/incentive')

class Podium {
  constructor (userSettings = require('./settings')) {
    settings.setAll(userSettings)
  }
}

Podium.prototype.auth = auth
Podium.prototype.terms = terms
Podium.prototype.profile = profile
Podium.prototype.incentive = incentive

module.exports = Podium
