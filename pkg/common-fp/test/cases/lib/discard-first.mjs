import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import discardFirst from '#lib/discard-first'

suite('discard-first', () => {
  test('returns the expected result', () => {
    expect(discardFirst(1)([1, 2, 3])).to.deep.equal([2, 3])
  })

  test('calls slice', () => {
    const arr = [1, 2, 3]
    arr.slice = spy((...args) => [].slice.apply(arr, args))
    discardFirst(1)(arr)
    expect(arr.slice.argsPerCall).to.deep.equal([[1]])
  })

  test('args are validated', () => {
    const arr = [1, 2, 3]
    discardFirst(0)(arr)
    expect(si.assertArgIsInt.argsPerCall).to.deep.equal([
      [0, 'num', 'discardFirst', { nonNegative: true }],
    ])
    expect(si.assertArgIsOneOfType.argsPerCall).to.deep.equal([
      [arr, 'sequence', si.commonTypes.sequence, 'discardFirst'],
    ])
  })
})
