import { expect } from 'chai'

import desc from '#lib/compare/dates/with-dates-descending'

test('compare/dates/with-dates-descending', () => {
  const jan14 = new Date('2023 01 14')
  const jan15 = new Date('2023 01 15')
  const jan16 = new Date('2023 01 16')

  expect([jan15, jan14, jan16].sort(desc)).to.deep.equal([jan16, jan15, jan14])
})
