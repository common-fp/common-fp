import { assertArgIsInt, assertArgIsType } from '@common-fp/shared-internals'

const mKeepFirst = numToKeep => {
  assertArgIsInt(numToKeep, 'numToKeep', 'mKeepFirst', { nonNegative: true })

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mKeepFirst')
    anArray.splice(numToKeep, anArray.length - numToKeep)
    return anArray
  }
}

export default mKeepFirst
