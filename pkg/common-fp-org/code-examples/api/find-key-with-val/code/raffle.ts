type TicketHolders = Record<string, number>
const ticketHolders: TicketHolders = {
  mike: 152876,
  luke: 961273,
  emma: 428670,
}

const winningTicket = 961273
const findWinner = findKeyWithVal(winningTicket)<TicketHolders>
const winner = findWinner(ticketHolders)

console.log(winner)
// is luke
