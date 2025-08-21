const scores = {
  jen: 72,
  mike: 88,
  luke: 93,
}
const getRoundedAvg = compose([getAverageValue, roundToNearest('0.1')])
const roundedAvg = getRoundedAvg(scores)
console.log(roundedAvg) // is 84.3
