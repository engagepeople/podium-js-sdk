import {API_CODE, IAPIResponse, IAuthResponse, IPodiumPromise} from '../../types'
import {Resource} from '../Podium/Resource'
import {Token} from '../Podium/Token'
import {Settings} from '../Podium/Settings'

export class Auth extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('login')
    }

    public Login(username: string, password: string, slug: string): IPodiumPromise<number> {
        Token.getInstance().RemoveToken()
        return this.PostRequest<IAuthResponse>({
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
        this.SetResourceOnce('authenticate')
        Token.getInstance().RemoveToken()
        return this.PostRequest<IAuthResponse>({
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

    public Logout(): IPodiumPromise<IAPIResponse> {
        this.SetResourceOnce('logout')
        return this.PostRequest<IAPIResponse>().then((rsp) => {
            Token.getInstance().RemoveToken()
            return rsp
        })
    }
}
