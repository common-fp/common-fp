import { expect } from 'chai'

import returnFirstArg from '#lib/return-first-arg'

test('return-first-arg', () => {
  const obj = { a: 1 }
  expect(returnFirstArg(obj, 2)).to.equal(obj)
})
