const mockStoreApi = {
  includedInRewards: async item => item.name === 'detergent',
}

const shoppingCart = [
  { name: 'broom', cost: 3 },
  { name: 'mop', cost: 10 },
  { name: 'detergent', cost: 13 },
]
const keepRewardItems = pKeepWhen(mockStoreApi.includedInRewards)

const rewardItems = await keepRewardItems(shoppingCart)

console.log('items gaining you rewards: ', rewardItems)
/// prints
/// items gaining you rewards:
/// [{
///   name: detergent
///   cost: 13
/// }]
