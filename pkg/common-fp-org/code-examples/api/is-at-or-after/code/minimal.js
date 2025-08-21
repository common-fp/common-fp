const janFirst2025 = new Date('2025 1 1')
const isAtOrAfterJanFirst2025 = isAtOrAfter(janFirst2025)

const now = new Date()
isAtOrAfterJanFirst2025(now) // is true

const decFirst2024 = new Date('2024 12 1')
isAtOrAfterJanFirst2025(decFirst2024) // is false

isAtOrAfterJanFirst2025(janFirst2025) // is true
