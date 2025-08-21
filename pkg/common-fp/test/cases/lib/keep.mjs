import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import keep from '#lib/keep'

const typeToFn = {
  array: function keep_array() {},
  map: function keep_map() {},
  object: function keep_object() {},
  set: function keep_set() {},
}

suite('keep', () => {
  suite('returns the expected result', () => {
    test('array', () => {
      const coll = [1, 2, 3, 4]

      const result = keep([1, 3, 5])(coll)
      expect(result).to.deep.equal([1, 3])
    })

    test('map', () => {
      const coll = objToMap({
        a: 1,
        b: 2,
        c: 3,
      })

      const result = keep([1, 3, 5])(coll)
      expect(result).to.deep.equal(objToMap({ a: 1, c: 3 }))
    })

    test('object', () => {
      const coll = {
        a: 1,
        b: 2,
        c: 3,
      }

      const result = keep([1, 3, 5])(coll)
      expect(result).to.deep.equal({ a: 1, c: 3 })
    })

    test('set', () => {
      const coll = new Set([1, 2, 3, 4])

      const result = keep(new Set([1, 3, 5]))(coll)
      expect(result).to.deep.equal(new Set([1, 3]))
    })
  })

  test('shared internals are called as expected', () => {
    const vals = [2, 3]
    const keepVals = keep(vals)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [vals, 'values', si.commonTypes.valueCollection, 'keep'],
    ])
    expect(si.ensureSet.argsPerCall).to.deep.equal([[vals]])

    const coll = [1, 2, 3]
    keepVals(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'keep'],
    ])
  })
})
