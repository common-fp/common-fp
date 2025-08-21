import assertArgIsType from './assert-arg-is-type.mjs'
import ensureSet from './ensure-set.mjs'
import getType from './get-type.mjs'
import toEnglishList from './to-english-list.mjs'

const assertArgIsArrayOfSameType = (arg, argName, acceptedTypes, utilName) => {
  assertArgIsType(arg, argName, 'array', utilName)

  if (!arg.length) {
    throw new Error(
      `${utilName} requires argument '${argName}' to have at least one element.  This is so it knows which type to return.`
    )
  }

  const setOfAcceptedTypes = ensureSet(acceptedTypes)
  const acceptedTypesStr = toEnglishList('or', acceptedTypes)

  const firstType = getType(arg[0])
  for (const el of arg) {
    const elType = getType(el)
    if (!setOfAcceptedTypes.has(elType)) {
      throw new Error(
        `${utilName} requires argument '${argName}' to be an array of ${acceptedTypesStr} - but found ${firstType}`
      )
    }
    if (elType !== firstType) {
      throw new Error(
        `${utilName} requires argument '${argName}' to be an array of the same types - found both ${firstType} and ${elType}`
      )
    }
  }
}

export default assertArgIsArrayOfSameType
