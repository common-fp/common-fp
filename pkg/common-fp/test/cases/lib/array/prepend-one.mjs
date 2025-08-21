import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import prependOne from '#lib/array/prepend-one'

suite('array/prepend-one', () => {
  const anArray = [2, 3]

  test('returns the expected result', () => {
    expect(prependOne(1)(anArray)).to.deep.equal([1, 2, 3])
  })

  test('shared internals are called as expected', () => {
    prependOne(1)(anArray)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [anArray, 'anArray', 'array', 'prependOne'],
    ])
  })
})
