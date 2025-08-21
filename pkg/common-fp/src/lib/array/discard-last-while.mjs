import { assertArgIsType } from '@common-fp/shared-internals'

const discardLastWhile = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'discardLastWhile')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'discardLastWhile')
    let i = anArray.length - 1
    for (; i >= 0; i -= 1) {
      if (!predicate(anArray[i], i, anArray)) break
    }

    return anArray.slice(0, i + 1)
  }
}

export default discardLastWhile
