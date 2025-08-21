const order = {
  jen: {
    'eggs and more': 9.5,
    coffee: 2,
  },
  mike: {
    'chicken and waffles': 11,
    espresso: 3,
  },
}

const getSubtotal = compose([mapValues(sumValues), sumValues])

const subtotal = getSubtotal(order)
console.log(subtotal) // is 25.50
