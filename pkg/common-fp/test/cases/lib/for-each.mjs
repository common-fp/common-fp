import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import forEach from '#lib/for-each'

suite('forEach', () => {
  const noop = () => {}
  const noopSpy = spy(noop)
  const coll = [1, 2, 3]

  test('returns the collection', () => {
    const result = forEach(noop)(coll)
    expect(result).to.equal(coll)
  })

  test('calls fn as expected', () => {
    forEach(noopSpy)(coll)
    expect(noopSpy.argsPerCall).to.deep.equal([
      [1, 0, coll],
      [2, 1, coll],
      [3, 2, coll],
    ])
  })

  test('shared internals are called as expected', () => {
    const callEach = forEach(noop)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [noop, 'fn', 'function', 'forEach'],
    ])

    callEach(coll)
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'forEach'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })
})
