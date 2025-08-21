type Order = Record<string, Record<string, number>>
const order: Order = {
  jen: {
    'eggs and more': 9.5,
    coffee: 2,
  },
  mike: {
    'chicken and waffles': 11,
    espresso: 3,
  },
}

const getSubtotal = compose([mapValues(sumValues)<Order>, sumValues])

const subtotal = getSubtotal(order)
console.log(subtotal) // is 25.5
