import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import isEmpty from '#lib/is-empty'

function isEmpty_hasLength() {}
function isEmpty_hasSize() {}

const typeToFn = {
  array: isEmpty_hasLength,
  map: isEmpty_hasSize,
  object: function isEmpty_object() {},
  set: isEmpty_hasSize,
  string: isEmpty_hasLength,
}

suite('is-empty', () => {
  test('array', () => {
    expect(isEmpty([])).to.be.true
    expect(isEmpty([1])).to.be.false
  })
  test('map', () => {
    expect(isEmpty(objToMap({}))).to.be.true
    expect(isEmpty(objToMap({ a: 1 }))).to.be.false
  })
  test('object', () => {
    expect(isEmpty({})).to.be.true
    expect(isEmpty({ a: 1 })).to.be.false
  })

  test('shared internals are called as expected', () => {
    const collection = {}
    isEmpty(collection)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, collection, 'collection', 'isEmpty'],
    ])
  })
})
