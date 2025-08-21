type Row = Array<string | number>
const statsByReceiver: Row[] = [
  ['receiver', 'targets', 'receptions', 'yards', 'touchdowns'],
  ['a.j. brown', 11, 8, 110, 1],
  ['devonta smith', 12, 11, 109, 1],
]

const recAndYds = { startIdx: 2, endIdx: 3 }
const keepRecAndYds = mKeepRange(recAndYds)<Row>
const trim = forEach(keepRecAndYds)<Row[]>
trim(statsByReceiver)

type MetricStats = [string, ...number[]]
const statsByMetric = transpose(statsByReceiver) as MetricStats[]

const format = (metricStats: MetricStats) => {
  const [metric, ...stats] = metricStats
  const total = sumValues(stats)
  return `  ${metric}: ${total}`
}
const getTotals = compose([
  mapValues(format)<MetricStats[]>,
  prependOne('A.J. Brown and DeVonta Smith combined for'),
  joinValues('\n'),
])
const totals = getTotals(statsByMetric)
console.log(totals)
/// prints
/// A.J. Brown and DeVonta Smith combined for
///  receptions: 19
///  yards: 219
