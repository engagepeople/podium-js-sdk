import {ListQuery} from './ListQuery'

export class Filter<F> extends ListQuery {

    private values: F
    private facets: object

    constructor(values?: F) {
        super()
        this.values = values
    }

    public setFacets(facets: object): Filter<F> {
        this.facets = facets
        return this
    }

    public getFacets(): object {
        return this.facets
    }

    public setValues(values: F): Filter<F> {
        this.values = values
        return this
    }

    public getValues(): F {
        return this.values
    }

    public toParams(): object | F {
        if (super.isLegacyMode()) {
            return {
                filter: this.values,
            }
        } else {
            return this.values
        }
    }
}
