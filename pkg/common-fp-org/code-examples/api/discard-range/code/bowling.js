const scores = [
  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
  [188, 0, 0, 202, 156],
  [172, 0, 0, 190, 185],
  [206, 0, 0, 167, 191],
]

const tueAndWed = { startIdx: 1, endIdx: 2 }
const discardAbsentScores = discardRange(tueAndWed)
const discardAllAbsentScores = mapValues(discardAbsentScores)

const updatedScores = discardAllAbsentScores(scores)
console.log(updatedScores)
/// is [
///  ['monday', 'thursday', 'friday'],
///  [188, 202, 156],
///  [172, 190, 185],
///  [206, 167, 191],
/// ]
