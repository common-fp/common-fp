import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import discard from '#lib/discard'

const typeToFn = {
  array: function discard_array() {},
  map: function discard_map() {},
  object: function discard_object() {},
  set: function discard_set() {},
}

suite('discard', () => {
  test('array', () => {
    const coll = [1, 2, 3]

    expect(discard([])(coll)).to.deep.equal([1, 2, 3])
    expect(discard([1])(coll)).to.deep.equal([2, 3])
    expect(discard([1, 2])(coll)).to.deep.equal([3])
    expect(discard([4])(coll)).to.deep.equal([1, 2, 3])
  })

  test('map', () => {
    const coll = objToMap({ a: 1, b: 2, c: 3 })

    expect(discard([])(coll)).to.deep.equal(objToMap({ a: 1, b: 2, c: 3 }))
    expect(discard([1])(coll)).to.deep.equal(objToMap({ b: 2, c: 3 }))
    expect(discard([1, 2])(coll)).to.deep.equal(objToMap({ c: 3 }))
    expect(discard([4])(coll)).to.deep.equal(objToMap({ a: 1, b: 2, c: 3 }))
  })

  test('object', () => {
    const coll = { a: 1, b: 2, c: 3 }

    expect(discard([])(coll)).to.deep.equal({ a: 1, b: 2, c: 3 })
    expect(discard([1])(coll)).to.deep.equal({ b: 2, c: 3 })
    expect(discard([1, 2])(coll)).to.deep.equal({ c: 3 })
    expect(discard([4])(coll)).to.deep.equal({ a: 1, b: 2, c: 3 })
  })

  test('set', () => {
    const coll = new Set([1, 2, 3])

    expect(discard([])(coll)).to.deep.equal(new Set([1, 2, 3]))
    expect(discard([1])(coll)).to.deep.equal(new Set([2, 3]))
    expect(discard([1, 2])(coll)).to.deep.equal(new Set([3]))
    expect(discard([4])(coll)).to.deep.equal(new Set([1, 2, 3]))
  })

  test('shared internals are called as expected', () => {
    const vals = []
    const discardVals = discard(vals)
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [vals, 'values', si.commonTypes.valueCollection, 'discard'],
    ])

    const coll = [1, 2, 3]
    discardVals(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'discard'],
    ])
  })
})
