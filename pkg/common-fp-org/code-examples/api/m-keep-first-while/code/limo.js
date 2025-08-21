const sellers = [
  { name: 'phil', numSold: 15 },
  { name: 'mary', numSold: 11 },
  { name: 'sarah', numSold: 8 },
]

const soldAtLeast10 = ({ numSold }) => numSold >= 10
const keepRewardRecipients = mKeepFirstWhile(soldAtLeast10)
keepRewardRecipients(sellers)
const getNames = mapValues(get('name'))
const rewardRecipients = getNames(sellers)
console.log(rewardRecipients)
/// is [
///   phil
///   mary
/// ]
