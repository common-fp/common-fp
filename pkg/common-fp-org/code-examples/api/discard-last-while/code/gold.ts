type Player = { name: string; gold: number }

const players = [
  { name: 'meg', gold: 80 },
  { name: 'tom', gold: 120 },
  { name: 'ken', gold: 9001 },
  { name: 'chris', gold: 9999 },
]

const discardCheaters = discardLastWhile(({ gold }: Player) => gold > 1000)<
  Player[]
>
const updatedPlayers = discardCheaters(players)
console.log(updatedPlayers)
/// is [
///   { name: meg, gold: 80 }
///   { name: tom, gold: 120 }
/// ]
