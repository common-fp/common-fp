const mockStoreApi = {
  qualifiesForDiscount: async ({ code, item }) =>
    item === 'detergent' && code === 'soft',
}

const shoppingCart = ['broom', 'mop', 'detergent']
const findQualifyingItem = pFind(mockStoreApi.qualifiesForDiscount)
const itemCodeArgs = shoppingCart.map(item => ({ item, code: 'soft' }))
const result = await findQualifyingItem(itemCodeArgs)

if (result) {
  const { code, item } = result
  console.log(`code '${code}' applied because you bought ${item}`)
}
