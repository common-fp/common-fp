const [_headers, ...chessResults] = [
  ['name', 'email', 'result', 'color'],
  ['luke', 'luke@example.com', 'win', 'white'],
  ['emma', 'emma@example.com', 'draw', 'black'],
]

const discardPersonalInfo = discardFirst(2)<string[]>
const discardAllPersonalInfo = mapValues(discardPersonalInfo)<string[][]>

const updatedResults = discardAllPersonalInfo(chessResults)
console.log(updatedResults)
/// is [
///   ['win', 'white'],
///   ['draw', 'black'],
/// ]
