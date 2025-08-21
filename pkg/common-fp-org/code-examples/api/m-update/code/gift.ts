type Account = {
  name: string
  books: string[]
}
const friend: Account = {
  name: 'luke',
  books: ['Player Piano'],
}

const addCatsCradle = mAppendOne("Cat's Cradle")
const giftCatsCradleTo = mUpdate({ books: addCatsCradle })<Account>

giftCatsCradleTo(friend)
console.log(friend)
/// is {
///   name: luke
///   cart: [cozy gloves, alligator socks
/// }
