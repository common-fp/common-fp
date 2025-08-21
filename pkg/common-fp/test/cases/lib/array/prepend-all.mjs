import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import prependAll from '#lib/array/prepend-all'

suite('array/prepend-all', () => {
  const prepended = [1, 2]
  const base = [3, 4]

  test('returns the expected result', () => {
    expect(prependAll(prepended)(base)).to.deep.equal([1, 2, 3, 4])
  })

  test('shared internals are called as expected', () => {
    prependAll(prepended)(base)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [prepended, 'prepended', 'array', 'prependAll'],
      [base, 'base', 'array', 'prependAll'],
    ])
  })
})
