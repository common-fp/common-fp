import { expect } from 'chai'
import assertArgTypeIsOneOf from '#test/spies/assert-arg-type-is-one-of'
import getType from '#test/spies/get-type'
import getFn from '#src/get-fn'

test('get-fn', () => {
  const someFn_string = () => {}
  const someFn_object = () => {}
  const typeToFn = {
    string: someFn_string,
    object: someFn_object,
  }
  const fn = getFn(typeToFn, 'a string', 'argName', 'utilName')
  expect(fn).to.equal(someFn_string)
  expect(getType.argsPerCall).to.deep.equal([['a string']])
  expect(assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
    ['string', 'argName', ['string', 'object'], 'utilName'],
  ])
})
