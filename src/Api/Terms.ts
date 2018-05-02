import {IPodiumPromise, ISettings, ITermsAccept} from '../../types'
import {Resource} from '../Podium/Resource'

export class Terms extends Resource {

    constructor(settings: ISettings) {
        super(settings)
        super.SetResource('terms')
    }

    public Accept(termsId: number): IPodiumPromise<ITermsAccept> {
        return super.PostRequest<ITermsAccept>({
            terms_id : termsId,
        })
    }

}
