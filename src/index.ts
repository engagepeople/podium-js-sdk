// tslint:disable:max-classes-per-file
import {ISettings} from '../types'
import {Auth} from './Api/Auth'
import {LRG} from './Api/Lrg'
import {Request} from './Podium/Request'
import {Resource} from './Podium/Resource'
import {Terms} from './Api/Terms'

export class Podium {
    public Auth: Auth
    public Profile: Request
    public Ledgers: Resource
    public LRG: LRG
    public Terms: Terms

    constructor(settings: ISettings) {
        this.Auth = new Auth(settings)
        this.Profile = new Resource(settings).SetResource('profile').SetLegacy(true)
        this.Ledgers = new Resource(settings).SetResource('ledger')
        this.LRG = new LRG(settings)
        this.Terms = new Terms(settings)

    }
}

export {Paginator as PodiumPaginator} from './Podium/Paginator'
export {Filter as PodiumFilter} from './Podium/Filter'

// const Auth = require('./api/auth')
// const Terms = require('./api/terms')
// const LRG = require('./api/lrg')
// const Incentive = require('./api/incentive')
// const Profile = require('./api/profile')
// const Paginator = require('./utilities/Paginator')
//
// class Podium {
//     constructor (userSettings = require('./settings')) {
//         this.settings = userSettings
//         this.Paginator = () => {
//             return new Paginator(this.settings)
//         }
//         this.auth = new Auth(this.settings)
//         this.lrg = new LRG(this.settings)
//         this.incentive = new Incentive(this.settings)
//         this.terms = new Terms(this.settings)
//         this.profile = new Profile(this.settings)
//     }
// }
