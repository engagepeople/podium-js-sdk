import {IPodiumPromise} from '../../../types/index'
import {Resource} from '../../Podium/Resource'
import {IAPIResponse} from '../../../types'
import {Settings} from '../../Podium/Settings'

export class Orders extends Resource {

    constructor(settings: Settings) {
        super(settings)
        super.SetResource('member/order')
    }

    public Cancel(orderId: number | string): IPodiumPromise<IAPIResponse[]> {
        super.SetResourceOnce('member/orderCancel')
        return super.Update(orderId)
    }
}
