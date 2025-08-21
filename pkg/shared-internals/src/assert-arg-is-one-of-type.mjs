import aOrAn from './a-or-an.mjs'
import getType from './get-type.mjs'
import toEnglishList from './to-english-list.mjs'
import containsType from './contains-type.mjs'

const assertArgIsOneOfType = (arg, argName, expectedTypes, utilName) => {
  const type = getType(arg)

  if (!containsType(expectedTypes, type)) {
    const expectedTypesStr = toEnglishList('or', expectedTypes)
    throw new Error(
      `${utilName} requires argument '${argName}' to be ${aOrAn(expectedTypesStr)} - but ${aOrAn(type)} was passed`
    )
  }
}

export default assertArgIsOneOfType
