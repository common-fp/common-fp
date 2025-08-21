type Reports = Record<string, string>
const weatherReportByCountry = {
  spain:
    'Today it will be sunny with a high of 33°.' +
    ' Tomorrow we get a breather, where the high will dip down to 28°.',
  france:
    'Today it will be cloudy with a high of 29°.' +
    ' Tomorrow it clears up but drops down a little with a high of 26°.',
}

const clarifyCelsius = replaceAllMatches(/(?<deg>\d+°)/g, '$<deg>C')
const clarifyReports = mapValues(clarifyCelsius)<Reports>

const { spain, france } = clarifyReports(weatherReportByCountry)
console.log(spain)
/// prints
// Today it will be sunny with a high of 33°C.
// Tomorrow we get a breather, where the high will dip down to 28°C.

console.log('\n' + france)
/// prints
// Today it will be cloudy with a high of 29°C.
// Tomorrow it clears up but drops down a little with a high of 26°C.
