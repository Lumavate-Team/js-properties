import { BaseProperty } from './base'

export class Component {
  constructor() {
    this.category = null
    this.displayName = null,
    this.icon = null,
    this.label = null,
    this.properties = []
    this.section = null,
    this.type = null
  }
}

export class ComponentOptions {
  constructor() {
    this.categories = []
    this.components = []
  }
}

export class ComponentProperty extends BaseProperty {
  constructor() {
    super()

    this.default = { componentType: null }
    this.options = new ComponentOptions()
    this.type = 'component'
  }
}

export class ComponentsProperty extends ComponentProperty {
  constructor() {
    super()

    this.default = []
    this.type = 'components'
  }
}
