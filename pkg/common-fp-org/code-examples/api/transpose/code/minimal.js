const salesByQuarter = [
  ['region', 'europe', 'america'],
  ['quarter 1', '52,000', '113,000'],
  ['quarter 2', '58,000', '127,000'],
]
const salesByRegion = transpose(salesByQuarter)
console.log(salesByRegion)
/// is [
///   [region, quarter 1, quarter 2]
///   [europe, 52,000, 58,000]
///   [america, 113,000, 127,000]
/// ]
