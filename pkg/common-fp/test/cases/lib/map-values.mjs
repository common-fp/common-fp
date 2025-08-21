import { expect } from 'chai'
import {
  objToMap,
  spy,
  suiteWithResources,
  validateGetFnArgs,
} from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mapValues from '#lib/map-values'

const typeToFn = {
  array: function mapValues_array() {},
  map: function mapValues_map() {},
  object: function mapValues_object() {},
  set: function mapValues_set() {},
}

suite('map-values', () => {
  const inc = n => n + 1
  const incSpy = spy(inc)

  suiteWithResources('returns the expected result', [incSpy], () => {
    test('array', () => {
      const coll = [1, 2, 3]

      const result = mapValues(incSpy)(coll)
      expect(result).to.deep.equal([2, 3, 4])

      expect(incSpy.argsPerCall).to.deep.equal([
        [1, 0, coll],
        [2, 1, coll],
        [3, 2, coll],
      ])
    })

    test('map', () => {
      const coll = objToMap({ a: 1, b: 2, c: 3 })

      const result = mapValues(incSpy)(coll)
      expect(result).to.deep.equal(objToMap({ a: 2, b: 3, c: 4 }))

      expect(incSpy.argsPerCall).to.deep.equal([
        [1, 'a', coll],
        [2, 'b', coll],
        [3, 'c', coll],
      ])
    })

    test('object', () => {
      const coll = { a: 1, b: 2, c: 3 }

      const result = mapValues(incSpy)(coll)
      expect(result).to.deep.equal({ a: 2, b: 3, c: 4 })

      expect(incSpy.argsPerCall).to.deep.equal([
        [1, 'a', coll],
        [2, 'b', coll],
        [3, 'c', coll],
      ])
    })

    test('set', () => {
      const coll = new Set([1, 2, 3])

      const result = mapValues(incSpy)(coll)
      expect(result).to.deep.equal(new Set([2, 3, 4]))

      expect(incSpy.argsPerCall).to.deep.equal([
        [1, 1, coll],
        [2, 2, coll],
        [3, 3, coll],
      ])
    })
  })

  test('calls shared internals as expected', () => {
    const coll = [1, 2, 3]
    const incValues = mapValues(inc)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [inc, 'mapperFn', 'function', 'mapValues'],
    ])

    incValues(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'mapValues'],
    ])
  })
})
