import { mapKeys, swapFirstTwoArgs as byKey } from 'common-fp'

const checkedOutBooks = {
  Emma: ['The Very Hungry Caterpillar'],
  Meg: ['The Hobbit'],
}

const toLower = str => str.toLowerCase()
const lowerKey = byKey(toLower)
const lowerAllKeys = mapKeys(lowerKey)
const checkouts = lowerAllKeys(checkedOutBooks)

console.log(checkouts)
/// is {
///   emma: [The Very Hungry Caterpillar]
///   meg: [The Hobbit]
/// }
