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
        if (this.hasLocalStorage()) {
            localStorage.setItem(`${LOCAL_STORAGE_KEY}token`, this.token)
            return this.token
        }
        return this.token
    }

    public GetToken(): string {
        if (this.hasLocalStorage()) {
            return localStorage.getItem(`${LOCAL_STORAGE_KEY}token`)
        } else {
            return this.token
        }
    }

    public HasToken(): boolean {
        const token = this.GetToken()
        return (typeof token === 'string' && token.length > 0)
    }

    public RemoveToken(): boolean {
        if (this.hasLocalStorage()) {
            localStorage.removeItem(`${LOCAL_STORAGE_KEY}token`)
        }
        this.token = null
        return true
    }

    private hasLocalStorage(): boolean {
        return !(typeof localStorage === 'undefined' || localStorage === null)
    }

}
