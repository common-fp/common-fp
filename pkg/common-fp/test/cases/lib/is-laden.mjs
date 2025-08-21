import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import isLaden from '#lib/is-laden'

function isLaden_hasLength() {}
function isLaden_hasSize() {}

const typeToFn = {
  array: isLaden_hasLength,
  map: isLaden_hasSize,
  object: function isLaden_object() {},
  set: isLaden_hasSize,
  string: isLaden_hasLength,
}

suite('is-laden', () => {
  test('array', () => {
    expect(isLaden([1])).to.be.true
    expect(isLaden([])).to.be.false
  })
  test('map', () => {
    expect(isLaden(objToMap({ a: 1 }))).to.be.true
    expect(isLaden(objToMap({}))).to.be.false
  })
  test('object', () => {
    expect(isLaden({ a: 1 })).to.be.true
    expect(isLaden({})).to.be.false
  })

  test('shared internals are called as expected', () => {
    const collection = {}
    isLaden(collection)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, collection, 'collection', 'isLaden'],
    ])
  })
})
