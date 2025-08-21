import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import negate from '#lib/function/negate'

suite('function/negate', () => {
  const gt3 = n => n > 3

  test('returns the expected result', () => {
    const lte3 = negate(gt3)
    expect(lte3(2)).to.be.true
    expect(lte3(3)).to.be.true
    expect(lte3(4)).to.be.false
  })

  test('calls fn as expected', () => {
    const gt3Spy = spy(gt3)
    negate(gt3Spy)(2)
    expect(gt3Spy.argsPerCall).to.deep.equal([[2]])
  })

  test('shared internals are called as expected', () => {
    negate(gt3)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [gt3, 'fn', 'function', 'negate'],
    ])
  })
})
