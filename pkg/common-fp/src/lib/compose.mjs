import { assertArgIsArrayOfType } from '@common-fp/shared-internals'

const compose = fnArray => {
  assertArgIsArrayOfType(fnArray, 'fnArray', 'function', 'compose')

  return (...args) => {
    if (!fnArray.length) return args[0]

    const [firstFn, ...restFns] = fnArray
    const val = firstFn(...args)
    return restFns.reduce((result, fn) => fn(result), val)
  }
}

export default compose
