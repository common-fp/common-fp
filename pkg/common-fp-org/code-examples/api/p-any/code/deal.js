const mockStoreApi = {
  hasBundleDeal: async item => item === 'detergent',
}

const shoppingCart = ['broom', 'mop', 'detergent']
const anyItemHasDeal = pAny(mockStoreApi.hasBundleDeal)
const shouldShowDeal = await anyItemHasDeal(shoppingCart)

console.log('shouldShowDeal: ' + shouldShowDeal)
// is true
