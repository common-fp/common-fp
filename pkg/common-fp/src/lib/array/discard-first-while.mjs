import { assertArgIsType } from '@common-fp/shared-internals'

const discardFirstWhile = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'discardFirstWhile')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'discardFirstWhile')
    let i = 0

    for (; i < anArray.length; i += 1) {
      if (!predicate(anArray[i], i, anArray)) break
    }

    return anArray.slice(i)
  }
}

export default discardFirstWhile
