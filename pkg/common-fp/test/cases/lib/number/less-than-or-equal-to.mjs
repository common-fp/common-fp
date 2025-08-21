import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import lessThanOrEqualTo from '#lib/number/less-than-or-equal-to'

suite('number/less-than-or-equal-to', () => {
  test('returns the expected result', () => {
    expect(lessThanOrEqualTo(2)(1)).to.be.true
    expect(lessThanOrEqualTo(1)(1)).to.be.true
    expect(lessThanOrEqualTo(0)(1)).to.be.false
  })

  test('shared internals are called as expected', () => {
    const right = 2
    const left = 1
    lessThanOrEqualTo(right)(left)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [right, 'right', 'number', 'lessThanOrEqualTo'],
      [left, 'left', 'number', 'lessThanOrEqualTo'],
    ])
  })
})
