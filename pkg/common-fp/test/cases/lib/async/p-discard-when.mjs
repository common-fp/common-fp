import { expect } from 'chai'
import {
  objToMap,
  spy,
  suiteWithResources,
  validateGetFnArgs,
} from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pDiscardWhen from '#lib/async/p-discard-when'

const typeToFn = {
  array: function pDiscardWhen_array() {},
  map: function pDiscardWhen_map() {},
  object: function pDiscardWhen_object() {},
  set: function pDiscardWhen_set() {},
}

suite('async/p-discard-when', () => {
  const pLt4 = async n => n < 4
  const pLt4Spy = spy(pLt4)

  suiteWithResources('result and predicate tests', [pLt4Spy], () => {
    test('array', async () => {
      const coll = [5, 4, 3]
      const result = await pDiscardWhen(pLt4Spy)(coll)
      expect(result).to.deep.equal([5, 4])
      expect(pLt4Spy.argsPerCall).to.deep.equal([
        [5, 0, coll],
        [4, 1, coll],
        [3, 2, coll],
      ])
    })

    test('map', async () => {
      const coll = objToMap({ e: 5, d: 4, c: 3 })
      const result = await pDiscardWhen(pLt4Spy)(coll)
      expect(result).to.deep.equal(objToMap({ e: 5, d: 4 }))
      expect(pLt4Spy.argsPerCall).to.deep.equal([
        [5, 'e', coll],
        [4, 'd', coll],
        [3, 'c', coll],
      ])
    })

    test('object', async () => {
      const coll = { e: 5, d: 4, c: 3 }
      const result = await pDiscardWhen(pLt4Spy)(coll)
      expect(result).to.deep.equal({ e: 5, d: 4 })
      expect(pLt4Spy.argsPerCall).to.deep.equal([
        [5, 'e', coll],
        [4, 'd', coll],
        [3, 'c', coll],
      ])
    })

    test('set', async () => {
      const coll = new Set([5, 4, 3])
      const result = await pDiscardWhen(pLt4Spy)(coll)
      expect(result).to.deep.equal(new Set([5, 4]))
      expect(pLt4Spy.argsPerCall).to.deep.equal([
        [5, 5, coll],
        [4, 4, coll],
        [3, 3, coll],
      ])
    })
  })

  test('shared internals are called as expected', async () => {
    const coll = [5, 4, 3]
    const discardLt4 = pDiscardWhen(pLt4)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [pLt4, 'predicate', 'function', 'pDiscardWhen'],
    ])

    await discardLt4(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'pDiscardWhen'],
    ])
  })
})
