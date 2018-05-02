import {ILRGRedirect, IPodiumPromise, ISettings} from '../../types'
import {Resource} from '../Podium/Resource'

export class LRG extends Resource {

    constructor(settings: ISettings) {
        super(settings)
        super.SetResource('lrg/session')
    }

    public GetUrl(redirectUrl: string): IPodiumPromise<ILRGRedirect> {
        return super.PostRequest<ILRGRedirect>({
            website_back : redirectUrl,
        })
    }

    public Redirect(redirectUrl: string): boolean {
        if (!(typeof window === 'undefined' || window === null)) {
            this.GetUrl(redirectUrl).then((response) => {
                window.location.replace(response.body.redirect_url)
            })
            return true
        } else {
            return false
        }
    }

}
