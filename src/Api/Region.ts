import {Resource} from '../Podium/Resource'
import {Settings} from '../Podium/Settings'

export class Region extends Resource {

    constructor(settings: Settings) {
        super(settings)
        this.SetResource('region')
    }
}
