import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import subtract from '#lib/number/subtract'

suite('number/subtract', () => {
  test('returns the expected result', () => {
    expect(subtract(1)(2)).to.equal(1)
  })

  test('shared internals are called as expected', () => {
    const right = 1
    const left = 2
    subtract(right)(left)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [right, 'right', 'number', 'subtract'],
      [left, 'left', 'number', 'subtract'],
    ])
  })
})
