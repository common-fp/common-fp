import { assertArgIsType } from '@common-fp/shared-internals'

const findLast = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'findLast')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'findLast')

    const arr = anArray
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      if (predicate(arr[i], i, arr)) return arr[i]
    }
  }
}

export default findLast
