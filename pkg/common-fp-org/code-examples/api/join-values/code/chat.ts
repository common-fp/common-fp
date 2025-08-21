type GroupChat = Record<string, string>
const groupChat: GroupChat = {
  'jen@example.com': 'Jen',
  'mike@example.com': 'Mike',
}

const toCommaList = joinValues(', ')<GroupChat>
const groupDisplay = toCommaList(groupChat)
console.log(groupDisplay)
// prints Jen, Mike
