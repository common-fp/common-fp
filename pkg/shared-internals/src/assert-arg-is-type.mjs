import getType from './get-type.mjs'

const assertArgIsType = (arg, argName, expectedType, utilName) => {
  const argType = getType(arg)

  if (argType !== expectedType)
    throw new Error(
      `${utilName} requires argument '${argName}' to be a ${expectedType} - but a ${argType} was passed`
    )
}

export default assertArgIsType
