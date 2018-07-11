import {API_CODE, IAuthResponse, ILogoutResponse, IPodiumPromise, ISettings} from '../../types'
import {Resource} from '../Podium/Resource'
import {Token} from '../Podium/Token'

export class Auth extends Resource {

    constructor(settings: ISettings) {
        super(settings)
        super.SetResource('login')
    }

    public Login(username: string, password: string, slug: string): IPodiumPromise<number> {
        Token.getInstance().RemoveToken()
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
        Token.getInstance().RemoveToken()
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
        return Token.getInstance().GetToken()
    }

    public SetToken(token: string): string {
        return Token.getInstance().SetToken(token)
    }

    public HasToken(): boolean {
        return Token.getInstance().HasToken()
    }

    public Logout(): IPodiumPromise<ILogoutResponse> {
        super.SetResourceOnce('logout')
        return super.PostRequest<ILogoutResponse>().then((rsp) => {
            Token.getInstance().RemoveToken()
            return rsp
        })
    }
}
