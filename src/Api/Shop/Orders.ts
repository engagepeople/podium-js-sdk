import {IPodiumPromise, IResponse, ISettings, ITransactions} from '../../../types/index'
import {Resource} from '../../Podium/Resource'
import {IAPIResponse} from '../../../types'

export class Orders extends Resource {

    constructor(settings: ISettings) {
        super(settings)
        super.SetResource('member/order')
    }

    public CancelOrder(orderId: number | string): IPodiumPromise<IAPIResponse[]> {
        super.SetResourceOnce(`member/orderCancel`)
        return super.Update(orderId)
    }
}
