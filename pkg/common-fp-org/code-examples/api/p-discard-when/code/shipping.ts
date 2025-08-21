const mockStoreApi = {
  hasFreeShipping: async (item: string) => item === 'detergent',
}

const shoppingCart = ['broom', 'mop', 'detergent']
const discardFreeShippingItems = pDiscardWhen(mockStoreApi.hasFreeShipping)<
  string[]
>

const itemsWithShippingCharge = await discardFreeShippingItems(shoppingCart)
console.log(itemsWithShippingCharge)
/// is ['broom', 'mop']
