import { assertArgIsType } from '@common-fp/shared-internals'

const invokeWith =
  (...args) =>
  fn => {
    assertArgIsType(fn, 'fn', 'function', 'invokeWith')

    return fn(...args)
  }

export default invokeWith
