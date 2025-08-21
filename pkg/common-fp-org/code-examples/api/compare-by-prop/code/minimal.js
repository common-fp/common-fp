const people = [{ name: 'mike' }, { name: 'emma' }, { name: 'luke' }]
const ascending = (left, right) => left.localeCompare(right)
const byName = compareByProp('name', ascending)

const sortedPeople = people.toSorted(byName)
console.log(sortedPeople)
/// is [
///  { name: 'emma' },
///  { name: 'luke' },
///  { name: 'mike' },
/// ]
