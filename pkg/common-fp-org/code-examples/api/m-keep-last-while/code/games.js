const games = [
  { name: 'coup', numSold: 68 },
  { name: 'camel up', numSold: 52 },
  { name: 'battle sheep', numSold: 35 },
  { name: 'mastermind', numSold: 27 },
]

const soldUnder50 = ({ numSold }) => numSold < 50
const keepGamesToRotateOut = mKeepLastWhile(soldUnder50)
keepGamesToRotateOut(games)
const getNames = mapValues(get('name'))
const gamesToRotateOut = getNames(games)
console.log(gamesToRotateOut)
/// is [
///   battle sheep
///   mastermind
/// ]
