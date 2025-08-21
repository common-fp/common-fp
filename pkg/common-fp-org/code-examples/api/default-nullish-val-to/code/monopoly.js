const players = {
  sam: 2000,
  jen: 0,
  mike: undefined,
}

const defaultTo1500 = defaultNullishValTo(1500)
const assignStartingMoney = mapValues(defaultTo1500)
const updatedPlayers = assignStartingMoney(players)

console.log(updatedPlayers)
/// a new object {
///   sam: 2000,
///   jen: 0,
///   mike: 1500,
/// }
