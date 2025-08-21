const people = [
  { name: { first: 'mike' } },
  { name: { first: 'emma' } },
  { name: { first: 'luke' } },
]
const path = ['name', 'first']
const ascending = (left, right) => left.localeCompare(right)
const byFirstName = compareByPath(path, ascending)

const sortedPeople = people.toSorted(byFirstName)
console.log(sortedPeople)
/// is [
///  { name: { first: 'emma' } },
///  { name: { first: 'luke' } },
///  { name: { first: 'mike' } },
/// ]
