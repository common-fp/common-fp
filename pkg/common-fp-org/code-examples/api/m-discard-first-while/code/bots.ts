type Character = {
  name: string
  humanScore: number
}

const characters: Character[] = [
  { name: 'FireDragon', humanScore: 0 },
  { name: 'YouDontGnome', humanScore: 5 },
  { name: 'HeadlessNick', humanScore: 20 },
]

const isBot = ({ humanScore }: Character) => humanScore < 10
const removeBots = mDiscardFirstWhile(isBot)
removeBots(characters)
console.log(characters)
/// is [
///   { name: HeadlessNick, humanScore: 20 }
/// ]
