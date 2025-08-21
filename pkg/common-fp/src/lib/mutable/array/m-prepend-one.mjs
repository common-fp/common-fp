import { assertArgIsType } from '@common-fp/shared-internals'

const mPrependOne = el => anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'mPrependOne')

  anArray.unshift(el)
  return anArray
}

export default mPrependOne
