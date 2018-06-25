import {
    DISCRETIONARY_TRANSACTION_TYPE,
    IDiscretionaryCampaign,
    IDiscretionaryCampaignFilter,
    IDiscretionaryIssuePayload,
    IDiscretionaryLedgerTransaction,
    IDiscretionaryResponse,
    IDiscretionaryTransaction,
    IDiscretionaryTransactionFilter,
    IPodiumPromise,
    ISettings,
    SORT_DIRECTION,
    SORT_FIELD,
} from '../../types'
import {Resource} from '../Podium/Resource'
import {Paginator} from '../Podium/Paginator'
import {Filter} from '../Podium/Filter'

export class Discretionary extends Resource {

    constructor(settings: ISettings) {
        super(settings)
    }

    // Retrieves single campaign.
    public GetCampaign(campaignId: number): IPodiumPromise<IDiscretionaryCampaign> {
        super.SetResource(`campaign/discretionary/${campaignId}`)
        return super.Get()
    }

    // Retrieves all campaigns that are associated with the authenticated User.
    public GetCampaigns(
        filter?: Filter<IDiscretionaryCampaignFilter>,
        paginator?: Paginator): IPodiumPromise<IDiscretionaryCampaign[]> {
        super.SetResource('campaign/discretionary')
        return super.List(filter, paginator)
    }

    // Retrieves all transactions the authenticated user made on all the Discretionary Campaign.
    public GetTransactions(transactionType?: DISCRETIONARY_TRANSACTION_TYPE,
                           paginator?: Paginator): IPodiumPromise<IDiscretionaryTransaction[]> {
        super.SetResource('campaign/discretionary/transactions')
        if (transactionType) {
            const filter: Filter<IDiscretionaryTransactionFilter> =
                new Filter<IDiscretionaryTransactionFilter>({
                    sort_direction: SORT_DIRECTION.DESC,
                    sort_field: SORT_FIELD.CREATED_AT,
                    type: transactionType,
                })
            return super.List(filter, paginator)
        }

        return super.List(paginator)
    }

    // Retrieves campaign ledger
    public GetCampaignLedger(campaignId: number, paginator?: Paginator):
    IPodiumPromise<IDiscretionaryLedgerTransaction[]> {
        super.SetResource(`campaign/discretionary/ledger`)
        const filter: Filter<IDiscretionaryCampaignFilter> =
            new Filter<IDiscretionaryCampaignFilter>({campaign_id: campaignId})
        return super.List(filter)
    }

    // Retrieves a single transaction that's associated with the authenticated User.
    public GetTransaction(transactionId: number): IPodiumPromise<IDiscretionaryTransaction> {
        super.SetResource(`campaign/discretionary/transactions/${transactionId}`)
        return super.Get()
    }

    // Send funds to a user
    public Issue(campaignId: number, payload: IDiscretionaryIssuePayload): IPodiumPromise<IDiscretionaryResponse> {
        super.SetResource(`campaign/discretionary/${campaignId}`)
        return super.PostRequest<IDiscretionaryResponse>(payload)
    }

    // Updates the read status on the Discretionary Campaign Transaction
    public UpdateTransactionReadStatus(transactionId: number, read: boolean): IPodiumPromise<IDiscretionaryResponse> {
        super.SetResource(`campaign/discretionary/transactions`)
        return super.Update(transactionId, {read})
    }

}
