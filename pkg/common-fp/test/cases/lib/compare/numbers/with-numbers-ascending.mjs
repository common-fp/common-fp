import { expect } from 'chai'

import asc from '#lib/compare/numbers/with-numbers-ascending'

test('compare/numbers/with-numbers-ascending', () => {
  expect([3, 1, 2].sort(asc)).to.deep.equal([1, 2, 3])
})
