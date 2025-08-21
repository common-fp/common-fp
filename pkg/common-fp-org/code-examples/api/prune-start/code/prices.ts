const rawPricesFound = ['$24.50', '22.99', '• $28.00']

const getPrice = compose([pruneStart([' ', '•', '$']), Number])
const getBestPrice = compose([mapValues(getPrice)<string[]>, getMinValue])

const bestPrice = getBestPrice(rawPricesFound)
console.log(bestPrice)
// is 22.99
