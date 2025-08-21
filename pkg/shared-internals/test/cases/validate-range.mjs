import { expect } from 'chai'
import assertArgIsInt from '#test/spies/assert-arg-is-int'
import validateRange from '#src/validate-range'

test('validate-range', () => {
  const startIdx = 0
  const endIdx = 5
  const utilName = 'utilName'
  expect(() => validateRange(startIdx, endIdx, utilName)).to.not.throw()
  expect(assertArgIsInt.argsPerCall).to.deep.equal([
    [startIdx, 'startIdx', utilName, { nonNegative: true }],
    [endIdx, 'endIdx', utilName, { nonNegative: true }],
  ])
})
