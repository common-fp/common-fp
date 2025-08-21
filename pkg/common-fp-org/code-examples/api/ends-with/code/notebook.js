const classrooms = {
  A: ['phil smith', 'mary garcia', 'sarah miller'],
  B: ['matt davis', 'jason taylor', 'amy moore'],
  C: ['kim white', 'grace walker', 'sam davis'],
}

const endsWithDavis = endsWith(' davis')
const roomHasDavis = any(endsWithDavis)
const getRoomsWithDavis = compose([keepWhen(roomHasDavis), Object.keys])

const roomsToCheck = getRoomsWithDavis(classrooms)
console.log(roomsToCheck) // is [B, C]
