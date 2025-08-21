import { assertArgIsType } from '@common-fp/shared-internals'

const mDiscardLastWhile = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'mDiscardLastWhile')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mDiscardLastWhile')
    let i = anArray.length - 1
    for (; i >= 0; i -= 1) {
      if (!predicate(anArray[i], i, anArray)) break
    }

    const start = i + 1
    anArray.splice(start, anArray.length - start)

    return anArray
  }
}

export default mDiscardLastWhile
