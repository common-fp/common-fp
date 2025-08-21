import { expect } from 'chai'
import isTruthy from '#lib/is-truthy'

test('is-truthy', () => {
  expect(isTruthy(undefined)).to.be.false
  expect(isTruthy('a')).to.be.true
  expect(isTruthy('false')).to.be.true
  expect(isTruthy(0)).to.be.false
  expect(isTruthy(1)).to.be.true
})
