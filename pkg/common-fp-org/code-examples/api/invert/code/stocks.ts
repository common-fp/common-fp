type Stock = 'NVDA' | 'AAPL'
type Company = 'NVIDIA' | 'Apple'

const companyByStock = {
  NVDA: 'NVIDIA',
  AAPL: 'Apple',
} as const
const stockByCompany = invert(companyByStock)
const stockPrices: Record<Stock, number> = {
  AAPL: 200,
  NVDA: 150,
}

const formatPrice = (price: number, stock: Stock) => {
  const company = companyByStock[stock]
  return `  ${company} - $${price}`
}
const formatAllPrices = mapValues(formatPrice)<Record<Stock, number>>
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

const getPriceForCompany = (company: Company) => {
  const stock = stockByCompany[company]
  return stockPrices[stock]
}

const price = getPriceForCompany('Apple')
console.log(price) // is 200
