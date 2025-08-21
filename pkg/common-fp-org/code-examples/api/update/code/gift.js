const friend = {
  name: 'luke',
  books: ['Player Piano'],
}

const addCatsCradle = appendOne("Cat's Cradle")
const giftCatsCradleTo = update({ books: addCatsCradle })

const updatedFriend = giftCatsCradleTo(friend)
console.log(updatedFriend)
/// is {
///   name: luke
///   books: [Player Piano, Cat's Cradle]
/// }
