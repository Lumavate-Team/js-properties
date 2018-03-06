import { BaseProperty } from './base'

export class CheckboxProperty extends BaseProperty {
  constructor() {
    super()

    this.default = false
    this.type = 'checkbox'
  }
}
