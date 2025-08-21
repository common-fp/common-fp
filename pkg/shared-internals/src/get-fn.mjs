import assertArgTypeIsOneOf from './assert-arg-type-is-one-of.mjs'
import getType from './get-type.mjs'

const getFn = (typeToFn, arg, argName, utilName) => {
  const supportedTypes = Object.keys(typeToFn)
  const argType = getType(arg)
  assertArgTypeIsOneOf(argType, argName, supportedTypes, utilName)
  return typeToFn[argType]
}

export default getFn
