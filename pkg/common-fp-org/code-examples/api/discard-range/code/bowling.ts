type Scores = [string[], ...number[][]]
const scores: Scores = [
  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
  [188, 0, 0, 202, 156],
  [172, 0, 0, 190, 185],
  [206, 0, 0, 167, 191],
]

const tueAndWed = { startIdx: 1, endIdx: 2 }
const discardAbsentScores = discardRange(tueAndWed)<string[] | number[]>
const discardAllAbsentScores = mapValues(discardAbsentScores)<Scores>

const updatedScores = discardAllAbsentScores(scores) as Scores
console.log(updatedScores)
/// is [
///  ['monday', 'thursday', 'friday'],
///  [188, 202, 156],
///  [172, 190, 185],
///  [206, 167, 191],
/// ]
