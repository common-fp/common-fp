const [_headers, ...stats] = [
  ['name', 'goals', 'assists'],
  ['phil', 1, 0],
  ['mary', 0, 2],
  ['sarah', 2, 1],
]

const makeEmptyObj = () => ({})
const toStatsObj = (statsObj, statsArr) => {
  const [name, goals, assists] = statsArr
  statsObj[name] = { goals, assists }
  return statsObj
}

const makeStatsObj = alter(toStatsObj, makeEmptyObj)
const statsObj = makeStatsObj(stats)
console.log(statsObj)
/// is {
///   phil: { goals: 1, assists: 0 },
///   mary: { goals: 0, assists: 2 },
///   sarah: { goals: 2, assists: 1 }
/// }
