import { expect } from 'chai'
import assertArgHasValuesOfType from '#src/assert-arg-has-values-of-type'

suite('assert-arg-has-values-of-type', () => {
  suite('success', () => {
    test('empty collections succeed', () => {
      expect(() => assertArgHasValuesOfType([])).to.not.throw()
      expect(() => assertArgHasValuesOfType(new Set())).to.not.throw()
    })

    test('all values are the expected type', () => {
      expect(() =>
        assertArgHasValuesOfType(['a', 'b'], 'argName', 'string', 'utilName')
      )
    })
  })

  suite('error', () => {
    test('val has wrong type', () => {
      let errMsg = 'utilName reuqires argument argName to contain only numbers'
      errMsg += `\nAt least one value was found with type string`

      expect(() =>
        assertArgHasValuesOfType(['a string'], 'argName', 'number', 'utilName')
      ).to.throw(errMsg)
    })
  })
})
