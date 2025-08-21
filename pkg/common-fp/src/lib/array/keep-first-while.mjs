import { assertArgIsType } from '@common-fp/shared-internals'

const keepFirstWhile = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'keepFirstWhile')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'keepFirstWhile')
    let i = 0

    for (; i < anArray.length; i += 1) {
      if (!predicate(anArray[i], i, anArray)) break
    }

    return anArray.slice(0, i)
  }
}

export default keepFirstWhile
