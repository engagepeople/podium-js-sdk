import {IPodiumPromise} from '../../../types/index'
import {Resource} from '../../Podium/Resource'
import {IAPIResponse} from '../../../types'
import {Settings} from '../../Podium/Settings'

export class Orders extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('member/order')
    }

    public Cancel(orderId: number | string): IPodiumPromise<IAPIResponse[]> {
        this.SetResourceOnce('member/orderCancel')
        return this.Update(orderId)
    }
}
