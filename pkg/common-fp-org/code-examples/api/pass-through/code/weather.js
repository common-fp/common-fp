const forecast = [
  { high: 68, low: 54 },
  { high: 62, low: 50 },
  { high: 63, low: 52 },
  { high: 55, low: 43 },
  { high: 58, low: 49 },
]

const avgLow = passThrough(forecast, [
  mapValues(get('low')),
  getAverageValue,
  roundToNearest('0.1'),
])

console.log(avgLow)
// is 49.6
