const results = [
  { name: 'sarah', time: 15.926 },
  { name: 'matt', time: 16.143 },
  { name: 'jason', time: 15.907 },
]

const roundToHundredth = roundToNearest('0.01')
const roundTime = result => ({
  ...result,
  time: roundToHundredth(result.time),
})
const roundResults = mapValues(roundTime)
const roundedResults = roundResults(results)

console.log(roundedResults)
/// is [
///   { name: sarah, time: 15.93 }
///   { name: matt, time: 16.14 }
///   { name: jason, time: 15.91 }
/// ]
