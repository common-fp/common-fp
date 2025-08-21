import { expect } from 'chai'

import strictEquals from '#lib/strict-equals'

test('strict-equals', () => {
  expect(strictEquals('a')('a')).to.be.true
  expect(strictEquals('a')('b')).to.be.false
  expect(strictEquals({})({})).to.be.false
})
