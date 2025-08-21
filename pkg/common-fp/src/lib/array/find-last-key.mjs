import { assertArgIsType } from '@common-fp/shared-internals'

const findLastKey = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'findLastKey')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'findLastKey')

    const arr = anArray
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      if (predicate(arr[i], i, arr)) return i
    }
  }
}

export default findLastKey
