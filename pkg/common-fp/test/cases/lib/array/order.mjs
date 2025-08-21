import { expect } from 'chai'
import { createStubResource, testWithResources } from '@common-fp/test-utils'
import { sharedInternals as si } from '#test/spies'
import order from '#lib/array/order'

suite('array/order', () => {
  const arr = [1, 2, 10]
  const asc = (l, r) => l - r
  const sortResource = createStubResource(Array.prototype, 'sort')

  test('returns the expected result', () => {
    expect(order(asc)(arr)).to.deep.equal([1, 2, 10])
  })

  testWithResources('compareFn is passed to sort', [sortResource], () => {
    const arr2 = []
    order(asc)(arr2)
    expect(sortResource.stub.argsPerCall).to.deep.equal([[asc]])
  })

  test('shared internals are called as expected', () => {
    order(asc)(arr)
    expect(si.assertArgIsType.argsPerCall).to.deep.equal([
      [asc, 'compareFn', 'function', 'order'],
      [arr, 'anArray', 'array', 'order'],
    ])
  })
})
