const players = [
  { name: 'meg', gold: 80 },
  { name: 'tom', gold: 120 },
  { name: 'ken', gold: 9001 },
  { name: 'chris', gold: 9999 },
]

const discardCheaters = discardLastWhile(({ gold }) => gold > 1000)
const updatedPlayers = discardCheaters(players)
console.log(updatedPlayers)
/// is [
///   { name: meg, gold: 80 }
///   { name: tom, gold: 120 }
/// ]
