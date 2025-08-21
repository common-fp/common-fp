const groupChat = {
  'jen@example.com': 'Jen',
  'mike@example.com': 'Mike',
}

const toCommaList = joinValues(', ')
const groupDisplay = toCommaList(groupChat)
console.log(groupDisplay)
// prints Jen, Mike
