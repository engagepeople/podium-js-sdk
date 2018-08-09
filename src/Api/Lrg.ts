import {ILRGRedirect, IPodiumPromise} from '../../types'
import {Resource} from '../Podium/Resource'
import {Settings} from '../Podium/Settings'

export class LRG extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('lrg/session')
    }

    public GetUrl(redirectUrl: string): IPodiumPromise<ILRGRedirect> {
        return this.PostRequest<ILRGRedirect>({
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
