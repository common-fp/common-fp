import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import divideBy from '#lib/number/divide-by'

suite('number/divide-by', () => {
  test('returns the expected result', () => {
    const right = 2
    const left = 6
    expect(divideBy(right)(left)).to.equal(3)
  })

  test('shared internals are called as expected', () => {
    const right = 2
    const left = 6
    divideBy(right)(left)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [right, 'right', 'number', 'divideBy'],
      [left, 'left', 'number', 'divideBy'],
    ])
  })
})
