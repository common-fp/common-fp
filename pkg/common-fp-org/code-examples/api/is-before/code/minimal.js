const janFirst2025 = new Date('2025 1 1')
const isBeforeJanFirst2025 = isBefore(janFirst2025)

const decFirst2024 = new Date('2024 12 1')
isBeforeJanFirst2025(decFirst2024) // is true

const now = new Date()
isBeforeJanFirst2025(now) // is false
