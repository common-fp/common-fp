type ItemUser = {
  item: string
  user: string
}

const mockStoreApi = {
  trackCartItem: async ({ item, user }: ItemUser) => {
    console.log(`item '${item}' is in ${user}'s cart`)
  },
}

const currentUser = 'luke'
const shoppingCart = ['broom', 'mop', 'detergent']
const trackAllCartItems = pForEach(mockStoreApi.trackCartItem)<ItemUser[]>
const itemUserArgs = shoppingCart.map(item => ({ item, user: currentUser }))
await trackAllCartItems(itemUserArgs)
