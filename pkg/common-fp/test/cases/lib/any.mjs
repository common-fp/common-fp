import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import any from '#lib/any'

const gt3 = num => num > 3

suite('any', () => {
  test('returns expected result', () => {
    expect(any(gt3)([1, 2, 3])).to.be.false
    expect(any(gt3)([1, 4, 3])).to.be.true
  })

  test('predicate is called as expected', () => {
    const gt3Spy = spy(gt3)

    const coll1 = [1, 2, 3]
    any(gt3Spy)(coll1)
    expect(gt3Spy.argsPerCall).to.deep.equal([
      [1, 0, coll1],
      [2, 1, coll1],
      [3, 2, coll1],
    ])
    gt3Spy.reset()

    const coll2 = [1, 4, 3]
    any(gt3Spy)(coll2)
    expect(gt3Spy.argsPerCall).to.deep.equal([
      [1, 0, coll2],
      [4, 1, coll2],
    ])
  })

  test('calls shared internals as expected', () => {
    const anyGt3 = any(gt3)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [gt3, 'predicate', 'function', 'any'],
    ])

    const coll = [1, 2, 3]
    anyGt3(coll)
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'any'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })
})
