import {IPodiumList, IPodiumPromise, ISettings, ITermsAccept, ITransactions} from '../../types'
import {Resource} from '../Podium/Resource'
import {Paginator} from '../Podium/Paginator'

export class Ledgers extends Resource {

    constructor(settings: ISettings) {
        super(settings)
        super.SetResource('ledger')
    }

    public GetTransactions(LedgerID: number, paginator?: Paginator): IPodiumPromise<IPodiumList<ITransactions>> {
        super.SetResource(`ledger/${LedgerID}/transaction`)
        return super.List(paginator)
    }
}
