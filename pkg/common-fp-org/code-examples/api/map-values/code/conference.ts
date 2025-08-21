type Person = { first: string; last: string }
const attendees: Person[] = [
  { first: 'liz', last: 'brown' },
  { first: 'phil', last: 'smith' },
  { first: 'mary', last: 'garcia' },
]

const getFirstName = get('first')<Person>
const getAllFirstNames = mapValues(getFirstName)<Person[]>
const firstNames = getAllFirstNames(attendees)
console.log(firstNames)
/// is [
///   liz,
///   phil,
///   mary,
/// ]
