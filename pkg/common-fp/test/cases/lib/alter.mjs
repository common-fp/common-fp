import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import alter from '#lib/alter'

suite('alter', () => {
  const sum = (total, n) => total + n

  test('returns the expected result', () => {
    const result = alter(sum, () => 0)([1, 2, 3])
    expect(result).to.equal(6)
  })

  test('calls reducerFn and makeInitial as expected', () => {
    const coll = [1, 2, 3]
    const sumSpy = spy(sum)
    const makeInitialSpy = spy(() => 0)

    alter(sumSpy, makeInitialSpy)(coll)
    expect(sumSpy.argsPerCall).to.deep.equal([
      [0, 1, 0, coll],
      [1, 2, 1, coll],
      [3, 3, 2, coll],
    ])
    expect(makeInitialSpy.argsPerCall).to.deep.equal([[coll]])
  })

  test('calls shared internals as expected', () => {
    const coll = [1, 2, 3]
    const makeInitial = () => 0
    alter(sum, makeInitial)(coll)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [sum, 'reducerFn', 'function', 'alter'],
      [makeInitial, 'makeInitial', 'function', 'alter'],
    ])
    expect(si.getType.argsPerCall).to.deep.equal([[coll]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'alter'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([
      ['entries', coll, 'array'],
    ])
  })
})
