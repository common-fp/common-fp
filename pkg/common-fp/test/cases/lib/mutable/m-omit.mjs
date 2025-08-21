import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mOmit from '#lib/mutable/m-omit'

const typeToFn = {
  array: function mOmit_array() {},
  map: function mOmit_map() {},
  object: function mOmit_object() {},
}

suite('mutable/m-omit', () => {
  suite('returns the expected results', () => {
    test('array', () => {
      let coll = [1, 2, 3]
      const keys = []
      let result = mOmit(keys)(coll)
      expect(result).to.deep.equal([1, 2, 3])
      expect(result).to.equal(coll)

      result = mOmit([0])(coll)
      expect(result).to.deep.equal([2, 3])
      expect(result).to.equal(coll)

      coll = [1, 2, 3]
      result = mOmit([0, 1])(coll)
      expect(result).to.deep.equal([3])
      expect(result).to.equal(coll)

      coll = [1, 2, 3]
      result = mOmit([3])(coll)
      expect(result).to.deep.equal([1, 2, 3])
      expect(result).to.equal(coll)
    })

    test('map', () => {
      let coll = objToMap({ a: 1, b: 2, c: 3 })
      let result = mOmit([])(coll)
      expect(result).to.deep.equal(objToMap({ a: 1, b: 2, c: 3 }))
      expect(result).to.equal(coll)

      result = mOmit(['a'])(coll)
      expect(result).to.deep.equal(objToMap({ b: 2, c: 3 }))
      expect(result).to.equal(coll)

      coll = objToMap({ a: 1, b: 2, c: 3 })
      result = mOmit(['a', 'b'])(coll)
      expect(result).to.deep.equal(objToMap({ c: 3 }))
      expect(result).to.equal(coll)

      coll = objToMap({ a: 1, b: 2, c: 3 })
      result = mOmit(['d'])(coll)
      expect(result).to.deep.equal(objToMap({ a: 1, b: 2, c: 3 }))
      expect(result).to.equal(coll)
    })

    test('object', () => {
      let coll = { a: 1, b: 2, c: 3 }
      let result = mOmit([])(coll)
      expect(result).to.deep.equal({ a: 1, b: 2, c: 3 })
      expect(result).to.equal(coll)

      result = mOmit(['a'])(coll)
      expect(result).to.deep.equal({ b: 2, c: 3 })
      expect(result).to.equal(coll)

      coll = { a: 1, b: 2, c: 3 }
      result = mOmit(['a', 'b'])(coll)
      expect(result).to.deep.equal({ c: 3 })
      expect(result).to.equal(coll)

      coll = { a: 1, b: 2, c: 3 }
      result = mOmit(['d'])(coll)
      expect(result).to.deep.equal({ a: 1, b: 2, c: 3 })
      expect(result).to.equal(coll)
    })
  })

  test('array keys are validated', () => {
    const coll = [1, 2, 3]
    const keys = []
    mOmit(keys)(coll)
    expect(si.validateArrayKeys.argsPerCall).to.deep.equal([
      [new Set(keys), 'mOmit'],
    ])
  })

  test('object keys are validated', () => {
    const coll = { a: 1, b: 2, c: 3 }
    mOmit([])(coll)
    expect(si.validateObjectKeys.argsPerCall).to.deep.equal([
      [new Set(), 'mOmit'],
    ])
  })

  test('shared internals are called as expected', () => {
    const coll = [1, 2, 3]
    const keys = [1]
    mOmit(keys)(coll)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [keys, 'keys', si.commonTypes.valueCollection, 'mOmit'],
    ])
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'mOmit'],
    ])
  })
})
