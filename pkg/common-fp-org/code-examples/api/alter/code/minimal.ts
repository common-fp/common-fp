type StatsArr = [string, number, number]
type StatsTable = [string[], ...StatsArr[]]

const table: StatsTable = [
  ['name', 'goals', 'assists'],
  ['phil', 1, 0],
  ['mary', 0, 2],
  ['sarah', 2, 1],
]
const [_headers, ...stats] = table

type StatsObj = {
  goals: number
  assists: number
}
type StatsByPlayer = Record<string, StatsObj>

const makeEmptyObj = () => ({}) as StatsByPlayer
const toStatsObj = (statsObj: StatsByPlayer, statsArr: StatsArr) => {
  const [name, goals, assists] = statsArr
  statsObj[name] = { goals, assists }
  return statsObj
}

const makeStatsObj = alter(toStatsObj, makeEmptyObj)<StatsArr[]>
const statsObj = makeStatsObj(stats)
console.log(statsObj)
/// is {
///   phil: { goals: 1, assists: 0 },
///   mary: { goals: 0, assists: 2 },
///   sarah: { goals: 2, assists: 1 }
/// }
