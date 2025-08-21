import assertArgIsType from './assert-arg-is-type.mjs'
import getType from './get-type.mjs'
import toEnglishList from './to-english-list.mjs'
import ensureSet from './ensure-set.mjs'

const assertArgIsArrayOfAcceptedTypes = (
  arg,
  argName,
  acceptedTypes,
  utilName
) => {
  assertArgIsType(arg, argName, 'array', utilName)

  if (!arg.length) return

  const acceptedTypesStr = toEnglishList('and', acceptedTypes)

  const setOfAcceptedTypes = ensureSet(acceptedTypes)
  for (const el of arg) {
    const elType = getType(el)
    if (!setOfAcceptedTypes.has(elType)) {
      const msg = `${utilName} requires argument '${argName}' to be an array of ${acceptedTypesStr} - but found ${elType}`
      throw new Error(msg)
    }
  }
}

export default assertArgIsArrayOfAcceptedTypes
