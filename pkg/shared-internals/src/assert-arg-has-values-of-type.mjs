/**
 * This assumes arg is a collection
 * i.e. arg has already passed assertArgIsOneOfType -> commonTypes.collection
 */

import getIterator from './get-iterator.mjs'
import getType from './get-type.mjs'

const assertArgHasValuesOfType = (arg, argName, type, utilName) => {
  let badTypeFound = false
  let badValType

  for (const val of getIterator('values', arg)) {
    badValType = getType(val)
    badTypeFound = badValType !== type
    if (badTypeFound) {
      break
    }
  }

  if (badTypeFound) {
    throw new Error(
      `${utilName} reuqires argument ${argName} to contain only ${type}s` +
        `\nAt least one value was found with type ${badValType}`
    )
  }
}

export default assertArgHasValuesOfType
