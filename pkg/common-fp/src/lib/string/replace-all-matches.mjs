import {
  assertArgTypeIsOneOf,
  assertArgIsType,
  getType,
} from '@common-fp/shared-internals'

const replaceAllMatches = (search, replacement) => {
  validateInput(search, replacement)

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'replaceAllMatches')

    return aString.replaceAll(search, replacement)
  }
}

function validateInput(search, replacement) {
  const searchType = getType(search)
  assertArgTypeIsOneOf(
    searchType,
    'search',
    ['regexp', 'string'],
    'replaceAllMatches'
  )
  assertArgIsType(replacement, 'replacement', 'string', 'replaceAllMatches')

  if (searchType === 'regexp' && !search.global) {
    const errMsg =
      'When passing a regex to replaceAllMatches, it must be global.' +
      " In other words, add the the 'g' flag."
    throw new Error(errMsg)
  }
}

export default replaceAllMatches
