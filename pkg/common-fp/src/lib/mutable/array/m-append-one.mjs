import { assertArgIsType } from '@common-fp/shared-internals'

const mAppendOne = value => anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'mAppendOne')

  anArray.push(value)
  return anArray
}

export default mAppendOne
