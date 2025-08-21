const statsByReciever = [
  ['receiver', 'targets', 'receptions', 'yards', 'touchdowns'],
  ['a.j. brown', 11, 8, 110, 1],
  ['devonta smith', 12, 11, 109, 1],
]

const recAndYds = { startIdx: 2, endIdx: 3 }
const keepRecAndYds = mKeepRange(recAndYds)
const trim = forEach(keepRecAndYds)
trim(statsByReciever)

const statsByMetric = transpose(statsByReciever)
const format = ([metric, ...stats]) => {
  const total = sumValues(stats)
  return `  ${metric}: ${total}`
}
const getTotals = compose([
  mapValues(format),
  prependOne('A.J. Brown and DeVonta Smith combined for'),
  joinValues('\n'),
])
const totals = getTotals(statsByMetric)
console.log(totals)
/// prints
/// A.J. Brown and DeVonta Smith combined for
///   receptions: 19
///   yards: 219
