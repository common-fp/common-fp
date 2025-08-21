const [_headers, ...chessResults] = [
  ['name', 'email', 'result', 'color'],
  ['luke', 'luke@example.com', 'win', 'white'],
  ['emma', 'emma@example.com', 'draw', 'black'],
]

const discardPersonalInfo = discardFirst(2)
const discardAllPersonalInfo = mapValues(discardPersonalInfo)

const updatedResults = discardAllPersonalInfo(chessResults)
console.log(updatedResults)
/// is [
///   ['win', 'white'],
///   ['draw', 'black'],
/// ]
