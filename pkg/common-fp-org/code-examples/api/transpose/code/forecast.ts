const weatherByMetric = [
  ['metric', 'Mon', 'Tue', 'Wed'],
  ['high', 68, 65, 61],
  ['low', 55, 54, 50],
]

type Forecast = [string, number, number]
type WeatherByDay = [string[], ...Forecast[]]
const weatherByDay = transpose(weatherByMetric) as WeatherByDay
const [_names, ...numbersByDay] = weatherByDay

const format = ([day, high, low]: Forecast) => {
  return [day, `  high: ${high}`, `  low: ${low}`].join('\n')
}

const getReport = compose([
  mapValues(format)<Forecast[]>,
  joinValues('\n'),
  prepend('Three Day Forecast\n'),
])
const report = getReport(numbersByDay)
console.log(report)
/// prints
/// Three Day Forecast
/// Mon
///   high: 68
///   low: 55
/// Tue
///   high: 65
///   low: 54
/// Wed
///   high: 61
///   low: 50
