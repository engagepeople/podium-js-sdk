import {IPodiumPromise, IRegion, IRegionFilter} from '../../types'
import {Resource} from '../Podium/Resource'
import {Settings} from '../Podium/Settings'
import {Paginator} from '../Podium/Paginator'
import {Filter} from '../Podium/Filter'

export class Region extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('region')
    }

    // tslint:disable-next-line:max-line-length
    public List<F = IRegionFilter, T = IRegion>(country: string | Filter<F> | Paginator, paginator?: Paginator): IPodiumPromise<T[]>
    // tslint:disable-next-line:no-any
    public List(countryId: string, ...args: any[]): IPodiumPromise<IRegion[]> {
        if (typeof countryId === 'string') {
            const filter = new Filter<IRegionFilter>({ country_id: countryId })
            return super.List<IRegionFilter, IRegion>(filter, ...args)
        }
        return super.List(countryId, ...args)
    }
}
