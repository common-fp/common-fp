import { expect } from 'chai'

import defaultNullishValTo from '#lib/default-nullish-val-to'

test('default-nullish-val-to', () => {
  expect(defaultNullishValTo('def')(null)).to.equal('def')
  expect(defaultNullishValTo('def')(undefined)).to.equal('def')
  expect(defaultNullishValTo('def')(false)).to.equal(false)
  expect(defaultNullishValTo('def')('some val')).to.equal('some val')
  expect(defaultNullishValTo('def')('')).to.equal('')
})
