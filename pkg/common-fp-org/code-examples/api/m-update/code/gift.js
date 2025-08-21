const friend = {
  name: 'luke',
  books: ['Player Piano'],
}

const addCatsCradle = mAppendOne("Cat's Cradle")
const giftCatsCradleTo = mUpdate({ books: addCatsCradle })

giftCatsCradleTo(friend)
console.log(friend)
/// is {
///   name: luke
///   books: [Player Piano, Cat's Cradle]
/// }
