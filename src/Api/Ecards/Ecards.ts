import {ECARD_STATUS, IEcard, IEcardsFilter, IPodiumPromise} from '../../../types/index'
import {Resource} from '../../Podium/Resource'
import {Paginator} from '../../Podium/Paginator'
import {Filter} from '../../Podium/Filter'
import {Settings} from '../../Podium/Settings'

export class Ecards extends Resource {

    constructor(settings: Settings) {
        super(settings)
        super.SetResource('ecard')
    }

    public GetReceived(paginator: Paginator): IPodiumPromise<IEcard[]> {
        const filter: Filter<IEcardsFilter> = new Filter<IEcardsFilter>({status: ECARD_STATUS.RECEIVED})
        return super.List(filter, paginator)
    }

    public GetSent(paginator: Paginator): IPodiumPromise<IEcard[]> {
        const filter: Filter<IEcardsFilter> = new Filter<IEcardsFilter>({status: ECARD_STATUS.SENT})
        return super.List(filter, paginator)
    }

    public GetPending(paginator: Paginator): IPodiumPromise<IEcard[]> {
        const filter: Filter<IEcardsFilter> = new Filter<IEcardsFilter>({status: ECARD_STATUS.PENDING})
        return super.List(filter, paginator)
    }
}
