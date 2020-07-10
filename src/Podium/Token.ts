const LOCAL_STORAGE_KEY = '__podiumSDK__'

export class Token {

    public static getInstance(): Token {
        return Token.instance
    }

    private static instance: Token = new Token()
    private token: string = null

    constructor() {
        if (Token.instance) {
            throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.')
        }
        Token.instance = this
    }

    public SetToken(token: string): string {
        this.token = token
        if (this.hasSessionStorage()) {
            sessionStorage.setItem(`${LOCAL_STORAGE_KEY}token`, this.token)
            return this.token
        }
        return this.token
    }

    public GetToken(): string {
        if (this.hasSessionStorage()) {
            return sessionStorage.getItem(`${LOCAL_STORAGE_KEY}token`)
        } else {
            return this.token
        }
    }

    public HasToken(): boolean {
        const token = this.GetToken()
        return (typeof token === 'string' && token.length > 0)
    }

    public RemoveToken(): boolean {
        if (this.hasSessionStorage()) {
            sessionStorage.removeItem(`${LOCAL_STORAGE_KEY}token`)
        }
        this.token = null
        return true
    }

    private hasSessionStorage(): boolean {
        return !(typeof sessionStorage === 'undefined' || sessionStorage === null)
    }

}
