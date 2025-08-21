import { assertArgIsType } from '@common-fp/shared-internals'

const mDiscardFirstWhile = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'mDiscardFirstWhile')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mDiscardFirstWhile')
    let i = 0
    for (; i < anArray.length; i += 1) {
      if (!predicate(anArray[i], i, anArray)) break
    }

    anArray.splice(0, i)

    return anArray
  }
}

export default mDiscardFirstWhile
