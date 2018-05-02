enum DIRECTION {
    TO_UTC,
    TO_API,
}

export class ConvertTime {
    // tslint:disable-next-line:max-line-length
    private APIDateRegEx: RegExp = new RegExp('^\\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\\d|3[0-1]) ([0-1]?\\d|2[0-3]):([0-5]\\d):([0-5]\\d)$')
    private data: object

    constructor(data: object) {
        if (typeof data !== 'object') {
            throw new Error('Convert Time must accept an object')
        }
        this.data = data
    }

    public ToUTC(): object {
        return this.loopNestedObj(this.data, DIRECTION.TO_UTC)
    }

    public ToAPI(): object {
        return this.loopNestedObj(this.data, DIRECTION.TO_API)
    }

    // tslint:disable-next-line:no-any
    private loopNestedObj = (obj: any, method: DIRECTION): any => {
        Object.keys(obj).forEach((key) => {
            if (obj[key] && typeof obj[key] === 'object' && !(obj[key] instanceof Date)) {
                this.loopNestedObj(obj[key], method)
            } else {
                if ((method === DIRECTION.TO_UTC) && (typeof obj[key] === 'string')) {
                    if (this.isAPIDate(obj[key])) {
                        obj[key] = this.StringToUTC(obj[key])
                    }
                }
                if ((method === DIRECTION.TO_API) && (obj[key] instanceof Date)) {
                    obj[key] = this.DateToAPI(obj[key])
                }
            }
        })
        return obj
    }

    private isAPIDate = (key: string): boolean => {
        return this.APIDateRegEx.test(key)
    }

    private StringToUTC = (key: string): Date => {
        return new Date(key.replace(' ', 'T') + 'Z')
    }

    private DateToAPI = (key: Date): string => {
        return `${key.getUTCFullYear()}-
        ${this.strPad(key.getUTCMonth() + 1)}-
        ${this.strPad(key.getUTCDate())}
        ${this.strPad(key.getUTCHours())}:
        ${this.strPad(key.getUTCMinutes())}:
        ${this.strPad(key.getUTCSeconds())}`
    }

    private strPad = (n: number): string => {
        return String('00' + n).slice(-2)
    }
}
