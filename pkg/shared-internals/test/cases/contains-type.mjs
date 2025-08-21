import { expect } from 'chai'
import containsType from '#src/contains-type'

test('contains-type', () => {
  expect(containsType(['string', 'array'], 'string')).to.be.true
  expect(containsType(new Set(['string', 'array']), 'string')).to.be.true
  expect(containsType(['string', 'array'], 'object')).to.be.false
  expect(containsType(new Set(['string', 'array']), 'object')).to.be.false
})
