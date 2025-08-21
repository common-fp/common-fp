import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import contains from '#lib/contains'
import containsTypeToFn from '#internal/contains-type-to-fn'

suite('contained-in', () => {
  test('returns the expected result', () => {
    const coll = [1, 2]
    expect(contains(2)(coll)).to.be.true
    expect(contains(3)(coll)).to.be.false
  })

  test('error when passing a string collection but not value', () => {
    const coll = 'some string'
    const val = { not: 'a string' }

    const errMsg =
      'When calling contains with a collection of type string, value must also be a string' +
      `\n  value type: object`
    expect(() => contains(val)(coll)).to.throw(errMsg)
  })

  test('shared internals called as expected', () => {
    const coll = [1, 2]
    contains(1)(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[1], [coll]])
    expect(si.getFnByType.argsPerCall).to.deep.equal([
      [containsTypeToFn, 'array', 'collection', 'contains'],
    ])
  })
})
