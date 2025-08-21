const classroomScores = {
  A: [92, 98, 73],
  B: [95, 83, 88],
}

const gte80 = n => n >= 80
const earnsParty = all(gte80)

const getRoomsEarningParty = compose([keepWhen(earnsParty), Object.keys])
const rooms = getRoomsEarningParty(classroomScores)
console.log(rooms) // is [B]
