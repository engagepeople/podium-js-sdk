export namespace Podium {
    export interface PodiumSDK {
        setting: Settings;
        Paginator: Paginator;
        auth: Auth;
        lrg: LRG;
        incentive: Incentive;
        profile: Profile;
        terms: Terms;
    }

    export interface Auth {
        constructor(settings: Settings)
        login(login: string, password: string, programId: number): Promise;
        basicAuth(token: string): void;
        logout(token: string): Promise;
    }

    export interface Incentive {
        constructor(settings: Settings)
        getBalance(): Promise;
        getTransactions(paginator: Paginator): Promise;
    }

    export interface LRG {
        constructor(settings: Settings)
        get(redirectUrl: string): Promise;
        redirect(redirectUrl: string): boolean;
    }

    export interface Profile {
        constructor(settings: Settings)
        get(redirectUrl: string): Promise;
    }

    export interface Terms {
        constructor(settings: Settings)
        get(redirectUrl: string): Promise;
        accept(id: number): Promise;
    }

    export interface Paginator {
        constructor(settings: Settings)
        setContext(ctx: object): Paginator;
        setPage(page: number): Paginator;
        setPerPage(perPage: number): Paginator;
        setSortField(sortField: number): Paginator;
        setSortDirection(direction: SORT_DIRECTION): Paginator;
        setSortDesc(direction: boolean): Paginator;
        toParams(): {
            page: number
            count: number
            sort_field: string
            sort_direction: SORT_DIRECTION
        };
    }

    export interface Settings {
        endpoint: string;
        catchError: Function;
        perPage: number;
        sortField: string;
        sortDirection: SORT_DIRECTION;
    }

    export enum SORT_DIRECTION {
        ASC = 'asc',
        DESC = 'desc'
    }
}