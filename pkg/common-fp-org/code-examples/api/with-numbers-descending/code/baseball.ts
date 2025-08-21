type Player = {
  name: string
  homeRuns: number
  strikeouts: number
}

const players: Player[] = [
  {
    name: 'Shohei Ohtani',
    homeRuns: 38,
    strikeouts: 125,
  },
  {
    name: 'Cal Raleigh',
    homeRuns: 41,
    strikeouts: 116,
  },
  {
    name: 'Aaron Judge',
    homeRuns: 37,
    strikeouts: 120,
  },
]

const byHomeRunsDesc = compareByProp('homeRuns', withNumbersDescending)<Player>
const orderPlayers = order(byHomeRunsDesc)
const updatedPlayers = orderPlayers(players)
console.log(updatedPlayers)
/// is [
///   {
///     name: Cal Raleigh
///     homeRuns: 41
///     strikeouts: 116
///   }
///   {
///     name: Shohei Ohtani
///     homeRuns: 38
///     strikeouts: 125
///   }
///   {
///     name: Aaron Judge
///     homeRuns: 37
///     strikeouts: 120
///   }
/// ]
