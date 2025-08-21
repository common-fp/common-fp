const characters = [
  { name: 'FireDragon', humanScore: 0 },
  { name: 'YouDontGnome', humanScore: 5 },
  { name: 'HeadlessNick', humanScore: 20 },
]

const isBot = ({ humanScore }) => humanScore < 10
const removeBots = mDiscardFirstWhile(isBot)
removeBots(characters)
console.log(characters)
/// is [
///   { name: HeadlessNick, humanScore: 20 }
/// ]
