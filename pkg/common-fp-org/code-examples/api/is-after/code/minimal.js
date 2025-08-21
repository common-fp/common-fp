const janFirst2025 = new Date('2025 1 1')
const isAfterJanFirst2025 = isAfter(janFirst2025)

const now = new Date()
isAfterJanFirst2025(now) // is true

const decFirst2024 = new Date('2024 12 1')
isAfterJanFirst2025(decFirst2024) // is false
