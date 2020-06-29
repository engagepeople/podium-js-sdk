import {
    API_CODE,
    IAPIResponse,
    IAuthResponse,
    IJwtAuthResponse,
    IJwtDecoded,
    IJwtLogoutRepsonse,
    IJwtSSOAuthResponse,
    IPodiumPromise } from '../../types'
import {Resource} from '../Podium/Resource'
import {Token} from '../Podium/Token'
import {Settings} from '../Podium/Settings'

export class Auth extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('auth/login')
    }

    public Login(username: string, password: string, slug: string): IPodiumPromise<number> {
        Token.getInstance().RemoveToken()
        return this.PostRequest<IJwtAuthResponse>({
            password,
            program_slug: slug,
            type: 'member',
            user_account: username,
        }).then((response) => {
            if (response.auth.expires_in > 0) {
                this.SetToken(`${response.auth.token_type} ${response.auth.access_token}`)
                return response.auth.expires_in
            }
        })
    }

    public LoginAs(userAccount: string, token: string, slug: string): IPodiumPromise<number> {
        this.SetResourceOnce(`program/${slug}/login-as`)
        const payload = {
            token,
            user_account: userAccount,
        }
        return this.GetRequest<IJwtAuthResponse>(null, payload).then((response) => {
            if (response.auth.expires_in > 0) {
                this.SetToken(`${response.auth.token_type} ${response.auth.access_token}`)
                return response.auth.expires_in
            }
        })
    }

    public SSO(token: string): IPodiumPromise<number> {
        this.SetResourceOnce('authenticate')
        Token.getInstance().RemoveToken()
        return this.PostRequest<IJwtSSOAuthResponse>({
            token,
            type: 'sso',
        }).then((response) => {
            if (response.expires_in > 0) {
                this.SetToken(`${response.token_type} ${response.token}`)
                return response.expires_in
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

    public Logout(): IPodiumPromise<IJwtLogoutRepsonse> {
        this.SetResourceOnce('auth/logout')
        return this.PostRequest<IJwtLogoutRepsonse>().then((rsp) => {
            Token.getInstance().RemoveToken()
            return rsp
        })
    }

    public RefreshToken(): IPodiumPromise<number> {
        this.SetResourceOnce('auth/refresh')
        return this.PostRequest<IJwtAuthResponse>().then((response) => {
            if (response.auth.expires_in > 0) {
                this.SetToken(`${response.auth.token_type} ${response.auth.access_token}`)
                return response.auth.expires_in
            }
        })
    }
}
