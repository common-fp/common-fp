type Classrooms = Record<string, string[]>
const classrooms: Classrooms = {
  A: ['ken roberts', 'chris reyes', 'liz brown'],
  B: ['phil smith', 'mary garcia', 'sarah miller'],
  C: ['matt davis', 'chris taylor', 'amy moore'],
}

const startsWithChris = startsWith('chris ')
const roomHasChris = any(startsWithChris)<string[]>
const getRoomsWithChris = compose([
  keepWhen(roomHasChris)<Classrooms>,
  Object.keys,
])

const roomsToCheck = getRoomsWithChris(classrooms)
console.log(roomsToCheck) // is [A, C]
