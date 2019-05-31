import {IAccountTravel, IPodiumPromise} from '../../types'
import {Resource} from '../Podium/Resource'
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
}
