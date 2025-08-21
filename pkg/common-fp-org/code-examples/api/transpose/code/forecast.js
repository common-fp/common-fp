const weatherByMeasurement = [
  ['measurement', 'Mon', 'Tue', 'Wed'],
  ['high', 68, 65, 61],
  ['low', 55, 54, 50],
]

const weatherByDay = transpose(weatherByMeasurement)
const [_names, ...numbersByDay] = weatherByDay

const format = ([day, high, low]) => {
  return [day, `  high: ${high}`, `  low: ${low}`].join('\n')
}

const getReport = compose([
  mapValues(format),
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
