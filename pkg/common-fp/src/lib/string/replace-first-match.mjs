import {
  assertArgTypeIsOneOf,
  assertArgIsType,
  getType,
} from '@common-fp/shared-internals'

const replaceFirstMatch = (search, replacement) => {
  validateInput(search, replacement)

  return aString => {
    assertArgIsType(aString, 'aString', 'string', 'replaceFirstMatch')

    return aString.replace(search, replacement)
  }
}

//
//------------------//
// Helper Functions //
//------------------//

function validateInput(search, replacement) {
  const searchType = getType(search)
  assertArgTypeIsOneOf(
    searchType,
    'search',
    ['regexp', 'string'],
    'replaceFirstMatch'
  )
  if (searchType === 'regexp' && search.global) {
    const errMsg =
      'When passing a regex to replaceFirstMatch, it cannot be global.' +
      "  In other words, remove the 'g' flag."
    throw new Error(errMsg)
  }

  assertArgIsType(replacement, 'replacement', 'string', 'replaceFirstMatch')
}

export default replaceFirstMatch
