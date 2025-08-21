import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import getValues from '#lib/get-values'

const typeToFn = {
  map: function getValues_map() {},
  object: function getValues_object() {},
}

suite('get-values', () => {
  const obj = { a: 'A', b: 'B' }

  test('object', () => {
    const values = getValues(obj)
    expect(values).to.deep.equal(['A', 'B'])
  })

  test('map', () => {
    const values = getValues(objToMap(obj))
    expect(values).to.deep.equal(['A', 'B'])
  })

  test('shared internals are called as expected', () => {
    getValues(obj)

    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, obj, 'collection', 'getValues'],
    ])
  })
})
