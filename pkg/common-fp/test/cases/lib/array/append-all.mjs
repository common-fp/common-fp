import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import appendAll from '#lib/array/append-all'

suite('array/append-all', () => {
  test('returns the expected result', () => {
    expect(appendAll([3, 4])([1, 2])).to.deep.equal([1, 2, 3, 4])
  })

  test('shared internals are called as expected', () => {
    appendAll([3, 4])([1, 2])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [[3, 4], 'appended', 'array', 'appendAll'],
      [[1, 2], 'base', 'array', 'appendAll'],
    ])
  })
})
