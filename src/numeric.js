import { BaseProperty } from './base'

export class NumericOptions {
  constructor() {
    this.min = null
    this.max = null
  }
}

export class NumericProperty extends BaseProperty {
  constructor() {
    super()

    this.default = new NumericOptions()
    this.type = 'numeric'
  }
}
