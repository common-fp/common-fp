const janFirst2025 = new Date('2025 1 1')
const isAtOrBeforeJanFirst2025 = isAtOrBefore(janFirst2025)

const decFirst2024 = new Date('2024 12 1')
isAtOrBeforeJanFirst2025(decFirst2024) // is true

const now = new Date()
isAtOrBeforeJanFirst2025(now) // is false

isAtOrBeforeJanFirst2025(janFirst2025) // is true
