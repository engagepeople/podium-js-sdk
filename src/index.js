'use strict'

const Auth = require('./api/auth')
const Terms = require('./api/terms')
const LRG = require('./api/lrg')
const Incentive = require('./api/incentive')
const Profile = require('./api/profile')
const Paginator = require('./utilities/Paginator')

class Podium {
  constructor (userSettings = require('./settings')) {
    this.Paginator = Paginator
    this.setting = userSettings
    this.auth = new Auth(this.setting)
    this.lrg = new LRG(this.setting)
    this.incentive = new Incentive(this.setting)
    this.terms = new Terms(this.setting)
    this.profile = new Profile(this.setting)
  }
}

module.exports = Podium
