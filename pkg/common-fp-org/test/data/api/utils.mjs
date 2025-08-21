import disparity from 'disparity'

const isErrorWithMessage = (msg, log) => err => {
  if (log) {
    console.log(disparity.chars(err.message, msg))
  }
  return err.message === msg
}

const isOneOf = expectedValsArr => {
  const expectedVals = new Set(expectedValsArr)
  return actual => expectedVals.has(actual)
}

const matchesRegex = regex => str => regex.test(str)

const re = {
  msPassedForN: /^ms passed: \d+, for n = \d$/,
  totalMsPassed: /^total ms passed: \d+$/,
}

/**
 * In some ts examples, a type error is shown. When we execute it using tsx,
 * code still compiles and actually throws an error.
 *
 * I'm unsure how to best write tests against this or how to restructure the
 * examples to show users what the type error looks like while still testing the
 * result. This is my solution for now.
 */
const throwsErrorWithMessage = msg => ({
  expectErrorWithMessage: msg,
})

export { isErrorWithMessage, isOneOf, matchesRegex, re, throwsErrorWithMessage }
