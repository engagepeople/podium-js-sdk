import {ECARD_STATUS, IEcard, IEcardsFilter, IPodiumList, IPodiumPromise, ISettings} from '../../../types/index'
import {Resource} from '../../Podium/Resource'
import {Paginator} from '../../Podium/Paginator'
import {Filter} from '../../Podium/Filter'

export class Ecards extends Resource {

    constructor(settings: ISettings) {
        super(settings)
        super.SetResource('ecard')
    }

    public GetReceived(paginator: Paginator): IPodiumPromise<IPodiumList<IEcard>> {
        const filter: Filter<IEcardsFilter> = new Filter<IEcardsFilter>({status: ECARD_STATUS.RECEIVED})
        return super.List(filter, paginator)
    }

    public GetSent(paginator: Paginator): IPodiumPromise<IPodiumList<IEcard>> {
        const filter: Filter<IEcardsFilter> = new Filter<IEcardsFilter>({status: ECARD_STATUS.SENT})
        return super.List(filter, paginator)
    }

    public GetPending(paginator: Paginator): IPodiumPromise<IPodiumList<IEcard>> {
        const filter: Filter<IEcardsFilter> = new Filter<IEcardsFilter>({status: ECARD_STATUS.PENDING})
        return super.List(filter, paginator)
    }
}
