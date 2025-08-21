type Item = {
  name: string
  cost: number
}
type Orders = Record<string, Item[]>
const orders: Orders = {
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

const logAfterCost = (value: unknown) => {
  console.log('after cost\n', value)
}
const logAfterMax = (value: unknown) => {
  console.log('after max\n', value)
}

const getCost = get('cost')<Item>
const toBill = compose([
  mapValues(getCost)<Item[]>,
  peek(logAfterCost),
  getMaxValue,
  peek(logAfterMax),
  addSalesTax,
  roundToNearest('0.01'),
])

const calculateBills = mapValues(toBill)<Orders>
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
