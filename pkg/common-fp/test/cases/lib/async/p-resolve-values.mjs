import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pResolveValues from '#lib/async/p-resolve-values'

const typeToFn = {
  array: function pResolveValues_array() {},
  map: function pResolveValues_map() {},
  object: function pResolveValues_object() {},
  set: function pResolveValues_set() {},
}

suite('async/p-resolve-values', () => {
  suite('returns the expected result', () => {
    test('array', async () => {
      expect(
        await pResolveValues([Promise.resolve(1), Promise.resolve(2)])
      ).to.deep.equal([1, 2])
    })
    test('map', async () => {
      expect(
        await pResolveValues(
          objToMap({
            a: Promise.resolve(1),
            b: Promise.resolve(2),
          })
        )
      ).to.deep.equal(objToMap({ a: 1, b: 2 }))
    })
    test('object', async () => {
      expect(
        await pResolveValues({
          a: Promise.resolve(1),
          b: Promise.resolve(2),
        })
      ).to.deep.equal({ a: 1, b: 2 })
    })
    test('set', async () => {
      expect(
        await pResolveValues(new Set([Promise.resolve(1), Promise.resolve(2)]))
      ).to.deep.equal(new Set([1, 2]))
    })
  })

  test('shared internals are called as expected', async () => {
    const coll = [Promise.resolve(1), Promise.resolve(2)]
    await pResolveValues(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'pResolveValues'],
    ])
  })
})
