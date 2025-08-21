const people = {
  amy: {
    age: 19,
  },
  kim: {
    age: 13,
  },
  grace: {
    age: 20,
  },
}

const isTeen = compose([get('age'), numberIsBetween(13, 19)])
const applyTeenDiscount = person => ({
  ...person,
  getsTeenDiscount: isTeen(person),
})

const applyTeenDiscountToAll = mapValues(applyTeenDiscount)
const updatedPeople = applyTeenDiscountToAll(people)
console.log(updatedPeople)
/// is {
///   amy: {
///     age: 19,
///     getsTeenDiscount: true,
///   },
///   kim: {
///     age: 13,
///     getsTeenDiscount: true,
///   },
///   grace: {
///     age: 20,
///     getsTeenDiscount: false,
///   },
/// }
