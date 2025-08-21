const companyByStock = {
  NVDA: 'NVIDIA',
  AAPL: 'Apple',
}
const stockByCompany = invert(companyByStock)
const stockPrices = {
  AAPL: 200,
  NVDA: 150,
}

const formatPrice = (price, stock) => {
  const company = companyByStock[stock]
  return `  ${company} - $${price}`
}
const formatAllPrices = mapValues(formatPrice)
const createReport = compose([
  formatAllPrices,
  joinValues('\n'),
  prepend('Company Stock Prices\n'),
])
const report = createReport(stockPrices)
console.log(report)
/// is
/// Company Stock Prices
///   Apple - $200
///   Nvidia - $150

const getPriceForCompany = company => {
  const stock = stockByCompany[company]
  return stockPrices[stock]
}

const price = getPriceForCompany('Apple')
console.log(price) // is 200
