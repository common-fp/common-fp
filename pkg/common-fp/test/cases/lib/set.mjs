import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import set from '#lib/set'

const typeToFn = {
  array: function set_array() {},
  map: function set_map() {},
  object: function set_object() {},
}

suite('set', () => {
  suite('returns the expected value', () => {
    test('array', () => {
      const key = 1
      expect(set(key, 2)([1])).to.deep.equal([1, 2])
    })

    test('map', () => {
      expect(set('b', 2)(objToMap({ a: 1 }))).to.deep.equal(
        objToMap({ a: 1, b: 2 })
      )
    })

    test('object', () => {
      const key = 'b'
      expect(set(key, 2)({ a: 1 })).to.deep.equal({ a: 1, b: 2 })
    })
  })

  test('array key is validated', () => {
    const errMsg =
      "when calling set with an array, 'key' must be a number or string" +
      '\n  key type: object'
    const key = {}
    expect(() => set(key, 2)([1])).to.throw(errMsg)
  })

  test('object key is validated', () => {
    const errMsg =
      "when calling set with an object, 'key' must be a number or string" +
      '\n  key type: object'
    const key = {}
    expect(() => set(key, 2)({ a: 1 })).to.throw(errMsg)
  })

  test('shared internals are called as expected', () => {
    const key = 'b'
    const coll = { a: 1 }
    expect(set(key, 2)(coll))
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'set'],
    ])
  })
})
