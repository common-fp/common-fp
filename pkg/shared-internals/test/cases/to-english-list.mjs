import { expect } from 'chai'
import toEnglishList from '#src/to-english-list'

test('to-english-list', () => {
  expect(toEnglishList('and', ['string'])).to.equal('string')
  expect(toEnglishList('and', ['string', 'number'])).to.equal(
    'string and number'
  )
  expect(toEnglishList('or', ['string', 'number', 'boolean'])).to.equal(
    'string, number or boolean'
  )
})
