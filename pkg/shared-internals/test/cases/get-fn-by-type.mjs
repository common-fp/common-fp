import { expect } from 'chai'
import assertArgTypeIsOneOf from '#test/spies/assert-arg-type-is-one-of'

const getFnByType = (await import('#src/get-fn-by-type')).default

test('get-fn-by-type', () => {
  const someFn_string = () => {}
  const someFn_object = () => {}
  const typeToFn = {
    string: someFn_string,
    object: someFn_object,
  }
  const fn = getFnByType(typeToFn, 'string', 'argName', 'utilName')
  expect(fn).to.equal(someFn_string)
  expect(assertArgTypeIsOneOf.argsPerCall).to.deep.equal([
    ['string', 'argName', ['string', 'object'], 'utilName'],
  ])
})
