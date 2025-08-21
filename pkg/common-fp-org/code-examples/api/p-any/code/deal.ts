const mockStoreApi = {
  hasBundleDeal: async (item: string) => item === 'detergent',
}

const shoppingCart = ['broom', 'mop', 'detergent']
const anyItemHasDeal = pAny(mockStoreApi.hasBundleDeal)<string[]>

const shouldShowDeal = await anyItemHasDeal(shoppingCart)

console.log('shouldShowDeal: ' + shouldShowDeal)
// is true
