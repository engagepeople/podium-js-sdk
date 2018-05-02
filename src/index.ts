// tslint:disable:max-classes-per-file
import {ISettings} from '../types'
import {Auth} from './Api/Auth'
import {LRG} from './Api/Lrg'
import {Request} from './Podium/Request'
import {Resource} from './Podium/Resource'
import {Terms} from './Api/Terms'
import {Ledgers} from './Api/Ledgers'

export class Podium {
    public Auth: Auth
    public Profile: Request
    public Ledgers: Ledgers
    public LRG: LRG
    public Terms: Terms

    constructor(settings: ISettings) {
        this.Auth = new Auth(settings)
        this.Profile = new Resource(settings).SetResource('profile').SetLegacy(true)
        this.Ledgers = new Ledgers(settings)
        this.LRG = new LRG(settings)
        this.Terms = new Terms(settings)
    }
}

export {Paginator as PodiumPaginator} from './Podium/Paginator'
export {Filter as PodiumFilter} from './Podium/Filter'
