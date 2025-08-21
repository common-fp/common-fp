const playerMoney = {
  grace: 180,
  sam: 350,
  jen: 2170,
}

const resetGame = fillWith(1500)
const initialMoney = resetGame(playerMoney)
console.log(initialMoney)
/// is
/// {
///   grace: 1500,
///   sam: 1500,
///   jen: 1500,
/// }
