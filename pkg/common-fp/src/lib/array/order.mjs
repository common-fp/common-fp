import { assertArgIsType } from '@common-fp/shared-internals'

const order = compareFn => {
  assertArgIsType(compareFn, 'compareFn', 'function', 'order')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'order')

    return [...anArray].sort(compareFn)
  }
}

export default order
