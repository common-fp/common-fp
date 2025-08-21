type Person = {
  name: { first: string }
}
const people: Person[] = [
  { name: { first: 'mike' } },
  { name: { first: 'emma' } },
  { name: { first: 'luke' } },
]
const path = ['name', 'first']
const ascending = (left: string, right: string) => left.localeCompare(right)
const byFirstName = compareByPath(path, ascending)<Person>

const sortedPeople = people.toSorted(byFirstName)
console.log(sortedPeople)
/// is [
///  { name: { first: 'emma' } },
///  { name: { first: 'luke' } },
///  { name: { first: 'mike' } },
/// ]
