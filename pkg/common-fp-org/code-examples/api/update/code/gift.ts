type Account = {
  name: string
  books: string[]
}
const friend: Account = {
  name: 'luke',
  books: ['Player Piano'],
}

const addCatsCradle = appendOne("Cat's Cradle")
const giftCatsCradleTo = update({ books: addCatsCradle })<Account>

const updatedFriend = giftCatsCradleTo(friend)
console.log(updatedFriend)
/// is {
///   name: luke
///   cart: [Player Piano, Cat's Cradle]
/// }
