import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mPick from '#lib/mutable/m-pick'

const typeToFn = {
  array: function mPick_array() {},
  map: function mPick_map() {},
  object: function mPick_object() {},
}

suite('mutable/m-pick', () => {
  suite('returns the expected results', () => {
    test('array', () => {
      let coll = [0, 1, 2]
      const keys = []
      let result = mPick(keys)(coll)
      expect(result).to.deep.equal([])
      expect(result).to.equal(coll)

      coll = [0, 1, 2]
      result = mPick([0])(coll)
      expect(result).to.deep.equal([0])
      expect(result).to.equal(coll)

      coll = [0, 1, 2, 3, 4, 5]
      result = mPick([1, 3])(coll)
      expect(result).to.deep.equal([1, 3])
      expect(result).to.equal(coll)

      coll = [0, 1, 2]
      result = mPick([3])(coll)
      expect(result).to.deep.equal([])
      expect(result).to.equal(coll)
    })

    test('map', () => {
      let coll = objToMap({ a: 1, b: 2, c: 3 })
      let result = mPick([])(coll)
      expect(result).to.deep.equal(objToMap({}))
      expect(result).to.equal(coll)

      coll = objToMap({ a: 1, b: 2, c: 3 })
      result = mPick(['a'])(coll)
      expect(result).to.deep.equal(objToMap({ a: 1 }))
      expect(result).to.equal(coll)

      coll = objToMap({ a: 1, b: 2, c: 3 })
      result = mPick(['a', 'b'])(coll)
      expect(result).to.deep.equal(objToMap({ a: 1, b: 2 }))
      expect(result).to.equal(coll)

      coll = objToMap({ a: 1, b: 2, c: 3 })
      result = mPick(['d'])(coll)
      expect(result).to.deep.equal(objToMap({}))
      expect(result).to.equal(coll)
    })

    test('object', () => {
      let coll = { a: 1, b: 2, c: 3 }
      let result = mPick([])(coll)
      expect(result).to.deep.equal({})
      expect(result).to.equal(coll)

      coll = { a: 1, b: 2, c: 3 }
      result = mPick(['a'])(coll)
      expect(result).to.deep.equal({ a: 1 })
      expect(result).to.equal(coll)

      coll = { a: 1, b: 2, c: 3 }
      result = mPick(['a', 'b'])(coll)
      expect(result).to.deep.equal({ a: 1, b: 2 })
      expect(result).to.equal(coll)

      coll = { a: 1, b: 2, c: 3 }
      result = mPick(['d'])(coll)
      expect(result).to.deep.equal({})
      expect(result).to.equal(coll)
    })
  })

  test('array keys are validated', () => {
    const coll = [0, 1, 2]
    const keys = [1, 2]
    mPick(keys)(coll)
    expect(si.validateArrayKeys.argsPerCall).to.deep.equal([
      [new Set(keys), 'mPick'],
    ])
  })

  test('object keys are validated', () => {
    const coll = { a: 1, b: 2, c: 3 }
    const keys = ['b', 'c']
    mPick(keys)(coll)
    expect(si.validateObjectKeys.argsPerCall).to.deep.equal([
      [new Set(keys), 'mPick'],
    ])
  })

  test('shared internals are called as expected', () => {
    const coll = [1, 2, 3]
    const keys = [1]
    mPick(keys)(coll)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [keys, 'keys', si.commonTypes.valueCollection, 'mPick'],
    ])
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'mPick'],
    ])
  })
})
