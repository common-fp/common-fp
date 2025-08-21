const orders = {
  emma: [
    { name: 'chicken wrap', cost: 12 },
    { name: 'fries', cost: 4 },
  ],
  meg: [
    { name: 'salad', cost: 10 },
    { name: 'soup', cost: 5 },
  ],
}

const addSalesTax = multiplyBy(1.05)

const logAfterCost = value => {
  console.log('after cost\n', value)
}
const logAfterMax = value => {
  console.log('after max\n', value)
}

const toBill = compose([
  mapValues(get('cost')),
  peek(logAfterCost),
  getMaxValue,
  peek(logAfterMax),
  addSalesTax,
  roundToNearest('0.01'),
])

const calculateBills = mapValues(toBill)
const bills = calculateBills(orders)
console.log(bills)
/// is {
///   emma: 12.6,
///   meg: 10.5,
/// }
///
/// should be {
///   emma: 16.8,
///   meg: 15.75,
/// }
