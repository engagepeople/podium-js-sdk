import axios from 'axios'

export class Utils {

    public RequestsInProgress: string[] = []
    public isRequesting: boolean = false

    constructor() {
        const checkIfStillRequesting = () => !this.RequestsInProgress.length && (this.isRequesting = false)

        axios.interceptors.request.use((config) => {
            this.RequestsInProgress.push(config.url)
            this.isRequesting = true
            return config
        }, (error) => {
            return Promise.reject(error)
        })

        axios.interceptors.response.use((response) => {
            const url = response.config.url
            this.RequestsInProgress.splice(this.RequestsInProgress.indexOf(url), 1)
            checkIfStillRequesting()
            return response
        }, (error) => {
            const url = error.config.url
            this.RequestsInProgress.splice(this.RequestsInProgress.indexOf(url), 1)
            checkIfStillRequesting()
            return Promise.reject(error)
        })
    }
}
