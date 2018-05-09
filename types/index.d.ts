export interface ISettings {
    endpoint: string
}

export interface IPodiumError {
    data: object
    status: number
    statusText: string
}

export interface IPodiumErrorResponse {
    data: IResponse
    status: number
    statusText: string
}

export interface IPodiumPromise<T> extends Promise<T> {
    finally?: string
}

export interface IResponse {
    apiCode: API_CODE
    detail: object
    token: string
}

export interface IAuthResponse {
    code: API_CODE
    message: string
    user_id: number
    token: string
}

export interface ILogoutResponse {
    code: API_CODE
    id: object
    message: string
}

export interface IPodiumList<T> {
    readonly current_page: number
    readonly data: T[]
    readonly last_page: number
    readonly per_page: number
    readonly to: number
    readonly total: number
}

export interface IPodiumModel {
    readonly id: number
    readonly created_at: Date
    readonly updated_at?: Date
}

export interface ITransactions extends IPodiumModel {
    amount: number
    description: string
    running_balance: number
    link_type: number
    link_id: number
}

export interface IUser extends IPodiumModel {
    first_name: string
    last_name: string
    user_account: string
    email: string
}

export interface ICurrency extends IPodiumModel {
    code: string
    country_alpha_2_code: string
    increment: string
    is_virtual: boolean
    name: string
    numeric_code: string
    precision: number
    symbol: string
}

export interface IFlex extends IPodiumModel {
    program_id: number
    rules: IFlexRule[]
}

export interface IFlexRule {
    id: number
    name: string
    reward_id: number
    slug: string
}

export interface IUserFilter {
    customer_id?: number
    search?: string
    email?: string
    group_ids?: number
    only_managers?: boolean
}

export interface IEcardsFilter {
    type?: ECARD_STATUS,
    show?: string,
    searchInfo?: string
}

export interface IEcardCategory extends IPodiumModel {
    program_id: number
    group_id: number
    name: string
}

export interface IEcardTemplateFilter {
    category_id?: number
    searchInfo?: string
}

export interface IEcardTemplate extends IPodiumModel {
    program_id: number
    subject: string
    message: string
    tags: [string]
    image: IImage
    categories: [IEcardCategory]
}

export interface ITermsAccept extends IPodiumModel {
    choice_selections: [number]
}

export interface ILRGRedirect extends IPodiumModel {
    body: {
        redirect_url: string,
    }
}

export interface IImage extends IPodiumModel {
    file_name: string
    height: number
    type: string
    url: string
    width: number
}

export interface IEcardUser {
    id: number
    first_name: string
    last_name: string
}

export interface IEcard extends IPodiumModel {
    template_id: number,
    subject: string,
    message: string,
    sent: boolean,
    read?: boolean,
    send_date: string,
    template: ITemplate,
    image: IImage,
    categories: [IEcardCategory]
    sender: IEcardUser,
    recipients: [IEcardUser],
    cc: [IEcardUser],
    collaborators: [IEcardUser]
}

export interface ITemplate extends IPodiumModel {
    group_id: number
    subject: string
    message: string
    tags: [string]
}

export interface IReward extends IPodiumModel {
    choice_selections: [number]
    incentives: [number]
    notification_map: [number]
    product_assets: [number]
    program_id: number
}

export const enum API_CODE {
    INVALID_TOKEN = 'INVALID_TOKEN',
    SUCCESS = 'success',
    NO_TERMS = 'NO_TERMS',
    UNACCEPTED_TERMS = 'UNACCEPTED_TERMS',
}

export const enum SORT_DIRECTION {
    ASC = 'asc',
    DESC = 'desc',
}
export const enum SORT_FIELD {
    CREATED_AT = 'created_at',
}

export const enum ECARD_STATUS {
    RECEIVED = 'received',
    SENT = 'sent',
    PENDING = 'pending',
}
