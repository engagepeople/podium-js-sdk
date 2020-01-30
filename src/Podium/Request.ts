import axios, {AxiosError, AxiosRequestConfig} from 'axios'
import {
    API_CODE,
    IPodiumErrorResponse,
    IPodiumList,
    IPodiumPromise,
    IResponse,
} from '../../types'
import {ConvertTime} from './ConvertTime'
import {Filter} from './Filter'
import {Token} from './Token'
import {Paginator} from './Paginator'
import {Settings} from './Settings'

export class Request {
    private static parseError(error: AxiosError): IPodiumErrorResponse {
        const message =
            (typeof error.response.data === 'object' &&
                (error.response.data.message
                    || (error.response.data.detail ||
                        (Array.isArray(error.response.data.detail) &&
                            Object.values(error.response.data.detail)
                                .map((errorDetail: string[]) =>
                                    (typeof errorDetail === 'string' && errorDetail) || errorDetail[0])
                        ))
                    || Object.values(error.response.data)[0])
            ) || error.response
        return {
            code: error.response.data.code,
            data: error.response.data as IResponse,
            message,
            status: error.response.status,
            statusText: error.response.statusText,
        }
    }

    protected Legacy: boolean = false
    protected ResourceOnce: string
    protected Resource: string
    private settings: Settings

    constructor(settings: Settings) {
        this.settings = settings
    }

    protected GetRequest<T>(id?: number | string, params?: object, postfix?: string): IPodiumPromise<T> {
        const request: AxiosRequestConfig = {
            method: 'get',
            params,
        }
        let url = `${this.makeURL()}`
        if (id) {
            url = `${url}/${id}`
        }
        if (postfix) {
            url += `/${postfix}`
        }
        return this.Request(request, url)
    }

    protected DeleteRequest<T>(id: number | string, postfix?: string): IPodiumPromise<T> {
        const request: AxiosRequestConfig = {
            method: 'delete',
        }
        return this.Request(request, this.makeURL(id, postfix))
    }

    protected ListRequest<F, T>(filter?: Filter<F>,
                                paginator?: Paginator,
                                postfix?: string): IPodiumPromise<IPodiumList<T>> {
        let params = {}
        if (filter instanceof Filter) {
            filter.setLegacyMode(this.Legacy)
            params = Object.assign(params, filter.toParams())
        }
        if (paginator instanceof Paginator) {
            paginator.setLegacyMode(this.Legacy)
            params = Object.assign(params, paginator.toParams())
        }

        const request: AxiosRequestConfig = {
            method: 'get',
            params,
        }
        return this.Request(request, this.makeURL(null, postfix))
    }

    protected PostRequest<T>(data: object = {}, postfix?: string): IPodiumPromise<T> {
        const url = this.makeURL(null, postfix)
        const request: AxiosRequestConfig = {
            data,
            method: 'post',
        }

        // Note: Sorry for the hack code. Time crunch
        if (url.indexOf('download') >= 0) {
            request.responseType = 'arraybuffer'
        }

        return this.Request(request, url)
    }

    protected UpdateRequest<T>(id: number | string, data: object, postfix?: string): IPodiumPromise<T> {
        const request: AxiosRequestConfig = {
            data,
            method: 'put',
        }
        return this.Request(request, this.makeURL(id, postfix))
    }

    protected Request<T>(config: AxiosRequestConfig,
                         url?: string,
                         id?: number | string,
                         postfix?: string): IPodiumPromise<T> {
        if (!url) {
            url = this.makeURL(id, postfix)
        }

        if (typeof config.data === 'object') {
            const convertTimeToAPI = new ConvertTime(config.data)
            config.data = convertTimeToAPI.ToAPI()
        }

        config = Object.assign({
            headers: this.makeHeaders(),
        }, config)

        if (url.indexOf('download') < 0) {
            config.transformResponse = [(data: string) => {
                const convertTimeToUTC = new ConvertTime(JSON.parse(data))
                return convertTimeToUTC.ToUTC()
            }]
        }

        return new Promise((resolve, reject) => {
            return axios(url, config)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    const parsedError = Request.parseError(error)
                    if ((parsedError.status === 401) && (parsedError.data.code === API_CODE.INVALID_TOKEN)) {
                        Token.getInstance().RemoveToken()
                    }
                    this.onRequestError(parsedError)
                    reject(parsedError)
                })
        })
    }

    protected makeURL(id?: number | string, postfix?: string): string {
        let endpoint = this.settings.getEndpoint()
        if (!endpoint.endsWith('/')) {
            endpoint += '/'
        }
        const version = this.settings.getVersion()
        const resource = this.ResourceOnce || this.Resource
        this.ResourceOnce = null

        let build = `${endpoint}v${version}/${resource}`
        if (id) {
            build += `/${id}`
        }
        if (postfix) {
            build += `/${postfix}`
        }
        return build
    }

    private GetLocale(): string {
        return this.settings.getLocale()
    }

    private makeHeaders(): object {
        if (Token.getInstance().GetToken()) {
            return {
                'Accept-Language': this.GetLocale(),
                'Authorization': Token.getInstance().GetToken(),
            }
        }
    }

    private onRequestError(errorData: IPodiumErrorResponse): void {
        if (typeof this.settings.getOnRequestError() === 'function') {
            this.settings.getOnRequestError()(errorData)
        }
    }

}
