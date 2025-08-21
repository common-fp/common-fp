import { assertArgIsArrayOfType } from '@common-fp/shared-internals'

const passThrough = (value, fnArray) => {
  assertArgIsArrayOfType(fnArray, 'fnArray', 'function', 'passThrough')

  return fnArray.reduce((result, fn) => fn(result), value)
}

export default passThrough
