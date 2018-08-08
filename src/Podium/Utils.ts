import axios from 'axios'

export class Utils {

    public RequestsInProgress: string[] = []

    constructor() {
        axios.interceptors.request.use((config) => {
            this.RequestsInProgress.push(config.url)
            return config
        }, (error) => {
            return Promise.reject(error)
        })

        axios.interceptors.response.use((response) => {
            const url = response.config.url
            this.RequestsInProgress.splice(this.RequestsInProgress.findIndex((requestUrl) => requestUrl === url), 1)
            return response
        }, (error) => {
            const url = error.config.url
            this.RequestsInProgress.splice(
                this.RequestsInProgress.findIndex((requestUrl) => requestUrl === url),
                1)
            return Promise.reject(error)
        })
    }

    public isRequesting(): boolean {
        return this.RequestsInProgress.length > 0
    }
}
