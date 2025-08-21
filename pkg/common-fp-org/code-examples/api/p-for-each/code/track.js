const mockStoreApi = {
  trackCartItem: async ({ item, user }) => {
    console.log(`item '${item}' is in ${user}'s cart`)
  },
}

const currentUser = 'luke'
const shoppingCart = ['broom', 'mop', 'detergent']
const trackAllCartItems = pForEach(mockStoreApi.trackCartItem)
const itemUserArgs = shoppingCart.map(item => ({ item, user: currentUser }))
await trackAllCartItems(itemUserArgs)
