import { expect } from 'chai'
import aOrAn from '#src/a-or-an'

test('a-or-an', () => {
  expect(aOrAn('slice of bread')).to.equal('a slice of bread')
  expect(aOrAn('oven')).to.equal('an oven')
})
