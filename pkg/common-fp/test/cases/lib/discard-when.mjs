import { expect } from 'chai'
import {
  objToMap,
  spy,
  suiteWithResources,
  validateGetFnArgs,
} from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import discardWhen from '#lib/discard-when'

const gt3 = spy(n => n > 3)

const typeToFn = {
  array: function discardWhen_array() {},
  map: function discardWhen_map() {},
  object: function discardWhen_object() {},
  set: function discardWhen_set() {},
}

const resources = [gt3]

suiteWithResources('discard-when', resources, () => {
  test('array', () => {
    const coll = [1, 2, 3]
    expect(discardWhen(gt3)(coll)).to.deep.equal([1, 2, 3])
    expect(gt3.argsPerCall).to.deep.equal([
      [1, 0, coll],
      [2, 1, coll],
      [3, 2, coll],
    ])

    expect(discardWhen(gt3)([1, 4, 2, 5])).to.deep.equal([1, 2])
  })

  test('map', () => {
    let coll = objToMap({ a: 1, b: 2, c: 3 })
    let expected = objToMap({ a: 1, b: 2, c: 3 })

    expect(discardWhen(gt3)(coll)).to.deep.equal(expected)
    expect(gt3.argsPerCall).to.deep.equal([
      [1, 'a', coll],
      [2, 'b', coll],
      [3, 'c', coll],
    ])

    coll = objToMap({ a: 1, b: 4, c: 2, d: 5 })
    expected = objToMap({ a: 1, c: 2 })
    expect(discardWhen(gt3)(coll)).to.deep.equal(expected)
  })

  test('object', () => {
    let coll = { a: 1, b: 2, c: 3 }
    let expected = { a: 1, b: 2, c: 3 }

    expect(discardWhen(gt3)(coll)).to.deep.equal(expected)
    expect(gt3.argsPerCall).to.deep.equal([
      [1, 'a', coll],
      [2, 'b', coll],
      [3, 'c', coll],
    ])

    coll = { a: 1, b: 4, c: 2, d: 5 }
    expected = { a: 1, c: 2 }
    expect(discardWhen(gt3)(coll)).to.deep.equal(expected)
  })

  test('set', () => {
    let coll = new Set([1, 2, 3])
    let expected = new Set([1, 2, 3])

    expect(discardWhen(gt3)(coll)).to.deep.equal(expected)
    expect(gt3.argsPerCall).to.deep.equal([
      [1, 1, coll],
      [2, 2, coll],
      [3, 3, coll],
    ])

    coll = new Set([1, 4, 2, 5])
    expected = new Set([1, 2])
    expect(discardWhen(gt3)(coll)).to.deep.equal(expected)
  })

  test('shared internals are called as expected', () => {
    const discardGt3 = discardWhen(gt3)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [gt3, 'predicate', 'function', 'discardWhen'],
    ])

    const coll = [1, 2]
    discardGt3(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'discardWhen'],
    ])
  })
})
