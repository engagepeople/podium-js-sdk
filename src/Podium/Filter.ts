import {ListQuery} from './ListQuery'

export class Filter<F> extends ListQuery {

    private values: F
    private facets: object
    // tslint:disable-next-line:no-any
    private facetQuery: any

    constructor(values?: F) {
        super()
        this.values = values
    }

    public setFacetQuery(facets: object): Filter<F> {
        this.facetQuery = facets
        return this
    }

    public getFacetQuery(): object {
        // tslint:disable-next-line:no-any
        const build: any = {}
        for (const property in this.facetQuery) {
            if (this.facetQuery.hasOwnProperty(property)) {
                if (!(this.facetQuery[property] === null || this.facetQuery[property].length === 0)) {
                    build[property] = this.facetQuery[property]
                }
            }
        }
        return build
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
        // tslint:disable-next-line:no-any
        const build: any = this.getValues()

        if (this.getFacetQuery()) {
            build.facets = this.getFacetQuery()
        }

        if (super.isLegacyMode()) {
            return {
                filter: build,
            }
        } else {
            return build
        }
    }
}
