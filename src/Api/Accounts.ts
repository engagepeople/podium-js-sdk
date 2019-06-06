import {IAccountActivity, IAccountActivityFilter, IAccountTransfer, IAccountTravel, IPodiumPromise} from '../../types'
import {Resource} from '../Podium/Resource'
import {Filter} from '../Podium/Filter'
import {Paginator} from '../Podium/Paginator'
import {Token} from '../Podium/Token'
import {Settings} from '../Podium/Settings'

export class Accounts extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('member/account')
    }

    /**
     * Based on the user's token, retrieve the JWT token to be used when calling the Travel URL
     * @param {number} AccountID
     * @returns {IPodiumPromise<IAccountTravel>}
     */
    public GetTravelUrl(AccountID: number): IPodiumPromise<IAccountTravel> {
        const payload = {
            token: Token.getInstance().GetToken(),
        }
        return this.GetRequest<IAccountTravel>(AccountID, payload, 'jwt')
    }

    /**
     * Based on the AccountID, retrieve the account's activity (transactions)
     * @param {number} AccountID
     * @param {Filter<IAccountActivityFilter>} filter
     * @param {Paginator} paginator
     * @returns {IPodiumPromise<IAccountActivity[]>}
     * @constructor
     */
    public GetAccountActivity(AccountID: number,
                              filter?: Filter<IAccountActivityFilter>,
                              paginator?: Paginator): IPodiumPromise<IAccountActivity[]> {
        this.SetResourceOnce(`member/account/${AccountID}/activity`)
        return this.List(filter, paginator)
    }

    /**
     * This will facilitate the transfer points from one account to another
     * @param {number} AccountID
     * @param {number} ReceiverAccountID
     * @param {number} Amount
     * @param {string} SenderTransactionDescription
     * @param {string} ReceiverTransactionDescription
     * @returns {IPodiumPromise<IAccountTransfer>}
     * @constructor
     */
    public Transfer(AccountID: number,
                    ReceiverAccountID: number,
                    Amount: number,
                    SenderTransactionDescription?: string,
                    ReceiverTransactionDescription?: string): IPodiumPromise<IAccountTransfer> {

        this.SetResourceOnce(`member/account/${AccountID}/transfer`)

        const payload = {
            amount: Amount,
            receiver_account_id: ReceiverAccountID,
            receiver_transaction_description: (typeof ReceiverTransactionDescription !== 'undefined') ?
                ReceiverTransactionDescription : 'Transfer Points',
            sender_transaction_description: (typeof SenderTransactionDescription !== 'undefined') ?
                SenderTransactionDescription : 'Transfer Points',
        }

        return this.PostRequest<IAccountTransfer>(payload)
    }
}
