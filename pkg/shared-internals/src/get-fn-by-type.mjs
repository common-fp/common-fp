import assertArgTypeIsOneOf from './assert-arg-type-is-one-of.mjs'

const getFnByType = (typeToFn, argType, argName, utilName) => {
  const supportedTypes = Object.keys(typeToFn)
  assertArgTypeIsOneOf(argType, argName, supportedTypes, utilName)
  return typeToFn[argType]
}

export default getFnByType
