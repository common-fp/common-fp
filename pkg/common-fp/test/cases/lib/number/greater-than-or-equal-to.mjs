import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import greaterThanOrEqualTo from '#lib/number/greater-than-or-equal-to'

suite('number/greater-than-or-equal-to', () => {
  test('returns the expected result', () => {
    expect(greaterThanOrEqualTo(1)(2)).to.be.true
    expect(greaterThanOrEqualTo(1)(1)).to.be.true
    expect(greaterThanOrEqualTo(1)(0)).to.be.false
  })

  test('shared internals are called as expected', () => {
    const right = 1
    const left = 2
    greaterThanOrEqualTo(right)(left)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [right, 'right', 'number', 'greaterThanOrEqualTo'],
      [left, 'left', 'number', 'greaterThanOrEqualTo'],
    ])
  })
})
