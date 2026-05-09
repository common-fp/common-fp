import { assertArgIsArrayOfType } from '@common-fp/shared-internals'

const pCompose = fnArray => {
  assertArgIsArrayOfType(fnArray, 'fnArray', 'function', 'pCompose')

  return async (...args) => {
    if (!fnArray.length) return args[0]

    const [firstFn, ...restFns] = fnArray
    let result = await firstFn(...args)
    for (const fn of restFns) {
      result = await fn(result)
    }
    return result
  }
}

export default pCompose
