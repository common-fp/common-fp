import { assertArgIsType } from '@common-fp/shared-internals'

const mKeepFirstWhile = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'mKeepFirstWhile')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mKeepFirstWhile')
    let i = 0
    for (; i < anArray.length; i += 1) {
      if (!predicate(anArray[i], i, anArray)) break
    }

    anArray.splice(i, anArray.length - i)

    return anArray
  }
}

export default mKeepFirstWhile
