import { expect } from 'chai'
import assertArgIsType from '#test/spies/assert-arg-is-type'
import assertArgIsArrayOfSameType from '#src/assert-arg-is-array-of-same-type'

suite('assert-arg-is-array-of-same-type', () => {
  suite('success', () => {
    test('arg is asserted to be an array', () => {
      const arg = ['a string']
      assertArgIsArrayOfSameType(arg, 'argName', ['string'], 'utilName')
      expect(assertArgIsType.argsPerCall).to.deep.equal([
        [arg, 'argName', 'array', 'utilName'],
      ])
    })

    test('collection contains exclusively an acceptable type', () => {
      const acceptedTypes = ['string', 'number']
      const strings = ['some', 'strings']
      expect(() =>
        assertArgIsArrayOfSameType(
          strings,
          'argName',
          acceptedTypes,
          'utilName'
        )
      ).to.not.throw()

      const nums = [1, 2]
      expect(() =>
        assertArgIsArrayOfSameType(nums, 'argName', acceptedTypes, 'utilName')
      ).to.not.throw()
    })
  })

  suite('error', () => {
    test('at least one element', () => {
      const acceptedTypes = ['string', 'number']
      const empty = []
      expect(() =>
        assertArgIsArrayOfSameType(empty, 'argName', acceptedTypes, 'utilName')
      ).to.throw(
        `utilName requires argument 'argName' to have at least one element.  This is so it knows which type to return.`
      )
    })

    test('unaccepted type', () => {
      const acceptedTypes = ['string', 'number']
      const bools = [true, false]
      expect(() =>
        assertArgIsArrayOfSameType(bools, 'argName', acceptedTypes, 'utilName')
      ).to.throw(
        `utilName requires argument 'argName' to be an array of string or number - but found boolean`
      )
    })

    test('different types', () => {
      const acceptedTypes = ['string', 'number']
      const stringsAndNums = ['some', 'strings', 1, 2]
      expect(() =>
        assertArgIsArrayOfSameType(
          stringsAndNums,
          'argName',
          acceptedTypes,
          'utilName'
        )
      ).to.throw(
        `utilName requires argument 'argName' to be an array of the same types - found both string and number`
      )
    })
  })
})
