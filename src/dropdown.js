import { BaseProperty } from './base'

export class DropdownProperty extends BaseProperty {
  constructor() {
    super()

    this.default = null
    this.options = {}
    this.type = 'dropdown'
  }
}
