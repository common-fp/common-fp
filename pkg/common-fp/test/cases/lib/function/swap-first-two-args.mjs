import { expect } from 'chai'
import { spy } from '@common-fp/test-utils'

import swapFirstTwoArgs from '#lib/function/swap-first-two-args'

suite('function/swap-first-two-args', () => {
  test('no args - fn is called without any arguments', () => {
    const returnFirstArg = spy(str => str)
    const fn = swapFirstTwoArgs(returnFirstArg)
    fn()
    expect(returnFirstArg.argsPerCall).to.deep.equal([[]])
  })

  test('one arg - fn is called with undefined', () => {
    const returnFirstArg = spy(str => str)
    const fn = swapFirstTwoArgs(returnFirstArg)
    fn('one arg')
    expect(returnFirstArg.argsPerCall).to.deep.equal([[undefined]])
  })

  test('two args', () => {
    const returnFirstArg = spy(str => str)
    const fn = swapFirstTwoArgs(returnFirstArg)
    fn('first', 'second')
    expect(returnFirstArg.argsPerCall).to.deep.equal([['second', 'first']])
  })

  test('many args, typical usage', () => {
    const byIdx = swapFirstTwoArgs
    const returnFirstArg = spy(idx => idx)
    const arr = [2, 3, 1]
    const indexArr = arr.map(byIdx(returnFirstArg))
    expect(indexArr).to.deep.equal([0, 1, 2])
    expect(returnFirstArg.argsPerCall).to.deep.equal([
      [0, 2, arr],
      [1, 3, arr],
      [2, 1, arr],
    ])
  })
})
