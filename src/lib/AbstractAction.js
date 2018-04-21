/* eslint-disable no-underscore-dangle */

import _ from 'lodash'

class ActionCreator {
  constructor(type, payload = _.noop, args = []) {
    this._type = type
    this._payload = payload
    this._args = args

    return this.perform.call(this, args)
  }

  perform(args) {
    return {
      type: this._type,
      payload: this._payload(...args),
    }
  }
}

class AbstractAction {
  constructor(name, options = {}) {
    this._name = name
    this._options = options
  }

  _buildType(kind = '') {
    return [this._namespace, this._name, kind].filter(Boolean).join('/')
  }

  get INIT_TYPE() {
    return this._buildType('INIT')
  }

  get SUCCESS_TYPE() {
    return this._buildType('SUCCESS')
  }

  get FAILURE_TYPE() {
    return this._buildType('FAILURE')
  }

  init = (...args) =>
    new ActionCreator(this.INIT_TYPE, this._options.init, args)

  success = (...args) =>
    new ActionCreator(this.SUCCESS_TYPE, this._options.success, args)

  failure = (...args) =>
    new ActionCreator(this.FAILURE_TYPE, this._options.failure, args)
}

export default AbstractAction
