import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import randomlyKeep from '#lib/randomly-keep'

const typeToFn = {
  array: function randomlyKeep_array() {},
  map: function randomlyKeep_map() {},
  object: function randomlyKeep_object() {},
  set: function randomlyKeep_set() {},
}

suite('randomly-keep', () => {
  suite('returns the expected result', () => {
    test('array', () => {
      const arr = ['a', 'b', 'c', 'd', 'e']
      si.getRandomInt.resultPerCall = [1, 3, 0]
      expect(randomlyKeep(3)(arr)).to.deep.equal(['b', 'e', 'a'])
    })

    test('map', () => {
      const aMap = objToMap({ a: 1, b: 2, c: 3, d: 4, e: 5 })
      si.getRandomInt.resultPerCall = [1, 3, 0]
      expect(randomlyKeep(3)(aMap)).to.deep.equal(
        objToMap({ a: 1, b: 2, e: 5 })
      )
    })

    test('object', () => {
      const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
      si.getRandomInt.resultPerCall = [1, 3, 0]
      expect(randomlyKeep(3)(obj)).to.deep.equal({ a: 1, b: 2, e: 5 })
    })

    test('set', () => {
      const aSet = new Set(['a', 'b', 'c', 'd', 'e'])
      si.getRandomInt.resultPerCall = [1, 3, 0]
      expect(randomlyKeep(3)(aSet)).to.deep.equal(new Set(['b', 'e', 'a']))
    })
  })

  suite('edge cases', () => {
    test('sample more than array size', () => {
      const arr = ['a', 'b']
      si.getRandomInt.resultPerCall = [1, 0]
      expect(randomlyKeep(5)(arr)).to.deep.equal(['b', 'a'])
    })

    test('sample exactly the array size', () => {
      const arr = ['a', 'b']
      si.getRandomInt.resultPerCall = [1, 0]
      expect(randomlyKeep(2)(arr)).to.deep.equal(['b', 'a'])
    })
  })

  test('calls shared internals as expected', () => {
    const arr = ['a', 'b', 'c']
    const keepRandom2 = randomlyKeep(2)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [2, 'num', 'randomlyKeep', { nonNegative: true }],
    ])

    keepRandom2(arr)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, arr, 'collection', 'randomlyKeep'],
    ])
  })
})
