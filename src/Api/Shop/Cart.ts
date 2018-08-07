import {IPodiumPromise} from '../../../types/index'
import {Resource} from '../../Podium/Resource'
import {IAPIResponse} from '../../../types'
import {Settings} from '../../Podium/Settings'

export class ShopCart extends Resource {

    constructor(settings: Settings) {
        super(settings)
        super.SetResource('shoppingCart')
    }

    public Confirm(cartId: number, addressId: number, ledgerId: number): IPodiumPromise<IAPIResponse[]> {
        super.SetResourceOnce(`shoppingCart/confirm`)
        return super.Create({
            address_id: addressId,
            ledger_id: ledgerId,
            shopping_cart_id: cartId,
        })
    }

    public Checkout(cartId: number, addressId: number, ledgerId: number): IPodiumPromise<IAPIResponse[]> {
        super.SetResourceOnce(`shoppingCart/checkout`)
        return super.Create({
            address_id: addressId,
            ledger_id: ledgerId,
            shopping_cart_id: cartId,
        })
    }
}
