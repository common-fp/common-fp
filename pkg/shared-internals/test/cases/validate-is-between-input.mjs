import { expect } from 'chai'
import assertArgIsType from '#test/spies/assert-arg-is-type'
import validateIsBetweenInput from '#src/validate-is-between-input'

test('validate-is-between-input', () => {
  const min = 0
  const max = 5
  const type = 'number'
  const utilName = 'utilName'
  const exclusiveMin = false
  const exclusiveMax = false
  expect(() =>
    validateIsBetweenInput(min, 'minArg', max, 'maxArg', type, utilName, {
      exclusiveMin,
      exclusiveMax,
    })
  ).to.not.throw()
  expect(assertArgIsType.argsPerCall).to.deep.equal([
    [min, 'minArg', type, utilName],
    [max, 'maxArg', type, utilName],
    [exclusiveMin, 'exclusiveMin', 'boolean', utilName],
    [exclusiveMax, 'exclusiveMax', 'boolean', utilName],
  ])
})
