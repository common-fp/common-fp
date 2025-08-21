import { assertArgIsType } from '@common-fp/shared-internals'

const keepLastWhile = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'keepLastWhile')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'keepLastWhile')
    let i = anArray.length - 1

    for (; i >= 0; i -= 1) {
      if (!predicate(anArray[i], i, anArray)) break
    }

    return anArray.slice(i + 1)
  }
}

export default keepLastWhile
