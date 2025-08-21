import { expect } from 'chai'
import isFalsey from '#lib/is-falsey'

test('is-falsey', () => {
  expect(isFalsey(undefined)).to.be.true
  expect(isFalsey('a')).to.be.false
  expect(isFalsey('false')).to.be.false
  expect(isFalsey(0)).to.be.true
  expect(isFalsey(1)).to.be.false
})
