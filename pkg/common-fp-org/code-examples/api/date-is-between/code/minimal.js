const today = new Date('2025-04-09')
const lastWeek = new Date('2025-04-02')
const isWithinTheLastWeek = dateIsBetween(lastWeek, today)

const yesterday = new Date('2025-04-08')
const tomorrow = new Date('2025-04-10')

isWithinTheLastWeek(yesterday) // is true
isWithinTheLastWeek(tomorrow) // is false
