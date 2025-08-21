import { expect } from 'chai'
import { sharedInternals as si } from '#test/spies'
import shuffle from '#lib/array/shuffle'

suite('array/shuffle', () => {
  const arr = ['a', 'b', 'c', 'd', 'e']

  test('returns the expected result', () => {
    si.getRandomInt.resultPerCall = [3, 1, 4, 3]
    expect(shuffle(arr)).to.deep.equal(['d', 'b', 'e', 'a', 'c'])
  })

  test('shared internals are called as expected', () => {
    shuffle(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [arr, 'anArray', 'array', 'shuffle'],
    ])
  })
})
