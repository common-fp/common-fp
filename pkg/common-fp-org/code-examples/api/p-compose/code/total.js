const mockSalesTax = 0.08
const mockShipping = 10

const mockStoreApi = {
  assignShipping: async order => ({
    ...order,
    shipping: mockShipping,
  }),
  finalizeTotal: async order => ({
    ...order,
    salesTax: mockSalesTax,
    total: order.subtotal * (1 + mockSalesTax) + order.shipping,
  }),
}

const userLocation = 'cleveland'
const shoppingCart = ['broom', 'mop', 'detergent']
const order = {
  cart: shoppingCart,
  destination: userLocation,
  subtotal: 26,
}
const prepForCheckout = pCompose([
  mockStoreApi.assignShipping,
  mockStoreApi.finalizeTotal,
])
const updatedOrder = await prepForCheckout(order)

console.log(updatedOrder)
/// prints
/// {
///   cart: [broom, mop, detergent]
///   destination: cleveland
///   subtotal: 26
///   shipping: 10
///   salesTax: 0.08
///   total: 38.08
/// }
