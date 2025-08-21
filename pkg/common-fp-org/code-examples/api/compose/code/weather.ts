type Forecast = {
  high: number
  low: number
}

const fiveDayForecast: Forecast[] = [
  { high: 68, low: 54 },
  { high: 62, low: 50 },
  { high: 63, low: 52 },
  { high: 55, low: 43 },
  { high: 58, low: 49 },
]

const getAvgLow = compose([
  mapValues(get('low'))<Forecast[]>,
  getAverageValue,
  roundToNearest('0.1'),
])

const avgLow = getAvgLow(fiveDayForecast)
console.log(avgLow)
// is 49.6
