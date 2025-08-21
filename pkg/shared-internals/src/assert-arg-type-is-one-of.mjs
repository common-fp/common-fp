import aOrAn from './a-or-an.mjs'
import toEnglishList from './to-english-list.mjs'
import containsType from './contains-type.mjs'

const assertArgTypeIsOneOf = (argType, argName, expectedTypes, utilName) => {
  if (!containsType(expectedTypes, argType)) {
    const expectedTypesStr = toEnglishList('or', expectedTypes)
    throw new Error(
      `${utilName} requires argument '${argName}' to be ${aOrAn(expectedTypesStr)} - but ${aOrAn(argType)} was passed`
    )
  }
}

export default assertArgTypeIsOneOf
