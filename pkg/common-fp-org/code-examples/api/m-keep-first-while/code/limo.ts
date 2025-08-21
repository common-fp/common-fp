type Seller = {
  name: string
  numSold: number
}
const sellers: Seller[] = [
  { name: 'phil', numSold: 15 },
  { name: 'mary', numSold: 11 },
  { name: 'sarah', numSold: 8 },
]

const soldAtLeast10 = ({ numSold }: Seller) => numSold >= 10
const keepRewardRecipients = mKeepFirstWhile(soldAtLeast10)
keepRewardRecipients(sellers)
const getName = get('name')<Seller>
const getAllNames = mapValues(getName)<Seller[]>
const rewardRecipients = getAllNames(sellers)
console.log(rewardRecipients)
/// is [
///   phil
///   mary
/// ]
