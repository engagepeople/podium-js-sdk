// tslint:disable:max-classes-per-file
import {Auth} from './Api/Auth'
import {Ecards} from './Api/Ecards/Ecards'
import {ShopCart} from './Api/Shop/Cart'
import {Orders} from './Api/Shop/Orders'
import {LRG} from './Api/Lrg'
import {Ledgers} from './Api/Ledgers'
import {Resource} from './Podium/Resource'
import {Terms} from './Api/Terms'
import {Settings} from './Podium/Settings'
import {Utils} from './Podium/Utils'

export {Settings as PodiumSettings} from './Podium/Settings'
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
    public Permissions: Resource
    public Shop: {
        Cart: ShopCart,
        Orders: Orders,
        Products: Resource,
        Wishlist: Resource,
    }
    public Terms: Terms
    public User: {
        Address: Resource,
        Profile: Resource,
    }
    public Users: Resource
    public Discretionary: {
        DirectReports: Resource,
        Discretionary: Resource,
        Ledger: Resource,
        Transactions: Resource,
    }

    public Utils: Utils

    constructor(settings: Settings) {
        this.Auth = new Auth(settings)
        this.Discretionary = {
            DirectReports: new Resource(settings).SetResource('user/reports'),
            Discretionary: new Resource(settings).SetResource('campaign/discretionary'),
            Ledger: new Resource(settings).SetResource('campaign/discretionary/ledger'),
            Transactions: new Resource(settings).SetResource('campaign/discretionary/transactions'),
        }
        this.Ecards = {
            Categories: new Resource(settings).SetResource('ecard/category'),
            Ecards: new Ecards(settings),
            Templates: new Resource(settings).SetResource('ecard/template'),
        }
        this.Ledgers = new Ledgers(settings)
        this.LRG = new LRG(settings)
        this.Permissions = new Resource(settings).SetResource('member/modulePermissions')
        this.Shop = {
            Cart: new ShopCart(settings),
            Orders: new Orders(settings),
            Products: new Resource(settings).SetResource('member/product'),
            Wishlist: new Resource(settings).SetResource('member/wishlist'),
        }
        this.Terms = new Terms(settings)
        this.User = {
            Address: new Resource(settings).SetResource('address').SetLegacy(true),
            Profile: new Resource(settings).SetResource('member/profile').SetLegacy(true),
        }
        this.Users = new Resource(settings).SetResource('user').SetLegacy(true)

        this.Utils = new Utils()
    }
}
