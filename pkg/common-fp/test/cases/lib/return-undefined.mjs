import { expect } from 'chai'
import returnUndefined from '#lib/return-undefined'

test('return-undefined', () => {
  expect(returnUndefined('ignored')).to.be.undefined
})
