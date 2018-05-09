import {IEcardTemplate, IEcardTemplateFilter, IPodiumList, IPodiumPromise, ISettings} from '../../../types/index'
import {Resource} from '../../Podium/Resource'
import {Paginator} from '../../Podium/Paginator'
import {Filter} from '../../Podium/Filter'

export class Templates extends Resource {

    constructor(settings: ISettings) {
        super(settings)
        super.SetResource('ecardTemplate')
    }

    public GetTemplates(categoryId: number, paginator: Paginator): IPodiumPromise<IPodiumList<IEcardTemplate>> {
        let filter: Filter<IEcardTemplateFilter> = new Filter<IEcardTemplateFilter>({category_id: categoryId})
        return super.List(filter, paginator)
    }
}
