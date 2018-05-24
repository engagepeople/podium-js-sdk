// tslint:disable:max-classes-per-file
import {ISettings} from '../types'
import {Auth} from './Api/Auth'
import {Ecards} from './Api/Ecards/Ecards'
import {LRG} from './Api/Lrg'
import {Ledgers} from './Api/Ledgers'
import {Resource} from './Podium/Resource'
import {Terms} from './Api/Terms'

export {Filter as PodiumFilter} from './Podium/Filter'
export {Paginator as PodiumPaginator} from './Podium/Paginator'
export class Podium {
    public Auth: Auth
    public Ecards: {
        Categories: Resource
        Ecards: Ecards
        Templates: Resource,
    }
    public Ledgers: Ledgers
    public LRG: LRG
    public Profile: Resource
    public Shop: {
        Products: Resource,
    }
    public Terms: Terms

    constructor(settings: ISettings) {
        this.Auth = new Auth(settings)
        this.Ecards = {
            Categories: new Resource(settings).SetResource('ecardCategory'),
            Ecards: new Ecards(settings),
            Templates: new Resource(settings).SetResource('ecardTemplate'),
        }
        this.Ledgers = new Ledgers(settings)
        this.LRG = new LRG(settings)
        this.Profile = new Resource(settings).SetResource('profile').SetLegacy(true)
        this.Shop = {
            Products: new Resource(settings).SetResource('member/product'),
        }
        this.Terms = new Terms(settings)
    }
}
