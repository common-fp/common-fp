const cansProducedHourly = [2984, 3012, 3007, 2995, 3001, 3009]

const hours3Thru5 = { startIdx: 2, endIdx: 4 }
const clearBadCans = mFillRangeWith(0, hours3Thru5)
clearBadCans(cansProducedHourly)
console.log(cansProducedHourly)
/// is [2984, 3012, 0, 0, 0, 3009]
