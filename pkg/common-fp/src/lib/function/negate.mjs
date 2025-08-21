import { assertArgIsType } from '@common-fp/shared-internals'

const negate = fn => {
  assertArgIsType(fn, 'fn', 'function', 'negate')

  return (...args) => !fn(...args)
}

export default negate
