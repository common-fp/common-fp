type Item = {
  name: string
  price: number
}
type Dinner = Record<string, Item[]>
const dinner: Dinner = {
  phil: [
    { name: 'chicken sandwich', price: 10.5 },
    { name: 'cheese curds', price: 6 },
    { name: 'soda', price: 2.25 },
  ],
  mary: [
    { name: 'reuben', price: 12.25 },
    { name: 'fries', price: 3 },
    { name: 'soda', price: 2.25 },
  ],
}

const addTax = multiplyBy(1.05)
const getPrice = get('price')<Item>
const getBill = compose([
  mapValues(getPrice)<Item[]>,
  sumValues,
  addTax,
  roundToNearest('0.01'),
])
const getEachBill = mapValues(getBill)<Dinner>
const bills = getEachBill(dinner)
console.log(bills)
/// is {
///   phil: 19.69
///   mary: 18.38
/// }
