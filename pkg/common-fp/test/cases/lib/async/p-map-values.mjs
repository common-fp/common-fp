import { expect } from 'chai'
import {
  objToMap,
  spy,
  suiteWithResources,
  validateGetFnArgs,
} from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pMapValues from '#lib/async/p-map-values'

const pInc = async n => n + 1

const typeToFn = {
  array: function pMapValues_array() {},
  map: function pMapValues_map() {},
  object: function pMapValues_object() {},
  set: function pMapValues_set() {},
}

suite('async/p-map-values', () => {
  const pIncSpy = spy(pInc)

  suiteWithResources('result and mapperFn tests', [pIncSpy], () => {
    test('array', async () => {
      const coll = [1, 2, 3]
      const result = await pMapValues(pIncSpy)(coll)
      expect(result).to.deep.equal([2, 3, 4])
      expect(pIncSpy.argsPerCall).to.deep.equal([
        [1, 0, coll],
        [2, 1, coll],
        [3, 2, coll],
      ])
    })

    test('map', async () => {
      const coll = objToMap({ a: 1, b: 2, c: 3 })
      const result = await pMapValues(pIncSpy)(coll)
      expect(result).to.deep.equal(objToMap({ a: 2, b: 3, c: 4 }))
      expect(pIncSpy.argsPerCall).to.deep.equal([
        [1, 'a', coll],
        [2, 'b', coll],
        [3, 'c', coll],
      ])
    })

    test('object', async () => {
      const coll = { a: 1, b: 2, c: 3 }
      const result = await pMapValues(pIncSpy)(coll)
      expect(result).to.deep.equal({ a: 2, b: 3, c: 4 })
      expect(pIncSpy.argsPerCall).to.deep.equal([
        [1, 'a', coll],
        [2, 'b', coll],
        [3, 'c', coll],
      ])
    })

    test('set', async () => {
      const coll = new Set([1, 2, 3])
      const result = await pMapValues(pIncSpy)(coll)
      expect(result).to.deep.equal(new Set([2, 3, 4]))
      expect(pIncSpy.argsPerCall).to.deep.equal([
        [1, 1, coll],
        [2, 2, coll],
        [3, 3, coll],
      ])
    })
  })

  test('shared internals are called as expected', async () => {
    const coll = [1, 2, 3]
    const incAll = pMapValues(pInc)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [pInc, 'mapperFn', 'function', 'pMapValues'],
    ])

    await incAll(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'pMapValues'],
    ])
  })
})
