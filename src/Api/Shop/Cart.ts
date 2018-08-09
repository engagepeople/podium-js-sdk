import {IPodiumPromise} from '../../../types/index'
import {Resource} from '../../Podium/Resource'
import {IAPIResponse} from '../../../types'
import {Settings} from '../../Podium/Settings'

export class ShopCart extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('shoppingCart')
    }

    public Confirm(cartId: number, addressId: number, ledgerId: number): IPodiumPromise<IAPIResponse[]> {
        this.SetResourceOnce(`shoppingCart/confirm`)
        return this.Create({
            address_id: addressId,
            ledger_id: ledgerId,
            shopping_cart_id: cartId,
        })
    }

    public Checkout(cartId: number, addressId: number, ledgerId: number): IPodiumPromise<IAPIResponse[]> {
        this.SetResourceOnce(`shoppingCart/checkout`)
        return this.Create({
            address_id: addressId,
            ledger_id: ledgerId,
            shopping_cart_id: cartId,
        })
    }
}
