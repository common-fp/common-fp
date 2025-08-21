import { assertArgIsType, truncateToNChars } from '@common-fp/shared-internals'

const roundToNearest = precision => {
  validatePrecision(precision)
  const numPrecision =
    precision.includes('.') ?
      precision.length - 2 // 2 accounts for the leading "0."
    : -precision.length + 1

  return aNumber => {
    assertArgIsType(aNumber, 'aNumber', 'number', 'roundToNearest')

    /**
     * implementation based off lodash.  Essentially we're
     *   1. shifting the exponent based off the precision passed
     *   2. rounding the shifted result
     *   3. shifting it back and returning the value
     *
     * per lodash this gets around pesky floating point issues
     */
    const [base, exp] = aNumber.toExponential().split('e')
    const shiftedNum = Math.round(base + 'e' + (Number(exp) + numPrecision))

    const [shiftedBase, shiftedExp] = shiftedNum.toExponential().split('e')
    return Number(shiftedBase + 'e' + (Number(shiftedExp) - numPrecision))
  }
}

function validatePrecision(precision) {
  assertArgIsType(precision, 'precision', 'string', 'roundToNearest')
  if (precision.includes('.')) {
    if (!/^0\.0{0,9}1$/.test(precision)) {
      const truncatedPrecision = truncateToNChars(15, precision)
      throw new Error(
        'With a decimal, roundToNearest requires a precision passing the regex /^0\\.0{0,9}1$/' +
          `\n  precision: ${truncatedPrecision}`
      )
    }
  } else {
    if (!/^10{0,9}$/.test(precision)) {
      const truncatedPrecision = truncateToNChars(15, precision)
      throw new Error(
        'Without a decimal, roundToNearest requires a precision passing the regex /^10{0,9}$/' +
          `\n  precision: ${truncatedPrecision}`
      )
    }
  }
}

export default roundToNearest
