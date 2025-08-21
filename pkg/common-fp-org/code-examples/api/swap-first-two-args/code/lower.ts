import { mapKeys, swapFirstTwoArgs as byKey } from 'common-fp'

type Checkouts = Record<string, string[]>
const checkouts: Checkouts = {
  Emma: ['The Very Hungry Caterpillar'],
  Meg: ['The Hobbit'],
}

const toLower = (str: string) => str.toLowerCase()
const lowerKey = byKey(toLower)
const lowerAllKeys = mapKeys(lowerKey)<Checkouts>
const updatedCheckouts = lowerAllKeys(checkouts)

console.log(updatedCheckouts)
/// is {
///   emma: [The Very Hungry Caterpillar]
///   meg: [The Hobbit]
/// }
