const dinner = {
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
const getBill = compose([
  mapValues(get('price')),
  sumValues,
  addTax,
  roundToNearest('0.01'),
])
const getEachBill = mapValues(getBill)
const bills = getEachBill(dinner)
console.log(bills)
/// is {
///   phil: 19.69
///   mary: 18.38
/// }
