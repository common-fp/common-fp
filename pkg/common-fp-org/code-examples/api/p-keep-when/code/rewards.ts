type Item = {
  name: string
  cost: number
}

const mockStoreApi = {
  includedInRewards: async (item: Item) => item.name === 'detergent',
}

const shoppingCart: Item[] = [
  { name: 'broom', cost: 3 },
  { name: 'mop', cost: 10 },
  { name: 'detergent', cost: 13 },
]
const keepRewardItems = pKeepWhen(mockStoreApi.includedInRewards)<Item[]>

const rewardItems = await keepRewardItems(shoppingCart)

console.log('items gaining you rewards: ', rewardItems)
/// prints
/// items gaining you rewards:
/// [{
///   name: detergent
///   cost: 13
/// }]
