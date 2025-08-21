const hourlyVisitors = [108, 125, 149, 163, 8692, 9154, 312, 356]

const hours5and6 = { startIdx: 4, endIdx: 5 }
const removeBotVisitors = mDiscardRange(hours5and6)
removeBotVisitors(hourlyVisitors)

const getAverageVisitors = compose([getAverageValue, roundToNearest('1')])

const hourlyAverage = getAverageVisitors(hourlyVisitors)
console.log(hourlyAverage) // is 202
