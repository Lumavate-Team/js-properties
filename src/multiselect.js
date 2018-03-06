import { BaseProperty } from './base'

export class MultiSelectOptions {
  constructor() {
    this.displayValue = null
    this.value = null
  }
}

export class MultiSelectProperty extends BaseProperty {
  constructor() {
    super()

    this.default = null
    this.options = new MultiSelectOptions()
    this.type = 'multiselect'
  }
}
