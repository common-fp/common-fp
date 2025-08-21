import { assertArgIsType } from '@common-fp/shared-internals'

const invokeWith =
  (...args) =>
  fn => {
    assertArgIsType(fn, 'fn', 'function', 'invoke')

    return fn(...args)
  }

export default invokeWith
