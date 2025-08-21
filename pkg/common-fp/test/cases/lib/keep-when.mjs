import { expect } from 'chai'
import {
  objToMap,
  spy,
  suiteWithResources,
  validateGetFnArgs,
} from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import keepWhen from '#lib/keep-when'

const isEven = n => n % 2 === 0

const typeToFn = {
  array: function keepWhen_array() {},
  map: function keepWhen_map() {},
  object: function keepWhen_object() {},
  set: function keepWhen_set() {},
}

suite('keep-when', () => {
  const isEvenSpy = spy(isEven)
  suiteWithResources('returns the expected result', [isEvenSpy], () => {
    test('array', () => {
      const coll = [1, 2, 3, 4]

      const result = keepWhen(isEvenSpy)(coll)
      expect(result).to.deep.equal([2, 4])

      expect(isEvenSpy.argsPerCall).to.deep.equals([
        [1, 0, coll],
        [2, 1, coll],
        [3, 2, coll],
        [4, 3, coll],
      ])
    })

    test('map', () => {
      const coll = objToMap({ a: 1, b: 2, c: 3, d: 4 })

      const result = keepWhen(isEvenSpy)(coll)
      expect(result).to.deep.equal(objToMap({ b: 2, d: 4 }))

      expect(isEvenSpy.argsPerCall).to.deep.equals([
        [1, 'a', coll],
        [2, 'b', coll],
        [3, 'c', coll],
        [4, 'd', coll],
      ])
    })

    test('object', () => {
      const coll = { a: 1, b: 2, c: 3, d: 4 }

      const result = keepWhen(isEvenSpy)(coll)
      expect(result).to.deep.equal({ b: 2, d: 4 })

      expect(isEvenSpy.argsPerCall).to.deep.equals([
        [1, 'a', coll],
        [2, 'b', coll],
        [3, 'c', coll],
        [4, 'd', coll],
      ])
    })

    test('set', () => {
      const coll = new Set([1, 2, 3, 4])

      const result = keepWhen(isEvenSpy)(coll)
      expect(result).to.deep.equal(new Set([2, 4]))

      expect(isEvenSpy.argsPerCall).to.deep.equals([
        [1, 1, coll],
        [2, 2, coll],
        [3, 3, coll],
        [4, 4, coll],
      ])
    })
  })

  test('shared internals are called as expected', () => {
    const keepEvens = keepWhen(isEven)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [isEven, 'predicate', 'function', 'keepWhen'],
    ])

    const arr = [1, 2, 3, 4]
    keepEvens(arr)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, arr, 'collection', 'keepWhen'],
    ])
  })
})
