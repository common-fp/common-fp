import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import invert from '#lib/invert'

const typeToFn = {
  map: function invert_map() {},
  object: function invert_obj() {},
}

suite('invert', () => {
  test('map', () => {
    const coll = objToMap({ a: '1', b: '2', c: '3' })

    expect(invert(coll)).to.deep.equal(objToMap({ 1: 'a', 2: 'b', 3: 'c' }))
  })

  test('object', () => {
    const coll = { a: 1, b: 2, c: 3 }

    expect(invert(coll)).to.deep.equal({ 1: 'a', 2: 'b', 3: 'c' })
  })

  test('shared internals are called as expected', () => {
    const coll = { a: 1, b: 2 }
    invert(coll)
    validateGetFnArgs(si.getFn.argsPerCall, [
      [typeToFn, coll, 'collection', 'invert'],
    ])
  })
})
