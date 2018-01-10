'use strict'

const Auth = require('./api/auth')
const Terms = require('./api/terms')
const LRG = require('./api/lrg')
const Incentive = require('./api/incentive')
const Profile = require('./api/profile')
const Paginator = require('./utilities/Paginator')

class Podium {
  constructor (userSettings = require('./settings')) {
    this.settings = userSettings
    this.Paginator = () => {
      return new Paginator(this.settings)
    }
    this.auth = new Auth(this.settings)
    this.lrg = new LRG(this.settings)
    this.incentive = new Incentive(this.settings)
    this.terms = new Terms(this.settings)
    this.profile = new Profile(this.settings)
  }
}

module.exports = Podium
