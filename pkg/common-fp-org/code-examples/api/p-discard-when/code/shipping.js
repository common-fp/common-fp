const mockStoreApi = {
  hasFreeShipping: async item => item === 'detergent',
}

const shoppingCart = ['broom', 'mop', 'detergent']
const discardFreeShippingItems = pDiscardWhen(mockStoreApi.hasFreeShipping)

const itemsWithShippingCharge = await discardFreeShippingItems(shoppingCart)
console.log(itemsWithShippingCharge)
/// is ['broom', 'mop']
