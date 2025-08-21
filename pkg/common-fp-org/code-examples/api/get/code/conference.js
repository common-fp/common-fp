const attendees = [
  { first: 'liz', last: 'brown' },
  { first: 'phil', last: 'smith' },
  { first: 'mary', last: 'garcia' },
]

const getFirstName = get('first')
const getAllFirstNames = mapValues(getFirstName)
const firstNames = getAllFirstNames(attendees)
console.log(firstNames)
/// is [
///   liz,
///   phil,
///   mary,
/// ]
