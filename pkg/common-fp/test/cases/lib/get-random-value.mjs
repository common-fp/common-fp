import { expect } from 'chai'
import { objToMap } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import getRandomValue from '#lib/get-random-value'

suite('get-random-value', () => {
  test('returns the expected value', () => {
    const aMap = objToMap({ a: 1, b: 2, c: 3 })
    si.getRandomInt.resultPerCall = [1]
    expect(getRandomValue(aMap)).to.equal(2)
  })

  test('empty collection returns undefined, skips call to getRandomInt', () => {
    const obj = {}
    expect(getRandomValue(obj)).to.be.undefined
    expect(si.getRandomInt.argsPerCall).to.deep.equal([])
  })

  test('shared internals called as expected', () => {
    const arr = ['a', 'b', 'c']
    getRandomValue(arr)
    expect(si.getType.argsPerCall).to.deep.equal([[arr]])
    expect(si.assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
      ['array', 'collection', si.commonTypes.collection, 'getRandomValue'],
    ])
    expect(si.getIterator.argsPerCall).to.deep.equal([['values', arr, 'array']])
    expect(si.getRandomInt.argsPerCall).to.deep.equal([[0, 2]])
  })
})
