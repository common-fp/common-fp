import { expect } from 'chai'
import assertArgIsType from '#test/spies/assert-arg-is-type'
import validateIsBetweenInput from '#src/validate-is-between-input'

suite('validate-is-between-input', () => {
  const min = 0
  const max = 5
  const type = 'number'
  const utilName = 'utilName'
  const exclusiveMin = false
  const exclusiveMax = false
  test('with exclusiveMin/Max', () => {
    validateIsBetweenInput(min, 'minArg', max, 'maxArg', type, utilName, {
      exclusiveMin,
      exclusiveMax,
    })
    expect(assertArgIsType.argsPerCall).to.deep.equal([
      [min, 'minArg', type, utilName],
      [max, 'maxArg', type, utilName],
      [exclusiveMin, 'exclusiveMin', 'boolean', utilName],
      [exclusiveMax, 'exclusiveMax', 'boolean', utilName],
    ])
  })

  test('without exclusiveMin/Max', () => {
    validateIsBetweenInput(min, 'minArg', max, 'maxArg', type, utilName)

    expect(assertArgIsType.argsPerCall).to.deep.equal([
      [min, 'minArg', type, utilName],
      [max, 'maxArg', type, utilName],
    ])
  })
})
