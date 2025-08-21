import { expect } from 'chai'
import getAtPath from '#internal/get-at-path'

test('internal/get-at-path', () => {
  const obj = { path: { to: { value: 'some value' } } }
  let result = getAtPath(['path', 'to', 'value'], obj)
  expect(result).to.equal('some value')

  result = getAtPath(['path', 'to'], obj)
  expect(result).to.equal(obj.path.to)

  result = getAtPath(['path', 'to', 'nowhere'], obj)
  expect(result).to.be.undefined

  result = getAtPath([], obj)
  expect(result).to.equal(obj)
})
