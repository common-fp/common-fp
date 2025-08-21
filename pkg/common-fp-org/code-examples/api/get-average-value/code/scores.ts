type Scores = Record<string, number>
const scores: Scores = {
  jen: 72,
  mike: 88,
  luke: 93,
}
const getRoundedAvg = compose([getAverageValue<Scores>, roundToNearest('0.1')])
const roundedAvg = getRoundedAvg(scores)
console.log(roundedAvg) // is 84.3
