import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import discardLast from '#lib/discard-last'

suite('discard-last', () => {
  test('returns expected result', () => {
    expect(discardLast(1)([1, 2, 3])).to.deep.equal([1, 2])
  })

  test('calls slice', () => {
    const arr = [1, 2, 3]
    arr.slice = spy((...args) => [].slice.apply(arr, args))
    discardLast(1)(arr)
    expect(arr.slice.argsPerCall).to.deep.equal([[0, 2]])
  })

  test('args are validated', () => {
    const arr = [1, 2, 3]
    discardLast(0)(arr)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [0, 'num', 'discardLast', { nonNegative: true }],
    ])
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [arr, 'sequence', si.commonTypes.sequence, 'discardLast'],
    ])
  })
})
