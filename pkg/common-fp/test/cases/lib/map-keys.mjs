import { expect } from 'chai'
import {
  objToMap,
  spy,
  suiteWithResources,
  validateGetFnArgs,
} from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import mapKeys from '#lib/map-keys'

const typeToFn = {
  map: function mapKeys_map() {},
  object: function mapKeys_object() {},
}

suite('map-keys', () => {
  const chars = 'abc'
  const getCharIdx = aChar => chars.indexOf(aChar)
  const getCharIdxSpy = spy(getCharIdx)

  suiteWithResources('returns the expected result', [getCharIdxSpy], () => {
    test('map', () => {
      const coll = objToMap({ 1: 'a', 2: 'b', 3: 'c' })

      const result = mapKeys(getCharIdxSpy)(coll)
      expect(result).to.deep.equal(
        new Map([
          [0, 'a'],
          [1, 'b'],
          [2, 'c'],
        ])
      )

      expect(getCharIdxSpy.argsPerCall).to.deep.equal([
        ['a', '1', coll],
        ['b', '2', coll],
        ['c', '3', coll],
      ])
    })

    test('object', () => {
      const coll = { 1: 'a', 2: 'b', 3: 'c' }

      const result = mapKeys(getCharIdxSpy)(coll)
      expect(result).to.deep.equal({ 0: 'a', 1: 'b', 2: 'c' })

      expect(getCharIdxSpy.argsPerCall).to.deep.equal([
        ['a', '1', coll],
        ['b', '2', coll],
        ['c', '3', coll],
      ])
    })
  })

  test('shared internals are called as expected', () => {
    const coll = { 1: 'a', 2: 'b', 3: 'c' }
    const mapKeysToCharIdx = mapKeys(getCharIdx)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [getCharIdx, 'mapperFn', 'function', 'mapKeys'],
    ])

    mapKeysToCharIdx(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'mapKeys'],
    ])
  })
})
