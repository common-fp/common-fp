const players = [
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

const byStrikeoutsAsc = compareByProp('strikeouts', withNumbersAscending)
const orderPlayers = order(byStrikeoutsAsc)
const updatedPlayers = orderPlayers(players)
console.log(updatedPlayers)
/// is [
///   {
///     name: Cal Raleigh
///     homeRuns: 41
///     strikeouts: 116
///   }
///   {
///     name: Aaron Judge
///     homeRuns: 37
///     strikeouts: 120
///   }
///   {
///     name: Shohei Ohtani
///     homeRuns: 38
///     strikeouts: 125
///   }
/// ]
