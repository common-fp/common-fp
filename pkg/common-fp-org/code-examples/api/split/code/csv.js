const csv = `day,high,low
monday,86,74
tuesday,84,73
wednesday,89,75`

const splitRows = split('\n')
const splitCols = split(',')
const parseData = compose([splitRows, mapValues(splitCols)])

const forecastData = parseData(csv)
console.log(forecastData)
/// is [
///   [day, high, low]
///   [monday, 86, 74]
///   [tuesday, 84, 73]
///   [wednesday, 89, 75]
/// ]
