import { assertArgIsType } from '@common-fp/shared-internals'

const mAppendOne = value => anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'mAppend')

  anArray.push(value)
  return anArray
}

export default mAppendOne
