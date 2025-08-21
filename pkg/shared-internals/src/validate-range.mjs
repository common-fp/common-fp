/**
 * validateRange assumes we're validating the range of array indices.  Use
 * 'validateIsBetweenInput' if you're trying to validate more general types e.g.
 * a date range or decimals
 */

import assertArgIsInt from './assert-arg-is-int.mjs'

const validateRange = (startIdx, endIdx, utilName) => {
  assertArgIsInt(startIdx, 'startIdx', utilName, { nonNegative: true })
  assertArgIsInt(endIdx, 'endIdx', utilName, { nonNegative: true })
}

export default validateRange
