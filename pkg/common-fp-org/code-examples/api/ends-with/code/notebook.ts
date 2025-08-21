type Classrooms = Record<string, string[]>
const classrooms: Classrooms = {
  A: ['phil smith', 'mary garcia', 'sarah miller'],
  B: ['matt davis', 'jason taylor', 'amy moore'],
  C: ['kim white', 'grace walker', 'sam davis'],
}

const endsWithDavis = endsWith(' davis')
const roomHasDavis = any(endsWithDavis)<string[]>
const getRoomsWithDavis = compose([
  keepWhen(roomHasDavis)<Classrooms>,
  Object.keys,
])

const roomsToCheck = getRoomsWithDavis(classrooms)
console.log(roomsToCheck) // is [B, C]
