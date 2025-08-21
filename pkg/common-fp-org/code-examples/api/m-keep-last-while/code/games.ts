type Game = {
  name: string
  numSold: number
}
const games: Game[] = [
  { name: 'coup', numSold: 68 },
  { name: 'camel up', numSold: 52 },
  { name: 'battle sheep', numSold: 35 },
  { name: 'mastermind', numSold: 27 },
]

const soldUnder50 = ({ numSold }: Game) => numSold < 50
const keepGamesToRotateOut = mKeepLastWhile(soldUnder50)
keepGamesToRotateOut(games)
const getName = get('name')<Game>
const getAllNames = mapValues(getName)<Game[]>
const gamesToRotateOut = getAllNames(games)
console.log(gamesToRotateOut)
/// is [
///   battle sheep
///   mastermind
/// ]
