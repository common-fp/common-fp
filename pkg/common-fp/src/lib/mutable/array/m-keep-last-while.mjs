import { assertArgIsType } from '@common-fp/shared-internals'

const mKeepLastWhile = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'mKeepLastWhile')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mKeepLastWhile')
    let i = anArray.length - 1
    for (; i >= 0; i -= 1) {
      if (!predicate(anArray[i], i, anArray)) break
    }

    anArray.splice(0, i + 1)

    return anArray
  }
}

export default mKeepLastWhile
