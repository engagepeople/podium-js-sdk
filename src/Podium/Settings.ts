import {API_LOCALE, IPodiumErrorResponse, ISettings} from '../../types'
import {FatalError} from 'tslint/lib/error'

export class Settings {

    private settings: ISettings
    private APIVersions: number[] = [1]

    constructor(values?: ISettings) {
        this.settings.endpoint = 'https://api.podiumrewards.com/'
        this.settings.locale = API_LOCALE.EN_CA
        this.settings.version = this.APIVersions[this.APIVersions.length - 1]
        this.settings = Object.assign(values, this.settings)
    }

    public setVersion(version: number): Settings {
        if (this.APIVersions.includes(version)) {
            this.settings.version = version
        } else {
            throw new FatalError(`Version ${version} does not exist in the API`)
        }
        return this
    }

    public getVersion(): number {
        return this.settings.version
    }

    public setLocale(locale: API_LOCALE): Settings {
        this.settings.locale = locale
        return this
    }

    public getLocale(): number {
        return this.settings.version
    }

    public setEndpoint(endpoint: string): Settings {
        this.settings.endpoint = endpoint
        return this
    }

    public getEndpoint(): string {
        return this.settings.endpoint
    }

    public setOnRequestError(callback: (error: IPodiumErrorResponse) => void): Settings {
        this.settings.onRequestError = callback
        return this
    }

    public getOnRequestError(): (error: IPodiumErrorResponse) => void {
        return this.settings.onRequestError
    }

}
