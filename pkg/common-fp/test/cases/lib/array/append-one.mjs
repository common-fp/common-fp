import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import appendOne from '#lib/array/append-one'

suite('array/append-one', () => {
  test('returns the expected result', () => {
    expect(appendOne(3)([1, 2])).to.deep.equal([1, 2, 3])
  })

  test('shared internals are called as expected', () => {
    appendOne(3)([1, 2])
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [[1, 2], 'anArray', 'array', 'appendOne'],
    ])
  })
})
