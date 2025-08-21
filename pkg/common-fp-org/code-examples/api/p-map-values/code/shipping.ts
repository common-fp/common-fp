type ItemDestination = {
  item: string
  destination: string
}

const mockShippingEstimates: Record<string, string> = {
  broom: '2 days',
  mop: '5 days',
  detergent: '1 day',
}

const mockStoreApi = {
  estimateShipping: async ({ item, destination }: ItemDestination) => {
    const shipping = mockShippingEstimates[item]
    return { item, destination, shipping }
  },
}

const userLocation = 'cleveland'
const shoppingCart = ['broom', 'mop', 'detergent']
const estimateShippingPerItem = pMapValues(mockStoreApi.estimateShipping)<
  ItemDestination[]
>
const itemDestinationArgs = shoppingCart.map(item => ({
  item,
  destination: userLocation,
}))
const cartWithShipping = await estimateShippingPerItem(itemDestinationArgs)
console.log(cartWithShipping)
/// prints
/// [
///   {
///     item: broom
///     destination: cleveland
///     shipping: 2 days
///   },
///   {
///     item: mop
///     destination: cleveland
///     shipping: 5 days
///   },
///   {
///     item: detergent
///     destination: cleveland
///     shipping: 1 day
///   },
/// ]
