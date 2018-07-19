import {IPodiumPromise, IResponse, ISettings, ITransactions} from '../../../types/index'
import {Resource} from '../../Podium/Resource'
import {IAPIResponse} from '../../../types'

export class ShopCart extends Resource {

    constructor(settings: ISettings) {
        super(settings)
        super.SetResource('shoppingCart')
    }

    public Confirm(cartId: number, addressId: number, ledgerId: number): IPodiumPromise<IAPIResponse[]> {
        super.SetResourceOnce(`shoppingCart/confirm`)
        return super.Create()
    }

    public Checkout(cartId: number, addressId: number, ledgerId: number): IPodiumPromise<IAPIResponse[]> {
        super.SetResourceOnce(`shoppingCart/checkout`)
        return super.Create()
    }
}
