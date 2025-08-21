import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import invokeWith from '#lib/function/invoke-with'

suite('function/invokeWith', () => {
  const add2 = n => n + 2

  test('returns the expected result', () => {
    expect(invokeWith(1)(add2)).to.equal(3)
    expect(invokeWith(2)(add2)).to.equal(4)
  })

  test('fn is called as expected', () => {
    const add2Spy = spy(add2)
    invokeWith(1)(add2Spy)
    expect(add2Spy.argsPerCall).to.deep.equal([[1]])
  })

  test('shared internals are called as expected', () => {
    invokeWith(1)(add2)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [add2, 'fn', 'function', 'invoke'],
    ])
  })
})
