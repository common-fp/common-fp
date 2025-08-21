import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import getSize from '#lib/get-size'

function getSize_hasSize() {}
function getSize_hasLength() {}

const typeToFn = {
  array: getSize_hasLength,
  map: getSize_hasSize,
  object: function getSize_object() {},
  set: getSize_hasSize,
  string: getSize_hasLength,
}

suite('get-size', () => {
  test('array', () => {
    expect(getSize([1, 2, 3])).to.equal(3)
  })

  test('map', () => {
    expect(getSize(objToMap({ a: 1, b: 2 }))).to.equal(2)
  })

  test('object', () => {
    expect(getSize({ a: 1, b: 2 })).to.equal(2)
  })

  test('shared internals are called as expected', () => {
    const coll = [1, 2, 3]
    getSize(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'getSize'],
    ])
  })
})
