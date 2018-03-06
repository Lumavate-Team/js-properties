import { BaseProperty } from './base'

export class ColorProperty extends BaseProperty {
  constructor() {
    super()

    this.default = null
    this.type = 'color'
  }
}
