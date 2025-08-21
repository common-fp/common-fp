import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'

const typeToFn = {
  array: function mFillWith_array() {},
  map: function mFillWith_map() {},
  object: function mFillWith_object() {},
}
import mFillWith from '#lib/mutable/m-fill-with'

suite('m-fill-with', () => {
  suite('returns the expected result', () => {
    test('array', () => {
      const arr = [1, 2, 3]
      const mutatedArr = mFillWith(0)(arr)

      expect(mutatedArr).to.equal(arr)
      expect(arr).to.deep.equal([0, 0, 0])
    })

    test('object', () => {
      const obj = { a: 1, b: 2, c: 3 }
      const mutatedObj = mFillWith(0)(obj)

      expect(mutatedObj).to.equal(obj)
      expect(obj).to.deep.equal({ a: 0, b: 0, c: 0 })
    })

    test('map', () => {
      const aMap = objToMap({ a: 1, b: 2, c: 3 })
      const mutatedMap = mFillWith(0)(aMap)

      expect(mutatedMap).to.equal(aMap)
      expect(aMap).to.deep.equal(objToMap({ a: 0, b: 0, c: 0 }))
    })
  })

  test('shared internals are called as expected', () => {
    const arr = [1, 2, 3, 4]
    mFillWith(0)(arr)

    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, arr, 'collection', 'mFillWith'],
    ])
  })
})
