const ticketHolders = {
  mike: 152876,
  luke: 961273,
  emma: 428670,
}

const winningTicket = 961273
const findWinner = findKeyWithVal(winningTicket)
const winner = findWinner(ticketHolders)

console.log(winner)
// is luke
