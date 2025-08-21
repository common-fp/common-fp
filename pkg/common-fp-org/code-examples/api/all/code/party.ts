type ClassroomScores = Record<string, number[]>

const classroomScores: ClassroomScores = {
  A: [92, 98, 73],
  B: [95, 83, 88],
}

const gte80 = (n: number) => n >= 80
const earnsParty = all(gte80)<number[]>

const getRoomsEarningParty = compose([
  keepWhen(earnsParty)<ClassroomScores>,
  Object.keys,
])
const rooms = getRoomsEarningParty(classroomScores)
console.log(rooms) // is [B]
