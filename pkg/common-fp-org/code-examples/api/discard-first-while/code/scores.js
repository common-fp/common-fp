const scores = [0, 0, 70, 88, 92]

const discardZeroes = discardFirstWhile(n => n === 0)
const updatedScores = discardZeroes(scores)
console.log(updatedScores)
// is [70, 88, 92]
