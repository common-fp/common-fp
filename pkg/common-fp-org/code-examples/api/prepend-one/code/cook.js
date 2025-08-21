const tickets = [['burger', 'fries'], ['chicken wings', 'salad'], ['soup']]

const tomsOrder = ['chicken wrap', 'cheese curds']
const prependTomsOrder = prependOne(tomsOrder)

const updatedTickets = prependTomsOrder(tickets)
console.log(updatedTickets)
/// prints [
///   [chicken wrap, cheese curds]
///   [burger, fries]
///   [chicken wings, salad]
///   [soup]
/// ]
