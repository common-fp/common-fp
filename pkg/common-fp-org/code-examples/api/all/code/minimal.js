const gt2 = n => n > 2
const allGt2 = all(gt2)

allGt2([2, 3]) // is false
allGt2([3, 4]) // is true
allGt2({ b: 2, c: 3 }) // is false
allGt2({ c: 3, d: 4 }) // is true
