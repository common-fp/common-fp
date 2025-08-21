import { expect } from 'chai'

import asc from '#lib/compare/strings/with-strings-ascending'

test('compare/strings/with-strings-ascending', () => {
  expect(['Ab', 'AC', 'aB', 'ac'].sort(asc)).to.deep.equal([
    'aB',
    'Ab',
    'ac',
    'AC',
  ])
})
