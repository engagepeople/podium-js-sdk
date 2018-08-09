import {IPodiumPromise, ITransactions} from '../../types'
import {Resource} from '../Podium/Resource'
import {Paginator} from '../Podium/Paginator'
import {Settings} from '../Podium/Settings'

export class Ledgers extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('ledger')
    }

    public GetTransactions(LedgerID: number, paginator?: Paginator): IPodiumPromise<ITransactions[]> {
        this.SetResourceOnce(`ledger/${LedgerID}/transaction`)
        return this.List(paginator)
    }
}
