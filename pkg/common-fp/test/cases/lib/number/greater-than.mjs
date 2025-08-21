import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import greaterThan from '#lib/number/greater-than'

suite('number/greater-than', () => {
  test('returns the expected result', () => {
    expect(greaterThan(1)(2)).to.be.true
    expect(greaterThan(1)(1)).to.be.false
    expect(greaterThan(1)(0)).to.be.false
  })

  test('shared internals are called as expected', () => {
    const right = 1
    const left = 2
    greaterThan(right)(left)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [right, 'right', 'number', 'greaterThan'],
      [left, 'left', 'number', 'greaterThan'],
    ])
  })
})
