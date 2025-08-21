type Person = {
  age: number
  getsTeenDiscount?: boolean
}
type People = Record<string, Person>
const people: People = {
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

const isTeen = compose([get('age')<Person>, numberIsBetween(13, 19)])
const applyTeenDiscount = (person: Person) => ({
  ...person,
  getsTeenDiscount: isTeen(person),
})

const applyTeenDiscountToAll = mapValues(applyTeenDiscount)<People>
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
