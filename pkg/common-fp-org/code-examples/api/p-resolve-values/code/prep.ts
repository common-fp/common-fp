type Order = {
  cart: string[]
  destination: string
  salesTax: number
  shipping: number
}

const mockSalesTax = 0.08
const mockShipping = 10

const mockStoreApi = {
  getSalesTax: async (_order: Order) => mockSalesTax,
  getShipping: async (_order: Order) => mockShipping,
}

const prepOrder = async (order: Order) =>
  pResolveValues({
    ...order,
    salesTax: mockStoreApi.getSalesTax(order),
    shipping: mockStoreApi.getShipping(order),
  })

const userLocation = 'cleveland'
const shoppingCart = ['broom', 'mop', 'detergent']
const order = {
  cart: shoppingCart,
  destination: userLocation,
} as Order
const updatedOrder = await prepOrder(order)

console.log(updatedOrder)
/// prints
/// {
///   cart: [broom, mop, detergent]
///   destination: cleveland
///   shipping: 10
///   salesTax: 0.08
/// }
