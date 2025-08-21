import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import peek from '#lib/peek'

suite('peek', () => {
  const inc = n => n + 1

  test('returns the argument passed', () => {
    expect(peek(inc)(1)).to.equal(1)
  })

  test('fn is called with the argument', () => {
    const incSpy = spy(inc)
    peek(incSpy)(1)
    expect(incSpy.argsPerCall).to.deep.equal([[1]])
  })

  test('shared internals are called as expected', () => {
    peek(inc)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [inc, 'fn', 'function', 'peek'],
    ])
  })
})
