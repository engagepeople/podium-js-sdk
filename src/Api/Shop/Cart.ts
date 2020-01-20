import {IPodiumPromise} from '../../../types/index'
import {Resource} from '../../Podium/Resource'
import {IAPIResponse} from '../../../types'
import {Settings} from '../../Podium/Settings'

export class ShopCart extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('shoppingCart')
    }

    public RemoveItemFromCart(cartId: number,
                              productId: number): IPodiumPromise<IAPIResponse[]> {
        return this.DeleteRequest(cartId, `item/${productId}`)
    }

    public Confirm(cartId: number,
                   addressId: number,
                   ledgerId: number,
                   accountId: number): IPodiumPromise<IAPIResponse[]> {
        this.SetResourceOnce(`shoppingCart/confirm`)
        return this.Create({
            account_id: accountId,
            address_id: addressId,
            ledger_id: ledgerId,
            shopping_cart_id: cartId,
        })
    }

    public Checkout(cartId: number,
                    accountId: number,
                    addressId?: number,
                    kountSessionId?: string): IPodiumPromise<IAPIResponse[]> {
        this.SetResourceOnce(`shoppingCart/checkout`)

        return this.Create({
            account_id: accountId,
            address_id: addressId,
            kount_session_id: kountSessionId,
            shopping_cart_id: cartId,
        })
    }

    public UpdateItem(cartId: number,
                      itemId: string,
                      quantity: number): IPodiumPromise<IAPIResponse> {

        return this.UpdateRequest<IAPIResponse>(cartId, { quantity }, `item/${itemId}`)
    }
}
