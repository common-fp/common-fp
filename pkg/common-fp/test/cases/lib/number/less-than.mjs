import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import lessThan from '#lib/number/less-than'

suite('number/less-than', () => {
  test('returns the expected result', () => {
    expect(lessThan(2)(1)).to.be.true
    expect(lessThan(1)(1)).to.be.false
    expect(lessThan(0)(1)).to.be.false
  })

  test('shared internals are called as expected', () => {
    const right = 2
    const left = 1
    lessThan(right)(left)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [right, 'right', 'number', 'lessThan'],
      [left, 'left', 'number', 'lessThan'],
    ])
  })
})
