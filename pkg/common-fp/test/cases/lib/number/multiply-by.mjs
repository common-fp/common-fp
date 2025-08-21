import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import multiplyBy from '#lib/number/multiply-by'

suite('number/multiply-by', () => {
  test('returns the expected number', () => {
    expect(multiplyBy(2)(3)).to.equal(6)
  })

  test('shared internals are called as expected', () => {
    const n1 = 2
    const n2 = 3
    multiplyBy(n1)(n2)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [n1, 'n1', 'number', 'multiplyBy'],
      [n2, 'n2', 'number', 'multiplyBy'],
    ])
  })
})
