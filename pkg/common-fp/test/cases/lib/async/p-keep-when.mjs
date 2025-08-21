import { expect } from 'chai'
import {
  objToMap,
  spy,
  suiteWithResources,
  validateGetFnArgs,
} from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pKeepWhen from '#lib/async/p-keep-when'

const pLt3 = async n => n < 3

const typeToFn = {
  array: function pKeepWhen_array() {},
  map: function pKeepWhen_map() {},
  object: function pKeepWhen_object() {},
  set: function pKeepWhen_set() {},
}

suite('async/p-keep-when', () => {
  const pLt3Spy = spy(pLt3)

  suiteWithResources('result and predicate tests', [pLt3Spy], () => {
    test('array', async () => {
      const coll = [1, 2, 3]
      const result = await pKeepWhen(pLt3Spy)(coll)
      expect(result).to.deep.equal([1, 2])
      expect(pLt3Spy.argsPerCall).to.deep.equal([
        [1, 0, coll],
        [2, 1, coll],
        [3, 2, coll],
      ])
    })

    test('map', async () => {
      const coll = objToMap({ a: 1, b: 2, c: 3 })
      const result = await pKeepWhen(pLt3Spy)(coll)
      expect(result).to.deep.equal(objToMap({ a: 1, b: 2 }))
      expect(pLt3Spy.argsPerCall).to.deep.equal([
        [1, 'a', coll],
        [2, 'b', coll],
        [3, 'c', coll],
      ])
    })

    test('object', async () => {
      const coll = { a: 1, b: 2, c: 3 }
      const result = await pKeepWhen(pLt3Spy)(coll)
      expect(result).to.deep.equal({ a: 1, b: 2 })
      expect(pLt3Spy.argsPerCall).to.deep.equal([
        [1, 'a', coll],
        [2, 'b', coll],
        [3, 'c', coll],
      ])
    })

    test('set', async () => {
      const coll = new Set([1, 2, 3])
      const result = await pKeepWhen(pLt3Spy)(coll)
      expect(result).to.deep.equal(new Set([1, 2]))
      expect(pLt3Spy.argsPerCall).to.deep.equal([
        [1, 1, coll],
        [2, 2, coll],
        [3, 3, coll],
      ])
    })
  })

  test('shared internals are called as expected', async () => {
    const coll = [1, 2, 3]
    const keepLt3 = pKeepWhen(pLt3)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [pLt3, 'predicate', 'function', 'pKeepWhen'],
    ])

    await keepLt3(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'pKeepWhen'],
    ])
  })
})
