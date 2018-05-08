// tslint:disable:max-classes-per-file
import {ISettings} from '../types'
import {Auth} from './Api/Auth'
import {LRG} from './Api/Lrg'
import {Resource} from './Podium/Resource'
import {Terms} from './Api/Terms'
import {Ledgers} from './Api/Ledgers'

export class Podium {
    public Auth: Auth
    public Ecards: {
        Categories: Resource
        Ecards: Resource
        Templates: Resource,
    }
    public Profile: Resource
    public Ledgers: Ledgers
    public LRG: LRG
    public Terms: Terms

    constructor(settings: ISettings) {
        this.Auth = new Auth(settings)
        this.Profile = new Resource(settings).SetResource('profile').SetLegacy(true)
        this.Ecards = {
            Categories : new Resource(settings).SetResource('ecardCategory'),
            Ecards: new Resource(settings).SetResource('ecard'),
            Templates : new Resource(settings).SetResource('ecardTemplate'),
        }
        this.Ledgers = new Ledgers(settings)
        this.LRG = new LRG(settings)
        this.Terms = new Terms(settings)
    }
}

export {Paginator as PodiumPaginator} from './Podium/Paginator'
export {Filter as PodiumFilter} from './Podium/Filter'
