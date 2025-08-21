import { expect } from 'chai'
import {
  objToMap,
  spy,
  suiteWithResources,
  validateGetFnArgs,
} from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mMapValues from '#lib/mutable/m-map-values'

const typeToFn = {
  array: function mMapValues_array() {},
  map: function mMapValues_map() {},
  object: function mMapValues_object() {},
}

suite('m-map-values', () => {
  const inc = n => n + 1
  const incSpy = spy(inc)

  suiteWithResources('result and mapperFn tests', [incSpy], () => {
    test('array', () => {
      const coll = [1, 2, 3]

      const result = mMapValues(incSpy)(coll)
      expect(result).to.deep.equal([2, 3, 4])
      expect(result).to.equal(coll)

      expect(incSpy.argsPerCall).to.deep.equal([
        [1, 0, coll],
        [2, 1, coll],
        [3, 2, coll],
      ])
    })

    test('map', () => {
      const coll = objToMap({ a: 1, b: 2, c: 3 })

      const result = mMapValues(incSpy)(coll)
      expect(result).to.deep.equal(objToMap({ a: 2, b: 3, c: 4 }))
      expect(result).to.equal(coll)

      expect(incSpy.argsPerCall).to.deep.equal([
        [1, 'a', coll],
        [2, 'b', coll],
        [3, 'c', coll],
      ])
    })

    test('object', () => {
      const coll = { a: 1, b: 2, c: 3 }

      const result = mMapValues(incSpy)(coll)
      expect(result).to.deep.equal({ a: 2, b: 3, c: 4 })
      expect(result).to.equal(coll)

      expect(incSpy.argsPerCall).to.deep.equal([
        [1, 'a', coll],
        [2, 'b', coll],
        [3, 'c', coll],
      ])
    })
  })

  test('shared internals are called as expected', () => {
    const coll = [1, 2, 3]
    const incAll = mMapValues(inc)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [inc, 'mapperFn', 'function', 'mMapValues'],
    ])

    incAll(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'mMapValues'],
    ])
  })
})
