import { expect } from 'chai'

import defaultFalseyValTo from '#lib/default-falsey-val-to'

test('default-falsey-val-to', () => {
  expect(defaultFalseyValTo('def')(null)).to.equal('def')
  expect(defaultFalseyValTo('def')(undefined)).to.equal('def')
  expect(defaultFalseyValTo('def')(false)).to.equal('def')
  expect(defaultFalseyValTo('def')('some val')).to.equal('some val')
  expect(defaultFalseyValTo('def')('')).to.equal('def')
})
