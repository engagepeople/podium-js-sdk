import { ILRGRedirect, IPodiumPromise } from "../../types";
import { Resource } from "../Podium/Resource";
import { Settings } from "../Podium/Settings";

export class LRG extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('lrg/session')
    }

    public GetUrl(data: {
        redirectUrl: string;
        accountId: number;
    }): IPodiumPromise<ILRGRedirect> {
        return this.PostRequest<ILRGRedirect>({
            account_id: data.accountId,
            website_back: data.redirectUrl,
        })
    }

    public Redirect(data: { redirectUrl: string; accountId: number }): boolean {
        if (!(typeof window === 'undefined' || window === null)) {
            this.GetUrl(data).then((response) => {
                window.location.replace(response.body.redirect_url)
            })
            return true
        } else {
            return false
        }
    }
}
