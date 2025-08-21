import { expect } from 'chai'
import { objToMap, validateGetFnArgs } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import findKeyWithVal from '#lib/find-key-with-val'

function findKeyWithVal_indexOf() {}

const typeToFn = {
  array: findKeyWithVal_indexOf,
  map: function findKeyWithVal_map() {},
  object: function findKeyWithVal_object() {},
  string: findKeyWithVal_indexOf,
}

suite('find-key-with-val', () => {
  test('array', () => {
    const coll = ['a', 'b', 'c', undefined]
    expect(findKeyWithVal('c')(coll)).to.equal(2)
    expect(findKeyWithVal(undefined)(coll)).to.equal(3)
    expect(findKeyWithVal('e')(coll)).to.equal(undefined)
  })

  test('object', () => {
    const coll = { a: 1, b: 2, c: 3, d: undefined }
    expect(findKeyWithVal(2)(coll)).to.equal('b')
    expect(findKeyWithVal(undefined)(coll)).to.equal('d')
    expect(findKeyWithVal('e')(coll)).to.equal(undefined)
  })

  test('map', () => {
    const coll = objToMap({ a: 1, b: 2, c: 3, d: undefined })
    expect(findKeyWithVal(2)(coll)).to.equal('b')
    expect(findKeyWithVal(undefined)(coll)).to.equal('d')
    expect(findKeyWithVal('e')(coll)).to.equal(undefined)
  })

  test('shared internals are called as expected', () => {
    const coll = ['a', 'b', 'c', undefined]
    findKeyWithVal('c')(coll)
    expect(si.getType.argsPerCall).to.deep.equal([['c'], [coll]])
    validateGetFnArgs(si.getFnByType.argsPerCall, [
      [typeToFn, 'array', 'collection', 'findKeyWithVal'],
    ])
  })

  test('string validation', () => {
    const errMsg =
      'When calling findKeyWithVal with a collection of type string, value must also be a string' +
      `\n  value type: object`
    const val = {}
    expect(() => findKeyWithVal(val)('abc')).to.throw(errMsg)
  })
})
