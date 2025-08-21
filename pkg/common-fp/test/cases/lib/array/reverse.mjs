import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import reverse from '#lib/array/reverse'

suite('array/reverse', () => {
  const arr = [1, 2]
  test('returns the expected result', () => {
    expect(reverse(arr)).to.deep.equal([2, 1])
  })

  test('shared internals are called as expected', () => {
    reverse(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'reverse'],
    ])
  })
})
