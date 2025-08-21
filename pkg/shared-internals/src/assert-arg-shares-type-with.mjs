const assertArgSharesTypeWith = argObj => {
  const { argType, argName, sharedArgType, sharedArgName, utilName } = argObj

  if (argType !== sharedArgType)
    throw new Error(
      `${utilName} requires the '${argName}' type to match '${sharedArgName}'.\n` +
        `  ${sharedArgName} has type ${sharedArgType}\n` +
        `  ${argName} has type ${argType}`
    )
}

export default assertArgSharesTypeWith
