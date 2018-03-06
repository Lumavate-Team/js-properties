import { BaseProperty } from './base'

export class ToggleProperty extends BaseProperty {
  constructor() {
    super()

    this.default = false
    this.type = 'toggle'
  }
}
