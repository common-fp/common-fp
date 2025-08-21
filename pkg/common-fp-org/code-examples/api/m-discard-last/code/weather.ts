type Row = Array<string | number>
type WeatherData = Row[]
const [_headers, ...weatherData]: [string[], ...WeatherData] = [
  ['date', 'low', 'high', 'wind', 'climate'],
  ['2025-04-08', 35, 50, 15, 'sunny'],
  ['2025-04-09', 40, 55, 10, 'cloudy'],
  ['2025-04-10', 38, 52, 12, 'rain shower'],
]

const discardWindAndClimate = mDiscardLast(2)<Row>
const discardAllWindAndClimate = forEach(discardWindAndClimate)<WeatherData>
discardAllWindAndClimate(weatherData)
console.log(weatherData)
/// is [
///  ['2025-04-08', 35, 50],
///  ['2025-04-09', 40, 55],
///  ['2025-04-10', 38, 52],
/// ]
