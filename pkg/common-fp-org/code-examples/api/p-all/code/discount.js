const itemsInStock = new Set(['shoes', 'broom', 'mop', 'socks', 'detergent'])

const storeApi = {
  inStock: async item => itemsInStock.has(item),
}

const allInStock = pAll(storeApi.inStock)
const shoppingCart = ['broom', 'mop', 'detergent']
const showPickupDiscount = await allInStock(shoppingCart)

console.log(showPickupDiscount) // is true
