type ItemCode = {
  item: string
  code: string
}

const mockStoreApi = {
  qualifiesForDiscount: async ({ code, item }: ItemCode) =>
    item === 'detergent' && code === 'soft',
}

const shoppingCart = ['broom', 'mop', 'detergent']
const findQualifyingItem = pFind(mockStoreApi.qualifiesForDiscount)<ItemCode[]>
const itemCodeArgs = shoppingCart.map(item => ({ item, code: 'soft' }))
const result = await findQualifyingItem(itemCodeArgs)

if (result) {
  const { code, item } = result
  console.log(`code '${code}' applied because you bought ${item}`)
}
