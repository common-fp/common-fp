import { assertArgIsArrayOfType } from '@common-fp/shared-internals'

const pPassThrough = async (value, fnArray) => {
  assertArgIsArrayOfType(fnArray, 'fnArray', 'function', 'pPassThrough')

  let result = value
  for (const fn of fnArray) result = await fn(result)

  return result
}

export default pPassThrough
