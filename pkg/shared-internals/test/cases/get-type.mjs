import { expect } from 'chai'
import typeDetect from '#test/spies/type-detect'
import getType from '#src/get-type'

test('get-type', () => {
  expect(getType('a string')).to.equal('string')
  expect(typeDetect.argsPerCall).to.deep.equal([['a string']])
  expect(getType(new String('a string'))).to.equal('string')
})
