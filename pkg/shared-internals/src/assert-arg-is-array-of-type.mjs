import assertArgIsType from './assert-arg-is-type.mjs'
import getType from './get-type.mjs'

const assertArgIsArrayOfType = (arg, argName, type, utilName) => {
  assertArgIsType(arg, argName, 'array', utilName)

  if (!arg.length) return

  for (const el of arg) {
    const elType = getType(el)
    if (elType !== type) {
      const errMsg = `${utilName} requires argument '${argName}' to contain only ${type}s - but a ${elType} was found`
      throw new Error(errMsg)
    }
  }
}

export default assertArgIsArrayOfType
