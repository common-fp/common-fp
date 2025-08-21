import getType from './get-type.mjs'
import truncateToNChars from './truncate-to-n-chars.mjs'

const assertArgIsChar = (aChar, argName, utilName) => {
  const charType = getType(aChar)
  if (charType !== 'string') {
    throw new Error(
      `${utilName} requires argument '${argName}' to be typeof string - but type ${charType} was passed`
    )
  }
  if (aChar.length !== 1) {
    const truncatedChar = truncateToNChars(10, aChar)
    throw new Error(
      `${utilName} requires argument '${argName}' to be a single character - but ${truncatedChar} was passed`
    )
  }
}

export default assertArgIsChar
