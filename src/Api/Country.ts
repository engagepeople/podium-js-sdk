import {ICountry, ICountryFilter, IPodiumPromise} from '../../types'
import {Resource} from '../Podium/Resource'
import {Settings} from '../Podium/Settings'
import {Paginator} from '../Podium/Paginator'
import {Filter} from '../Podium/Filter'

export class Country extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('country')
    }

    // tslint:disable-next-line:max-line-length
    public List<F = ICountryFilter, T = ICountry>(program: string | Filter<F> | Paginator, paginator?: Paginator): IPodiumPromise<T[]>
    // tslint:disable-next-line:no-any
    public List(programSlug: string, ...args: any[]): IPodiumPromise<ICountry[]> {
        if (typeof programSlug === 'string') {
            const filter = new Filter<ICountryFilter>({ program_slug: programSlug })
            return super.List<ICountryFilter, ICountry>(filter, ...args)
        }
        return super.List(programSlug, ...args)
    }
}
