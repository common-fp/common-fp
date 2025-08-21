import { expect } from 'chai'

import desc from '#lib/compare/strings/with-strings-descending'

test('compare/strings/with-strings-descending', () => {
  expect(['Ab', 'ac', 'AC', 'aB'].sort(desc)).to.deep.equal([
    'AC',
    'ac',
    'Ab',
    'aB',
  ])
})
