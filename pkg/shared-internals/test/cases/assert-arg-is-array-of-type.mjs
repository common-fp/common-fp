import { expect } from 'chai'
import assertArgIsType from '#test/spies/assert-arg-is-type'
import assertArgIsArrayOfType from '#src/assert-arg-is-array-of-type'

suite('assert-arg-is-array-of-type', () => {
  suite('success', () => {
    test('arg is asserted to be an array', () => {
      const arg = []
      assertArgIsArrayOfType(arg, 'argName', 'string', 'utilName')
      expect(assertArgIsType.argsPerCall).to.deep.equal([
        [arg, 'argName', 'array', 'utilName'],
      ])
    })

    test('empty array succeeds', () => {
      expect(() => assertArgIsArrayOfType([])).to.not.throw()
    })

    test('array contains only the expected type', () => {
      expect(() =>
        assertArgIsArrayOfType(['a', 'b'], 'argName', 'string', 'utilName')
      )
    })
  })

  suite('error', () => {
    test('array has wrong type', () => {
      const errMsg = `utilName requires argument 'argName' to contain only strings - but a number was found`

      expect(() =>
        assertArgIsArrayOfType(['a string', 1], 'argName', 'string', 'utilName')
      ).to.throw(errMsg)
    })
  })
})
