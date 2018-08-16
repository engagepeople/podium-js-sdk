import {Resource} from '../Podium/Resource'
import {Settings} from '../Podium/Settings'

export class Country extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('country')
    }
}
