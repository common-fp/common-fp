import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'

const typeToFn = {
  array: function fillWith_array() {},
  map: function fillWith_map() {},
  object: function fillWith_object() {},
}
import fillWith from '#lib/fill-with'

suite('fill-with', () => {
  test('array', () => {
    const arr = [1, 2, 3]

    expect(fillWith(0)(arr)).to.deep.equal([0, 0, 0])
  })

  test('object', () => {
    const obj = { a: 1, b: 2, c: 3 }

    expect(fillWith(0)(obj)).to.deep.equal({ a: 0, b: 0, c: 0 })
  })

  test('map', () => {
    const aMap = objToMap({ a: 1, b: 2, c: 3 })

    expect(fillWith(0)(aMap)).to.deep.equal(objToMap({ a: 0, b: 0, c: 0 }))
  })

  test('getFn is called', () => {
    const arr = [1, 2, 3, 4]
    fillWith(0)(arr)

    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, arr, 'collection', 'fillWith'],
    ])
  })
})
