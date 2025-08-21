import { expect } from 'chai'
import { objToMap } from '@common-fp/test-utils'
import containsTypeToFn from '#internal/contains-type-to-fn'

suite('internal/contains-type-to-fn', () => {
  test('array', () => {
    const coll = [1, 2, 3]
    let val = 3
    expect(containsTypeToFn.array(coll, val)).to.be.true
    val = 4
    expect(containsTypeToFn.array(coll, val)).to.be.false
  })
  test('map', () => {
    const coll = objToMap({ a: 1, b: 2, c: 3 })
    let val = 3
    expect(containsTypeToFn.map(coll, val)).to.be.true
    val = 4
    expect(containsTypeToFn.map(coll, val)).to.be.false
  })
  test('object', () => {
    const coll = { a: 1, b: 2, c: 3 }
    let val = 3
    expect(containsTypeToFn.object(coll, val)).to.be.true
    val = 4
    expect(containsTypeToFn.object(coll, val)).to.be.false
  })
  test('set', () => {
    const coll = new Set([1, 2, 3])
    let val = 3
    expect(containsTypeToFn.set(coll, val)).to.be.true
    val = 4
    expect(containsTypeToFn.set(coll, val)).to.be.false
  })
})
