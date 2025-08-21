/**
 * this utility expects a valid value for numChars
 */

const truncateToNChars = (numChars, anything) => {
  const str = '' + anything
  const chars = str.slice(0, numChars)
  const moreCharsExist = str.length > chars.length

  return moreCharsExist ? omitLastThree(chars) : chars
}

// accounts for strings less than 3 characters
function omitLastThree(str) {
  return str.replace(/.{0,3}$/, matched => matched.replace(/./g, '.'))
}

export default truncateToNChars
