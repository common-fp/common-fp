import { assertArgIsType } from '@common-fp/shared-internals'

const mOrder = compareFn => {
  assertArgIsType(compareFn, 'compareFn', 'function', 'mOrder')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mOrder')

    return anArray.sort(compareFn)
  }
}

export default mOrder
