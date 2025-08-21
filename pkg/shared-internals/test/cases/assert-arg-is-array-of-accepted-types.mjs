import { expect } from 'chai'
import assertArgIsType from '#test/spies/assert-arg-is-type'
import assertArgIsArrayOfAcceptedTypes from '#src/assert-arg-is-array-of-accepted-types'

suite('assert-arg-is-array-of-accepted-types', () => {
  suite('success', () => {
    test('arg is asserted to be an array', () => {
      const arg = []
      assertArgIsArrayOfAcceptedTypes(arg, 'argName', 'string', 'utilName')
      expect(assertArgIsType.argsPerCall).to.deep.equal([
        [arg, 'argName', 'array', 'utilName'],
      ])
    })

    test('empty array succeeds', () => {
      expect(() => assertArgIsArrayOfAcceptedTypes([])).to.not.throw()
    })

    test('array contains only the accepted types', () => {
      expect(() =>
        assertArgIsArrayOfAcceptedTypes(
          ['some', 'strings', 1, 2],
          'argName',
          ['string', 'number'],
          'utilName'
        )
      )
    })
  })

  suite('error', () => {
    test('array has wrong type', () => {
      const errMsg = `utilName requires argument 'argName' to be an array of string and number - but found boolean`

      expect(() =>
        assertArgIsArrayOfAcceptedTypes(
          ['a string', 1, true],
          'argName',
          ['string', 'number'],
          'utilName'
        )
      ).to.throw(errMsg)
    })
  })
})
