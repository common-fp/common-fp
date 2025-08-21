import truncateToNChars from './truncate-to-n-chars.mjs'

const validateArrayKeys = (keys, utilName) => {
  const multiDigitRe = /^[1-9]\d+$/
  const singleDigitRe = /^\d$/

  for (const k of keys) {
    const isValidKey =
      (typeof k === 'number' && Number.isInteger(k) && k >= 0) ||
      (typeof k === 'string' && (multiDigitRe.test(k) || singleDigitRe.test(k)))
    if (!isValidKey) {
      let msg = `when calling ${utilName} with an array, 'keys' must all be integers zero or above`
      msg += `\n  invalid key found: ${truncateToNChars(20, k)}`
      throw new Error(msg)
    }
  }
}

export default validateArrayKeys
