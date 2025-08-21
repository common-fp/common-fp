import { expect } from 'chai'
import ensureSet from '#src/ensure-set'

test('ensure-set', () => {
  const aSet = new Set([1])
  expect(ensureSet([1])).to.deep.equal(aSet)
  expect(ensureSet(aSet)).to.equal(aSet)
})
