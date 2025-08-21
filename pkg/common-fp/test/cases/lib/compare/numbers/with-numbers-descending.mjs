import { expect } from 'chai'

import desc from '#lib/compare/numbers/with-numbers-descending'

test('compare/numbers/with-numbers-descending', () => {
  expect([1, 4, 2].sort(desc)).to.deep.equal([4, 2, 1])
})
