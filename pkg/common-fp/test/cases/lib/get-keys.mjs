import { expect } from 'chai'
import { objToMap, spy, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import getKeys from '#lib/get-keys'

function getKeys_iterator() {}
const typeToFn = {
  array: getKeys_iterator,
  map: getKeys_iterator,
  object: function getKeys_object() {},
}

suite('get-keys', () => {
  const obj = { a: 'A', b: 'B' }

  test('object', () => {
    const keys = getKeys(obj)
    expect(keys).to.deep.equal(['a', 'b'])
  })

  test('map', () => {
    const aMap = objToMap(obj)
    aMap.keys = spy(() => Map.prototype.keys.call(aMap))
    const keys = getKeys(aMap)
    expect(keys).to.deep.equal(['a', 'b'])
    expect(aMap.keys.argsPerCall).to.deep.equal([[]])
  })

  test('shared internals are called as expected', () => {
    getKeys(obj)

    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, obj, 'collection', 'getKeys'],
    ])
  })
})
