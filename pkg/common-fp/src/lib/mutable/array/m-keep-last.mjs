import { assertArgIsInt, assertArgIsType } from '@common-fp/shared-internals'

const mKeepLast = numToKeep => {
  assertArgIsInt(numToKeep, 'numToKeep', 'mKeepLast', { nonNegative: true })

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mKeepLast')
    anArray.splice(0, anArray.length - numToKeep)
    return anArray
  }
}

export default mKeepLast
