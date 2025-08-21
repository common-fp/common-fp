import disparity from 'disparity'
import deepEql from 'deep-eql'

/**
 * This creates a predicate intended for chai's 'satisfy' assertion. It processes
 * the argsPerCall from global.show to determine if it matches expectedResults
 */

const makeArgsMatchExpectedResults = expectedResults => {
  return function argsMatchExpectedResults(argsPerCall) {
    const processedResults = [...expectedResults]

    for (const args of argsPerCall) {
      if (args.length === 1) {
        const expected = processedResults.shift()
        const actual = args[0]
        if (!areEqual(actual, expected)) return reportDiff(actual, expected)
      } else if (args.length === 2) {
        if (typeof args[0] === 'string') {
          const expected = processedResults.shift()
          const actual = args[1]
          if (!areEqual(actual, expected)) return reportDiff(actual, expected)
        } else {
          const actual = args
          const expected = processedResults.splice(0, 2)
          if (!areEqual(actual, expected)) return reportDiff(actual, expected)
        }
      } else {
        throw new Error('unexpected args.length')
      }
    }

    if (processedResults.length !== 0) {
      console.error('unexpected args')
      return false
    }

    return true
  }
}

function areEqual(actual, expected) {
  return typeof expected === 'function' ?
      expected(actual)
    : deepEql(actual, expected)
}

function reportDiff(actual, expected) {
  if (typeof actual === 'string' && typeof expected === 'string') {
    console.error(disparity.chars(actual, expected))
  }
  return false
}

export default makeArgsMatchExpectedResults
