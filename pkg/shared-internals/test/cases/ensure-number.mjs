import { expect } from 'chai'
import ensureNumber from '#src/ensure-number'

test('ensure-number', () => {
  expect(ensureNumber(1)).to.equal(1)
  expect(ensureNumber('1')).to.equal(1)
})
