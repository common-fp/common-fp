import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import omit from '#lib/omit'

const typeToFn = {
  array: function omit_array() {},
  map: function omit_map() {},
  object: function omit_object() {},
}

suite('omit', () => {
  suite('returns the expected result', () => {
    test('array', () => {
      const coll = [1, 2, 3]
      const keys = [0]
      expect(omit(keys)(coll)).to.deep.equal([2, 3])
      expect(omit([])(coll)).to.deep.equal([1, 2, 3])
      expect(omit([0, 1])(coll)).to.deep.equal([3])
      expect(omit([3])(coll)).to.deep.equal([1, 2, 3])
    })

    test('map', () => {
      const coll = objToMap({ a: 1, b: 2, c: 3 })

      expect(omit([])(coll)).to.deep.equal(objToMap({ a: 1, b: 2, c: 3 }))
      expect(omit(['a'])(coll)).to.deep.equal(objToMap({ b: 2, c: 3 }))
      expect(omit(['a', 'b'])(coll)).to.deep.equal(objToMap({ c: 3 }))
      expect(omit(['d'])(coll)).to.deep.equal(objToMap({ a: 1, b: 2, c: 3 }))
    })

    test('object', () => {
      const coll = { a: 1, b: 2, c: 3 }
      const keys = ['a']

      expect(omit(keys)(coll)).to.deep.equal({ b: 2, c: 3 })
      expect(omit([])(coll)).to.deep.equal({ a: 1, b: 2, c: 3 })
      expect(omit(['a', 'b'])(coll)).to.deep.equal({ c: 3 })
      expect(omit(['d'])(coll)).to.deep.equal({ a: 1, b: 2, c: 3 })
    })
  })

  test('validates array keys', () => {
    const coll = [1, 2, 3]
    const keys = [0]
    omit(keys)(coll)
    expect(si.validateArrayKeys.argsPerCall).to.deep.equal([
      [new Set(keys), 'omit'],
    ])
  })

  test('validates object keys', () => {
    const coll = { a: 1, b: 2, c: 3 }
    const keys = ['a']
    omit(keys)(coll)
    expect(si.validateObjectKeys.argsPerCall).to.deep.equal([
      [new Set(keys), 'omit'],
    ])
  })

  test('calls shared internals as expected', () => {
    const coll = [1, 2, 3]
    const keys = [0]
    const omitKeys = omit(keys)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [keys, 'keys', si.commonTypes.valueCollection, 'omit'],
    ])
    expect(si.ensureSet.argsPerCall).to.deep.equal([[keys]])

    omitKeys(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'omit'],
    ])
  })
})
