import { API_CODE, IAPIResponse, IAuthResponse, IPodiumPromise, ISettings} from '../../types'
import {Resource} from '../Podium/Resource'

export class Auth extends Resource {

    constructor(settings: ISettings) {
        super(settings)
        super.SetResource('login')
    }

    public Login(username: string, password: string, slug: string): IPodiumPromise<number> {
        super.RemoveToken()
        return super.PostRequest<IAuthResponse>({
            password,
            program_slug: slug,
            user_account: username,
        }).then((response) => {
            if (response.code === API_CODE.SUCCESS) {
                this.SetToken(response.token)
                return response.user_id
            }
        })
    }

    public SSO(token: string): IPodiumPromise<number> {
        super.SetResourceOnce('authenticate')
        super.RemoveToken()
        return super.PostRequest<IAuthResponse>({
            token,
            type: 'sso',
        }).then((response) => {
            if (response.code === API_CODE.SUCCESS) {
                this.SetToken(response.token)
                return response.user_id
            }
        })
    }

    public GetToken(): string {
        return super.GetToken()
    }

    public SetToken(token: string): string {
        return super.SetToken(token)
    }

    public HasToken(): boolean {
        return super.HasToken()
    }

    public Logout(): IPodiumPromise<IAPIResponse> {
        super.SetResourceOnce('logout')
        return super.PostRequest<IAPIResponse>().then((rsp) => {
            super.RemoveToken()
            return rsp
        })
    }
}
