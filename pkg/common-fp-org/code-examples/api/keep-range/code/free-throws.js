const dailyFreeThrowsPerWeek = [
  [0, 3, 6, 4, 5, 4, 0],
  [0, 6, 4, 8, 3, 5, 0],
  [0, 7, 5, 6, 8, 5, 0],
]

const keepWeekdays = keepRange({ startIdx: 1, endIdx: 5 })
const getAverageFreeThrows = compose([
  mapValues(keepWeekdays),
  flattenOnce,
  getAverageValue,
  roundToNearest('0.1'),
])
const averageFreeThrows = getAverageFreeThrows(dailyFreeThrowsPerWeek)
console.log(averageFreeThrows)
/// is 5.3
