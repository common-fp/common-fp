import { assertArgIsInt, assertArgIsType } from '@common-fp/shared-internals'

const mDiscardLast = numToDiscard => {
  assertArgIsInt(numToDiscard, 'numToDiscard', 'mDiscardLast', {
    nonNegative: true,
  })

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mDiscardLast')
    anArray.splice(Math.max(0, anArray.length - numToDiscard), numToDiscard)
    return anArray
  }
}

export default mDiscardLast
