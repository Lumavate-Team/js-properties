import { BaseProperty } from './base'

export class TextOptions {
  constructor() {
    this.readonly = false
    this.rows = 0
  }
}

export class TextProperty extends BaseProperty {
  constructor() {
    super()

    this.default = null
    this.options = new TextOptions()
    this.type = 'text'
  }
}

export class TranslatedTextProperty extends TextProperty {
  constructor() {
    super()

    this.type = 'translated-text'
  }
}
