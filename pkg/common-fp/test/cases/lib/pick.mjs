import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import pick from '#lib/pick'

const typeToFn = {
  array: function pick_array() {},
  map: function pick_map() {},
  object: function pick_object() {},
}

suite('pick', () => {
  suite('returns the expected result', () => {
    test('array', () => {
      const coll = [1, 2, 3]

      expect(pick([])(coll)).to.deep.equal([])
      expect(pick([0])(coll)).to.deep.equal([1])
      expect(pick([0, 1])(coll)).to.deep.equal([1, 2])
      expect(pick([3])(coll)).to.deep.equal([])
    })

    test('map', () => {
      const coll = objToMap({ a: 1, b: 2, c: 3 })

      expect(pick([])(coll)).to.deep.equal(new Map())
      expect(pick(['a'])(coll)).to.deep.equal(objToMap({ a: 1 }))
      expect(pick(['a', 'b'])(coll)).to.deep.equal(objToMap({ a: 1, b: 2 }))
      expect(pick(['d'])(coll)).to.deep.equal(new Map())
    })

    test('object', () => {
      const coll = { a: 1, b: 2, c: 3 }

      expect(pick([])(coll)).to.deep.equal({})
      expect(pick(['a'])(coll)).to.deep.equal({ a: 1 })
      expect(pick(['a', 'b'])(coll)).to.deep.equal({ a: 1, b: 2 })
      expect(pick(['d'])(coll)).to.deep.equal({})
    })
  })

  test('validates array keys', () => {
    const coll = [1, 2, 3]
    const keys = [1, 2]
    pick(keys)(coll)
    expect(si.validateArrayKeys.argsPerCall).to.deep.equal([
      [new Set(keys), 'pick'],
    ])
  })

  test('validates object keys', () => {
    const coll = { a: 1, b: 2, c: 3 }
    const keys = ['b', 'c']
    pick(keys)(coll)
    expect(si.validateObjectKeys.argsPerCall).to.deep.equal([
      [new Set(keys), 'pick'],
    ])
  })

  test('shared internals are called as expected', () => {
    const coll = { a: 1, b: 2, c: 3 }
    const keys = ['a', 'b']
    const pickKeys = pick(keys)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [keys, 'keys', si.commonTypes.valueCollection, 'pick'],
    ])
    expect(si.ensureSet.argsPerCall).to.deep.equal([[keys]])

    pickKeys(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'pick'],
    ])
  })
})
