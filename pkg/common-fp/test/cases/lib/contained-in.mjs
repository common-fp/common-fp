import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import containedIn from '#lib/contained-in'
import containsTypeToFn from '#internal/contains-type-to-fn'

suite('contained-in', () => {
  test('returns the expected result', () => {
    const coll = [1, 2]
    expect(containedIn(coll)(2)).to.be.true
    expect(containedIn(coll)(3)).to.be.false
  })

  test('error when passing a string collection but not value', () => {
    const coll = 'some string'
    const val = { not: 'a string' }

    const errMsg =
      `When calling containedIn with a string collection, value must also be a string` +
      `\n  value type: object`
    expect(() => containedIn(coll)(val)).to.throw(errMsg)
  })

  test('shared internals called as expected', () => {
    const coll = [1, 2]
    const isOneOrTwo = containedIn(coll)

    expect(si.getFnByType.argsPerCall).to.deep.equal([
      [containsTypeToFn, 'array', 'collection', 'containedIn'],
    ])

    isOneOrTwo(1)
    expect(si.getType.argsPerCall).to.deep.equal([[coll], [1]])
  })
})
