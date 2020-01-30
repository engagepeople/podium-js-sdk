export interface ISettings {
    endpoint?: string
    locale?: API_LOCALE
    onRequestError?: (error: IPodiumErrorResponse) => void
    version?: number
}

export const enum API_LOCALE {
    EN_AU = 'en-AU',
    EN_CA = 'en-CA',
    EN_US = 'en-US',
    FR_CA = 'fr-CA',
}

export interface IPodiumError {
    data: object
    status: number
    statusText: string
}

export interface IPodiumErrorResponse {
    data: IResponse
    code: string
    message: string
    status: number
    statusText: string
}

export interface IPodiumPromise<T> extends Promise<T> {
    finally?: string
}

export interface IResponse {
    code: API_CODE
    detail: object
    token: string
}

export interface IAuthResponse {
    code: API_CODE
    message: string
    user_id: number
    token: string
}

export interface IJwtAuthResponse {
    auth: {
        access_token: string,
        token_type: string,
        expires_in: number
    }
}

export interface IJwtDecoded {
    iss: string,
    iat: number,
    exp: number,
    nbf: number,
    jti: string,
    sub: number
}

export interface IJwtLogoutRepsonse {
    detail: object,
    token: string,
    apiCode: string,
    trace: string
}

export interface IAPIResponse {
    code: API_CODE
    id: object
    message: string
}

export interface IPodiumSearchList<T> {
    results: T[]
    facets: object
}

export interface IPodiumList<T> {
    readonly current_page: number
    readonly data: T[]
    readonly from: number
    readonly facets?: object
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

export interface ITransactionsFilter {
    date_from: Date
    date_to: Date
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
    status?: ECARD_STATUS
    read?: boolean
    subject?: string
    body?: string
    name?: string
}

export interface IEcardCategory extends IPodiumModel {
    program_id: number
    name: string
    count: number
}

export interface IEcardTemplateFilter {
    category_id?: [number]
    search?: string
}

export interface IEcardTemplate extends IPodiumModel {
    program_id: number
    subject: string
    message: string
    image: IImage
    categories: [IEcardCategory]
}

export interface ITermsAccept extends IPodiumModel {
    choice_selections: [number]
}

export interface ILRGRedirect extends IPodiumModel {
    body: {
        redirect_url: string
        account_id: number
    }
}

export interface ICurrency extends IPodiumModel {
    id: number
    code: string
    name: string
    symbol: string
    precision: string
}

export interface ILedger extends IPodiumModel {
    id: number
    current_balance: number
}

export interface ILedgerTransaction extends IPodiumModel {
    amount?: number
    running_balance?: number
}

export interface IAccountMedium extends IPodiumModel {
    masked_medium_number: string
    name_on_medium: string
}

export interface IAccountTransactionsActions extends IPodiumModel {
    code: string
    name: string
}

export interface IAccountType extends IPodiumModel {
    id: number
    reference_identifier: string
    name: string
    description: string
    currency: [ICurrency]
    is_active: boolean
    created_at: Date
    updated_at: Date
}

export interface IAccountTransactions extends IPodiumModel {
    id: number
    account_id: number
    type: string
    action: string
    masked_medium_number: string
    transaction_amount: number
    transaction_currency_code: string
    transaction_description: string
    transaction_posted_date: Date
    reversal_original_reference_identifier: string
    custom_fields: Array
    ledger_transaction: [ILedgerTransaction]
    processed_at: Date
    reversed_at: Date
    created_at: Date
    updated_at: Date
}

export interface IAccountStatus extends IPodiumModel {
    code: string
    name: string
}

export interface IAccountTravel extends IPodiumModel {
    token: string
}

export interface IAccountTransfer extends IPodiumModel {
    sender_account: [IAccount]
    receiver_account: [IAccount]
    sender_transaction: [IAccountTransactions]
    receiver_transaction: [IAccountTransactions]
}

export interface IAccountTransaction extends IPodiumModel {
    id: number
    reference_identifier: string
    action: string
    transaction_amount: number
    transaction_description: string
    ledger_transaction: [ILedgerTransaction]
    created_at: Date
}

export interface IAccount extends IPodiumModel {
    id: number
    account_type: [IAccountType]
    status: [IAccountStatus]
    reference_identifier: string
    last_balance: number
    last_balance_updated_at: Date
    mediums: [IAccountMedium]
    ledgers: [ILedger]
    created_at: Date
    updated_at: Date
}

export interface IAccountTransactionFilter {
    transaction_date_from: Date
    transaction_date_to: Date
    transaction_action_code: string
}

export interface IAccountDownloadTransactionsFilter {
    transaction_date_from: Date
    transaction_date_to: Date
    format: string
}

export interface IImage extends IPodiumModel {
    height: number
    url: string
    width: number
}

export interface IEcardUser {
    id: number
    first_name: string
    last_name: string
}

export interface IEcard extends IPodiumModel {
    template_id: number
    subject: string
    message: string
    sent: boolean
    read?: boolean
    send_date: Date
    image: IImage
    categories: [IEcardCategory]
    sender: IEcardUser
    recipients: [IEcardUser]
    cc: [IEcardUser]
    collaborators: [IEcardUser]
}

export interface IReward extends IPodiumModel {
    choice_selections: [number]
    incentives: [number]
    notification_map: [number]
    product_assets: [number]
    program_id: number
}

export const enum API_CODE {
    INVALID_TOKEN = 'unauthorized',
    SUCCESS = 'success',
    NO_TERMS = 'NO_TERMS',
    UNACCEPTED_TERMS = 'UNACCEPTED_TERMS',
}

export const enum SORT_DIRECTION {
    ASC = 'asc',
    DESC = 'desc'
}
export const enum SORT_FIELD {
    CREATED_AT = 'created_at'
}

export const enum ECARD_STATUS {
    RECEIVED = 'received',
    SENT = 'sent',
    PENDING = 'pending',
}

export const enum DISCRETIONARY_TRANSACTION_TYPE {
    SENT = 'sent',
    RECIEVED = 'received',
}
export const enum DISCRETIONARY_CAMPAIGN_TYPE {
    ISSUER = 'issuer',
    RECEIVER = 'receiver',
}

export interface IDiscretionaryCampaign {
    id: number
    name: string
    start_at: Date
    end_at: Date
}

export interface IDiscretionaryCampaignParticipant {
    id: number
    first_name: string
    last_name: string
}

export interface IDiscretionaryLedgerTransaction extends IPodiumModel {
    id: number
    description: string
    amount: number
}

export interface IDiscretionaryTransaction extends IPodiumModel {
    id: number
    external_id: string
    description: string
    amount: number
    currency: string
    campaign: IDiscretionaryCampaign
    issuer?: IDiscretionaryCampaignParticipant
    recipient?: IDiscretionaryCampaignParticipant
}

export interface IDiscretionaryTransactionFilter {
    id?: number
    type?: DISCRETIONARY_TRANSACTION_TYPE
    sort_direction?: SORT_DIRECTION
    sort_field?: SORT_FIELD
}

export interface IDiscretionaryCampaignFilter {
    campaign_id?: number
    type?: DISCRETIONARY_CAMPAIGN_TYPE
}

export interface IDiscretionaryResponse {
    code: API_CODE
    message: string
    id: number
}

export interface IDiscretionaryIssuePayload {
    user_id: number
    message?: string
    amount: number
}

export interface IShopSearch {
    currency_id: number
    search?: string
}
