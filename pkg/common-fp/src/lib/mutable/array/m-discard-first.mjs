import { assertArgIsInt, assertArgIsType } from '@common-fp/shared-internals'

const mDiscardFirst = num => {
  assertArgIsInt(num, 'num', 'mDiscardFirst', {
    nonNegative: true,
  })

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mDiscardFirst')
    anArray.splice(0, num)
    return anArray
  }
}

export default mDiscardFirst
