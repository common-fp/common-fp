import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import transpose from '#lib/transpose'

suite('transpose', () => {
  const arr = [
    ['a', 'b', 'c'],
    [1, 2, 3],
  ]

  test('handles an empty array', () => {
    expect(transpose([])).to.deep.equal([])
  })

  test('returns the expected result', () => {
    expect(transpose(arr)).to.deep.equal([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ])
  })

  test('throws on arrays of unequal length', () => {
    const arr = [
      ['a', 'b'],
      [1, 2, 3],
    ]
    expect(() => transpose(arr)).to.throw(
      "transpose requires 'anArray' to contain arrays of equal length"
    )
  })

  test('calls shared internals as expected', () => {
    transpose(arr)
    expect(si.assertArgIsArrayOfType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'transpose'],
    ])
  })
})
