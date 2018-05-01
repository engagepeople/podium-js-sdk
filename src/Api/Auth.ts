import {API_CODE, IAuthResponse, ILogoutResponse, IPodiumPromise, ISettings} from '../../types'
import {Resource} from '../Podium/Resource'

export class Auth extends Resource {

    constructor(settings: ISettings) {
        super(settings)
    }

    public Login(username: string, password: string, slug: string): IPodiumPromise<number> {
        super.SetResource('login')
        super.RemoveToken()
        return super.PostRequest<IAuthResponse>({
            password,
            program_slug: slug,
            user_account: username,
        }).then((response) => {
            console.log(response)
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

    public Logout(): IPodiumPromise<ILogoutResponse> {
        super.SetResource('logout')
        return super.PostRequest<ILogoutResponse>().then((rsp) => {
            super.RemoveToken()
            return rsp
        })
    }
}
